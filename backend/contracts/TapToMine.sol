// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TapToMine {
    address public owner;
    uint256 public rewardPerTap;
    uint256 public dailyBonus = 0.002 ether;
    uint256 public weeklyBonus = 0.005 ether;
    uint256 public bonusPeriod = 1 days; // 1 day
    uint256 public weeklyTarget = 10000; // Weekly target clicks
    uint256 public weeklyPeriod = 168 hours; // 1 week
    mapping(address => uint256) public userBalances;
    mapping(address => Player) public players;
    mapping(address => uint256) public lastLogin;
    mapping(address => uint256) public weeklyStart; // Track weekly start time
    address[] public playerAddresses;

    struct Player {
        address playerAddress;
        uint256 earnings;
        uint256 clicks;
    }

    event Tap(address indexed user, uint256 reward);
    event Withdraw(address indexed user, uint256 amount);
    event FundContract(address indexed sender, uint256 amount);
    event UpdateReward(address indexed owner, uint256 newReward);
    event UserWithdraw(address indexed user, uint256 amount);
    event ClaimDailyBonus(address indexed user, uint256 bonus);
    event UpdateDailyBonus(address indexed owner, uint256 newBonus);
    event ClaimWeeklyBonus(address indexed user, uint256 bonus);
    event UpdateWeeklyBonus(address indexed owner, uint256 newBonus);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(uint256 _rewardPerTap) {
        owner = msg.sender;
        rewardPerTap = _rewardPerTap;
    }

    function tap() external {
        require(address(this).balance >= rewardPerTap, "Insufficient contract balance to reward");

        userBalances[msg.sender] += rewardPerTap;
        emit Tap(msg.sender, rewardPerTap);

        Player storage player = players[msg.sender];
        player.playerAddress = msg.sender;
        player.earnings += rewardPerTap;
        player.clicks += 1;

        if (player.clicks == 1) {
            playerAddresses.push(msg.sender);
            weeklyStart[msg.sender] = block.timestamp; // Initialize weekly start time
        }

        lastLogin[msg.sender] = block.timestamp; // Update last login time
    }

    function claimDailyBonus() external {
        require(block.timestamp - lastLogin[msg.sender] >= bonusPeriod, "Daily bonus already claimed for today");
        require(address(this).balance >= dailyBonus, "Insufficient contract balance to reward");

        userBalances[msg.sender] += dailyBonus;
        emit ClaimDailyBonus(msg.sender, dailyBonus);

        lastLogin[msg.sender] = block.timestamp; // Update last login time
    }

    function claimWeeklyBonus() external {
        Player storage player = players[msg.sender];
        require(player.clicks >= weeklyTarget, "Weekly target not reached");
        require(block.timestamp - weeklyStart[msg.sender] <= weeklyPeriod, "Weekly target period has expired");

        require(address(this).balance >= weeklyBonus, "Insufficient contract balance to reward");
        userBalances[msg.sender] += weeklyBonus;
        emit ClaimWeeklyBonus(msg.sender, weeklyBonus);

        player.clicks = 0; // Reset clicks for the new week
        weeklyStart[msg.sender] = block.timestamp; // Reset weekly start time
    }

    function ownerWithdraw() external onlyOwner {
        uint256 amount = address(this).balance;
        require(amount > 0, "No balance to withdraw");

        payable(owner).transfer(amount);
        emit Withdraw(owner, amount);
    }

    function userWithdraw() external {
        uint256 amount = userBalances[msg.sender];
        require(amount > 0, "No balance to withdraw");

        userBalances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        emit UserWithdraw(msg.sender, amount);
    }

    function fundContract() external payable onlyOwner {
        emit FundContract(msg.sender, msg.value);
    }

    function updateRewardPerTap(uint256 newReward) external onlyOwner {
        rewardPerTap = newReward;
        emit UpdateReward(owner, newReward);
    }

    function updateDailyBonus(uint256 newBonus) external onlyOwner {
        dailyBonus = newBonus;
        emit UpdateDailyBonus(owner, newBonus);
    }

    function updateWeeklyBonus(uint256 newBonus) external onlyOwner {
        weeklyBonus = newBonus;
        emit UpdateWeeklyBonus(owner, newBonus);
    }

    function getTopPlayers(uint256 count) public view returns (Player[] memory) {
        require(count <= playerAddresses.length, "Not enough players");

        Player[] memory topPlayers = new Player[](count);
        for (uint256 i = 0; i < playerAddresses.length; i++) {
            for (uint256 j = 0; j < count; j++) {
                if (topPlayers[j].earnings < players[playerAddresses[i]].earnings) {
                    for (uint256 k = count - 1; k > j; k--) {
                        topPlayers[k] = topPlayers[k - 1];
                    }
                    topPlayers[j] = players[playerAddresses[i]];
                    break;
                }
            }
        }
        return topPlayers;
    }

    receive() external payable {
        emit FundContract(msg.sender, msg.value);
    }
}

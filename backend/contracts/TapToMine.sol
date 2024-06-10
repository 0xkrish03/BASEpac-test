// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TapToMine {
    address public owner;
    uint256 public rewardPerTap;
    mapping(address => uint256) public userBalances;

    event Tap(address indexed user, uint256 reward);
    event Withdraw(address indexed user, uint256 amount);
    event FundContract(address indexed sender, uint256 amount);
    event UpdateReward(address indexed owner, uint256 newReward);
    event UserWithdraw(address indexed user, uint256 amount);

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

    receive() external payable {
        emit FundContract(msg.sender, msg.value);
    }
}

import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-gray-800 pt-0.5 to-black text-white p-4 text-center shadow-inner">
        <div>
        <li className="hover:underline"><Link href="/working">How the Game works</Link></li>
        </div>
        <p>&copy; 2024 BASEpac. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  
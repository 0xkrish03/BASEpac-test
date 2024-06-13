import { ReactNode } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="flex bg-black text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col relative">
          <Navbar />
          <main className="flex-1 p-4 bg-black relative">
            {/* Background animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
            </div>
            {/* Content */}
            <div className="relative z-10">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;

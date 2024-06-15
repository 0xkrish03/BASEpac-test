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
      <body className="flex-1 flex flex-col relative ">
        <Navbar />
        <div className="flex bg-black pt-0.5 text-white ">
        <Sidebar />
          <main className="flex-1 px-0.5 pb-0.5 bg-black relative">
            {/* Background animation */}
            <div className="absolute inset-0   justify-self-center">
            </div>
            {/* Content */}
            <div className="relative z-10">{children}</div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <hr className="bg-cyan-900 h-0.5 opacity-30" />
      <main className="flex-1 bg-white p-4 text-cyan-900">{children}</main>
      <hr className="bg-cyan-900 h-0.5 opacity-30" />
      <Footer />
    </div>
  );
};

export default Layout;

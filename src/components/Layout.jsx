import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StartTradingBanner from './StartTradingBanner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <StartTradingBanner />
      <Footer />
    </div>
  );
};

export default Layout;

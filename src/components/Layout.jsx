import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StartTradingBanner from './StartTradingBanner';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
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

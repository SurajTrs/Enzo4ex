import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Forex from "./pages/Forex";
import StartTradingBanner from './components/StartTradingBanner';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/forex" element={<Forex />} />
          </Routes>
        </div>
        <StartTradingBanner />
        <div className="py-8"></div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Forex from './pages/Forex';
import PageNotFound from './components/common/PageNotFound';
import ForexLive from './pages/ForexLive';
import IndicesLive from './pages/IndicesLive';
import CommoditiesLive from './pages/CommoditiesLive';
import StocksLive from './pages/StocksLive';
import CryptoLive from './pages/CryptoLive';
import Etf from './pages/Etf';
import EtfLive from './pages/EtfLive';
import Futures from './pages/Futures';
import FuturesLive from './pages/FuturesLive';
import Gold from './pages/Gold';
import GoldLive from './pages/GoldLive';
import Synthetic from './pages/Synthetic';
import SyntheticLive from './pages/SyntheticLive';
import ContractSpecs from './pages/ContractSpecs';
import DynamicLeverage from './pages/DynamicLeverage';
import Enzo4ex from './pages/Enzo4ex';
import TradingView from './pages/TradingView';

// Import other pages as needed
  import Indices from './pages/Indices';
import Commodities from './pages/Commodities';
import Stocks from './pages/Stocks';
import Crypto from './pages/Crypto';
// import Login from './pages/Login';
// import Register from './pages/Register';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="forex" element={<Forex />} />
          <Route path="forex/live" element={<ForexLive />} />
          {/* Add more routes here */}
          { <Route path="indices" element={<Indices />} /> }
          <Route path="indices/live" element={<IndicesLive />} />
          { <Route path="commodities" element={<Commodities />} /> }
          <Route path="commodities/live" element={<CommoditiesLive />} />
          { <Route path="stocks" element={<Stocks />} /> }
          <Route path="stocks/live" element={<StocksLive />} />
          { <Route path="crypto" element={<Crypto />} /> }
          <Route path="crypto/live" element={<CryptoLive />} />
          { <Route path="etf" element={<Etf />} /> }
          <Route path="etf/live" element={<EtfLive />} />
          { <Route path="futures" element={<Futures />} /> }
          <Route path="futures/live" element={<FuturesLive />} />
          { <Route path="gold" element={<Gold />} /> }
          <Route path="gold/live" element={<GoldLive />} />
          { <Route path="synthetic-indices" element={<Synthetic />} /> }
          <Route path="synthetic-indices/live" element={<SyntheticLive />} />
          <Route path="classic-leverage" element={<ContractSpecs />} />
          <Route path="dynamic-leverage" element={<DynamicLeverage />} />
          <Route path="enzo4ex" element={<Enzo4ex />} />
          <Route path="Enzo4exTrader" element={<Enzo4ex />} />
          <Route path="tradingview" element={<TradingView />} />
          {/* <Route path="crypto" element={<Crypto />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

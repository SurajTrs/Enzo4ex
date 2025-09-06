import Forexhero from "../components/ForexPage/Forexhero";
import ForexMarkets from "../components/ForexPage/ForexMarkets";
import WhyTradeWithEnzo from "../components/ForexPage/WhyTradeWithEnzo";
import ThinkTraderPerformance from "../components/ForexPage/ThinkTraderPerformance";
import ForexPairs from "../components/ForexPage/ForexPairs";
import NewToForex from "../components/ForexPage/NewToForex";
import ForexLiveInline from "../components/ForexPage/ForexLiveInline";

function Forex() {
  return (
    <>
      <Forexhero />
      <ForexLiveInline />
      <ForexMarkets />
     
       <WhyTradeWithEnzo />
      <ThinkTraderPerformance />
      <ForexPairs />
      <NewToForex />
    </>
  );
}

export default Forex;
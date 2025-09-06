import Enzo4exHero from "../components/Enzo4exTrader/Enzo4exHero";
import heroShot from "../assets/enzo4ex-hero.png";
import Enzo4exAccessTabs from "../components/Enzo4exTrader/Enzo4exAccessTabs";
import Enzo4exMobile from "../components/Enzo4exTrader/Enzo4exMobile";
import TradersGym from "../components/Enzo4exTrader/TradersGym";

function Enzo4ex() {
  return (
    <>
    <Enzo4exHero previewSrc={heroShot}/>
    <Enzo4exAccessTabs/>
    <Enzo4exMobile/>
    <TradersGym/>

    </>
  );
}

export default Enzo4ex;
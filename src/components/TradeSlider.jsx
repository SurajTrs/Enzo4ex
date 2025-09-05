"use client";

import Slider from "react-slick";
import { assets } from "../assets/assets";
import { Sparkles, TrendingUp } from "lucide-react";

const tradeOptions = [
  {
    title: "Forex",
    desc: "Trade 70+ major, minor and exotic currency pairs.",
    image: assets.tradeSlider1,
    textColor: "text-white",
  },
  {
    title: "Shares",
    desc: "Trade stocks of the most popular listed companies in the world.",
    image: assets.tradeSlider2,
    textColor: "text-black",
  },
  {
    title: "Metals",
    desc: "Trade Gold, Silver, Platinum and other metals.",
    image: assets.tradeSlider3,
    textColor: "text-black",
  },
  {
    title: "Commodities",
    desc: "Trade commodities such as Oil, Gas, Corn and Sugar.",
    image: assets.tradeSlider4,
    textColor: "text-white",
  },
  {
    title: "Indices",
    desc: "Trade major global stock indices including the NASDAQ 100 and S&P 500.",
    image: assets.tradeSlider5,
    textColor: "text-black",
  },
  {
    title: "Digital Currencies",
    desc: "Trade Bitcoin, Ethereum, Litecoin and altcoins.",
    image: assets.tradeSlider6,
    textColor: "text-black",
  },
  {
    title: "ETFs",
    desc: "Trade multiple investment classes and sectors with ETFs.",
    image: assets.tradeSlider7,
    textColor: "text-white",
  },
  {
    title: "Bonds",
    desc: "Trade UK Long-term Bond gilts and US 10-year Treasury Notes.",
    image: assets.tradeSlider8,
    textColor: "text-black",
  },
];

const TradeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-[90%] mx-auto py-12 sm:py-16 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-purple-50/30 -z-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200/10 to-fuchsia-200/10 rounded-full blur-3xl -z-10" />
      
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 border border-purple-200/50 mb-4">
          <TrendingUp className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Premium Trading Experience</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Trade with a 
          <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">trusted global leader</span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover <span className="font-semibold text-purple-600">8 diverse asset classes</span> with institutional-grade execution, 
          advanced charting tools, and real-time market data across global markets.
        </p>
      </div>
      {/* Trading Cards Slider */}
      <Slider {...settings}>
        {tradeOptions.map((item, index) => (
          <div key={index} className="px-2 group overflow-hidden">
            <div
              className={`relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[60vh] flex flex-col justify-between overflow-hidden rounded-lg ${item.textColor}`}
            >
              <div className="absolute top-3 sm:top-4 lg:top-6 xl:top-8 left-3 sm:left-4 lg:left-5 z-10 max-w-[80%]">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="absolute inset-0 w-full h-full group-hover:scale-110 duration-700 object-cover transition-all"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TradeSlider;

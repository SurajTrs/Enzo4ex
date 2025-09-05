import React from "react";
import { 
  Zap, 
  Eye, 
  Bell, 
  Layers, 
  Calendar, 
  Monitor, 
  Target,
  Sparkles,
  Download,
  UserPlus,
  ArrowRight
} from "lucide-react";
import { assets } from "../assets/assets";

const featuresLeft = [
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Lightning-fast execution",
    description:
      "Execute trades instantly with our advanced order management system and ultra-low latency infrastructure.",
    gradient: "from-blue-500 to-cyan-500",
    count: "<1ms"
  },
  {
    icon: <Bell className="w-7 h-7 text-white" />,
    title: "Intelligent alerts",
    description:
      "Set up to 200 cloud-based alerts with AI-powered market insights delivered directly to your devices.",
    gradient: "from-emerald-500 to-teal-500",
    count: "200+"
  },
  {
    icon: <Layers className="w-7 h-7 text-white" />,
    title: "Advanced order types",
    description: "Access 6+ sophisticated order types including stop-loss, take-profit, and conditional orders.",
    gradient: "from-purple-500 to-violet-500",
    count: "6+"
  },
];

const featuresRight = [
  {
    icon: <Eye className="w-7 h-7 text-white" />,
    title: "Smart watchlists",
    description:
      "Create and customize up to 10 intelligent watchlists with real-time performance tracking and analytics.",
    gradient: "from-amber-500 to-orange-500",
    count: "10+"
  },
  {
    icon: <Monitor className="w-7 h-7 text-white" />,
    title: "Multi-chart analysis",
    description:
      "Monitor up to 8 synchronized charts with advanced technical indicators and market depth analysis.",
    gradient: "from-fuchsia-500 to-pink-500",
    count: "8x"
  },
  {
    icon: <Calendar className="w-7 h-7 text-white" />,
    title: "Economic calendar",
    description:
      "Stay ahead with comprehensive market calendar featuring high-impact events and real-time economic data.",
    gradient: "from-indigo-500 to-blue-500",
    count: "24/7"
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-fuchsia-200/20 to-purple-200/20 rounded-full blur-3xl -z-10" />
      
      {/* Header Section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 border border-purple-200/50 mb-4">
          <Target className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Premium Trading Platform</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Enzo4ex: Where 
          <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent"> speed meets precision</span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Experience institutional-grade trading with our cutting-edge platform featuring 
          <span className="font-semibold text-purple-600">lightning-fast execution</span> and 
          <span className="font-semibold text-purple-600">optimal pricing</span> across all markets.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-16">
        {/* Left Features */}
        <div className="flex flex-col gap-8 max-w-md xl:max-w-sm">
          {featuresLeft.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 rounded-3xl" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-xl" />
              
              <div className="relative flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className={`relative rounded-2xl bg-gradient-to-r ${item.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                      {item.count}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Center Phone with Video */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-[3rem] blur-2xl scale-110" />
            
            {/* Phone Frame */}
            <div className="relative">
              <img
                src={assets.phoneImg}
                alt="Enzo4ex Mobile Platform"
                className="h-[85vh] md:h-[90vh] lg:h-[95vh] relative z-10 drop-shadow-2xl"
              />
              
              {/* Video inside Phone */}
              <video
                src={assets.phoneVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-3 rounded-[10%] left-[6%] w-[86%] h-[82vh] md:h-[87vh] lg:h-[92vh] object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-8 max-w-md xl:max-w-sm">
          {featuresRight.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 rounded-3xl" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-xl" />
              
              <div className="relative flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className={`relative rounded-2xl bg-gradient-to-r ${item.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                      {item.count}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl">
          <button className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 active:scale-[0.98]">
            <UserPlus className="w-5 h-5" />
            Create account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center gap-3 bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white text-gray-800 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 active:scale-[0.98]">
            <Download className="w-5 h-5" />
            Get the app
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Join <span className="font-semibold text-purple-600">500,000+</span> traders worldwide
        </p>
      </div>
    </section>
  );
}

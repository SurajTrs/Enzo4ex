import React from "react";
import { 
  Crown, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  ExternalLink,
  BarChart3,
  Zap,
  Shield,
  Award
} from "lucide-react";
import { assets } from "../assets/assets";

export default function ExclusiveFeatures() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-200/20 to-fuchsia-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10" />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 sm:mb-16">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 border border-purple-200/50">
              <Crown className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Exclusive Trading Tools</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Advanced 
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent"> trading ecosystem</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Elevate your trading with our 
              <span className="font-semibold text-purple-600">institutional tools</span> and 
              <span className="font-semibold text-purple-600">innovative features</span> for professional traders.
            </p>
          </div>
          
          <div className="mt-6 lg:mt-0 flex-shrink-0">
            <button className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 hover:text-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 text-sm sm:text-base">
              Discover platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8">
          {/* Featured Card - Traders' Gym */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <video
              src={assets.traderGym}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <BarChart3 className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-white">Strategy Development</span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Professional Trading Simulator
                </h3>
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                  Master strategies with our advanced backtesting engine. Test on 
                  <span className="font-semibold text-white">10+ years of data</span> 
                  in a risk-free environment with institutional analytics.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Risk-free testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Real-time analysis</span>
                  </div>
                </div>
                <button className="group/btn inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 text-sm sm:text-base">
                  Start simulation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="flex flex-col gap-8">
            {/* TradingView Integration */}
            <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-fuchsia-50/80 rounded-3xl" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 border border-purple-200/50">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-medium text-purple-700">Chart Integration</span>
                  </div>
                  
                  <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                    TradingView Pro Integration
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Seamlessly connect to the world's leading charting platform. Execute trades directly from 
                    <span className="font-semibold text-purple-600"> advanced charts</span> with 
                    <span className="font-semibold text-purple-600">100+ indicators</span>.
                  </p>
                  
                  {/* Reviews Section */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-800">Excellent</span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 transition-colors">
                      1,000+ reviews
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                
                <button className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 text-sm sm:text-base">
                  Connect now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Signal Centre */}
            <div className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 rounded-3xl" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200/50">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700">FCA Regulated</span>
                  </div>
                  
                  <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                    Professional Signal Centre
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Receive up to <span className="font-semibold text-emerald-600">50 premium signals daily</span> from 
                    FCA-regulated analysts with <span className="font-semibold text-emerald-600">85%+ accuracy rate</span> 
                    and real-time market insights.
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Real-time alerts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Risk management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Market analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Entry/exit points</span>
                    </div>
                  </div>
                </div>
                
                <button className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 text-sm sm:text-base">
                  Access signals
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { 
  TrendingUp,
  Building2,
  Wheat,
  BarChart3,
  Bitcoin,
  PieChart,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-fuchsia-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10" />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-4">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 border border-purple-200/50">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Global Trading Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Unlock your 
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent"> trading potential</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Access over <span className="font-semibold text-purple-600">4,000+ trading opportunities</span> across multiple asset classes with institutional-grade execution and cutting-edge technology.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 hover:text-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
            >
              See contract specifications
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Trading Categories */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {[
            { 
              label: "Forex", 
              Icon: TrendingUp, 
              description: "Major & exotic pairs",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50",
              count: "80+"
            },
            { 
              label: "Stocks", 
              Icon: Building2, 
              description: "Global equities",
              gradient: "from-emerald-500 to-teal-500",
              bgGradient: "from-emerald-50 to-teal-50",
              count: "3000+"
            },
            { 
              label: "Commodities", 
              Icon: Wheat, 
              description: "Precious metals & energy",
              gradient: "from-amber-500 to-orange-500",
              bgGradient: "from-amber-50 to-orange-50",
              count: "25+"
            },
            { 
              label: "Indices", 
              Icon: BarChart3, 
              description: "Global market indices",
              gradient: "from-purple-500 to-violet-500",
              bgGradient: "from-purple-50 to-violet-50",
              count: "40+"
            },
            { 
              label: "Crypto", 
              Icon: Bitcoin, 
              description: "Digital assets",
              gradient: "from-orange-500 to-red-500",
              bgGradient: "from-orange-50 to-red-50",
              count: "50+"
            },
            { 
              label: "ETFs", 
              Icon: PieChart, 
              description: "Exchange traded funds",
              gradient: "from-fuchsia-500 to-pink-500",
              bgGradient: "from-fuchsia-50 to-pink-50",
              count: "200+"
            }
          ].map(({ label, Icon, description, gradient, bgGradient, count }) => (
            <div
              key={label}
              className={`group relative rounded-3xl border border-white/60 bg-gradient-to-br ${bgGradient} backdrop-blur-sm px-6 py-8 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl" />
              
              <div className="relative flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className={`relative rounded-2xl bg-gradient-to-r ${gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{label}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${gradient} text-white`}>
                      {count}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{description}</p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

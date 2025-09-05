import React from "react";
import { 
  Smartphone, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock,
  Zap
} from "lucide-react";

export default function StartTradingBanner() {
  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 overflow-hidden min-h-[500px] sm:min-h-[400px] rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 md:mx-6 my-8">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)] -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-violet-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center py-8 sm:py-12">
        {/* Compact Header Section */}
        <div className="text-center mb-8 px-2">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Open Trading Account in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
        </div>

        {/* Horizontal Steps Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 w-full px-2 sm:px-0">
          {/* Step 1 */}
          <div className="w-full md:w-auto flex-1 group">
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/30 rounded-xl p-3 sm:p-4 hover:border-purple-500/30 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-0.5 sm:mb-1 truncate">Verify Identity</h3>
                  <p className="text-gray-300 text-xs sm:text-sm truncate">Quick mobile & email verification</p>
                </div>
                <div className="hidden sm:block text-3xl sm:text-4xl font-black text-purple-500/30 ml-2">1</div>
              </div>
            </div>
          </div>

          {/* Arrow - Hidden on mobile, shown on md and up */}
          <ArrowRight className="hidden md:block w-6 h-6 text-purple-400 flex-shrink-0 rotate-90 md:rotate-0" />

          {/* Step 2 */}
          <div className="w-full md:w-auto flex-1 group mt-2 sm:mt-0">
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/30 rounded-xl p-3 sm:p-4 hover:border-purple-500/30 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-0.5 sm:mb-1 truncate">Upload Documents</h3>
                  <p className="text-gray-300 text-xs sm:text-sm truncate">AI-powered document processing</p>
                </div>
                <div className="hidden sm:block text-3xl sm:text-4xl font-black text-purple-500/30 ml-2">2</div>
              </div>
            </div>
          </div>

          {/* Arrow - Hidden on mobile, shown on md and up */}
          <ArrowRight className="hidden md:block w-6 h-6 text-purple-400 flex-shrink-0 rotate-90 md:rotate-0" />

          {/* Step 3 */}
          <div className="w-full md:w-auto flex-1 group mt-2 sm:mt-0">
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/30 rounded-xl p-3 sm:p-4 hover:border-purple-500/30 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-0.5 sm:mb-1 truncate">Start Trading</h3>
                  <p className="text-gray-300 text-xs sm:text-sm truncate">Account ready in minutes</p>
                </div>
                <div className="hidden sm:block text-3xl sm:text-4xl font-black text-purple-500/30 ml-2">3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact CTA Section */}
        <div className="text-center mt-6 sm:mt-8 px-2">
          <button className="group inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600 text-white font-bold rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
            <span className="text-sm sm:text-base">Open Account Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

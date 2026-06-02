import React from 'react';
import { Search, AlertCircle, FileText, CreditCard, HelpCircle, LayoutGrid } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-zinc-950 text-white overflow-hidden">
      
      {/* Background Image Layer with Heavy Dark Overlay matching the reference site */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=80" 
          alt="Dubai Infrastructure Backdrop" 
          className="w-full h-full object-cover object-center opacity-40 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950"></div>
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 max-w-5xl mx-auto w-full text-center">
        
        {/* Anniversary Badge / Graphic Element Container */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-2 border-emerald-500/40 bg-emerald-950/30 backdrop-blur-md shadow-2xl">
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-emerald-400">70</span>
              <span className="block text-[9px] uppercase tracking-widest text-zinc-300">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Hero Central Typography Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-3xl drop-shadow-md">
          70th Anniversary of Dubai Police
        </h1>

        {/* Centered Unified Search Bar Container */}
        <div className="w-full max-w-2xl relative shadow-2xl rounded-xl overflow-hidden group">
          <input 
            type="text" 
            placeholder="Search for a service..." 
            className="w-full h-14 pl-14 pr-6 bg-white text-zinc-900 placeholder-zinc-500 text-lg font-medium outline-hidden transition-all focus:ring-4 focus:ring-emerald-500/30"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-6 h-6 transition-colors group-focus-within:text-emerald-600" />
        </div>

        {/* Micro-carousel Slider Controls Indicators */}
        <div className="flex items-center space-x-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-white transition-all cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all cursor-pointer"></span>
        </div>
      </div>

      {/* Lower Interactive Feature Service Cards Grid System */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
          {/* Card 1: Make a Report */}
          <div className="bg-white/90 backdrop-blur-md text-zinc-900 rounded-xl p-5 shadow-xl flex flex-col justify-between group hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="mb-4">
              <AlertCircle className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Make a Report</h3>
              <p className="text-xs opacity-80 line-clamp-2">Report and submit your complaint directly.</p>
            </div>
          </div>

          {/* Card 2: Certificates & Permits */}
          <div className="bg-white/90 backdrop-blur-md text-zinc-900 rounded-xl p-5 shadow-xl flex flex-col justify-between group hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="mb-4">
              <FileText className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Apply for a Permit</h3>
              <p className="text-xs opacity-80 line-clamp-2">Access official documents from Dubai Police quickly.</p>
            </div>
          </div>

          {/* Card 3: Inquire & Pay */}
          <div className="bg-white/90 backdrop-blur-md text-zinc-900 rounded-xl p-5 shadow-xl flex flex-col justify-between group hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="mb-4">
              <CreditCard className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Inquire & Pay</h3>
              <p className="text-xs opacity-80 line-clamp-2">Stay updated and settle your payments instantly.</p>
            </div>
          </div>

          {/* Card 4: Request Support */}
          <div className="bg-white/90 backdrop-blur-md text-zinc-900 rounded-xl p-5 shadow-xl flex flex-col justify-between group hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            <div className="mb-4">
              <HelpCircle className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Request Support</h3>
              <p className="text-xs opacity-80 line-clamp-2">Request support on-site, digitally, in seamless steps.</p>
            </div>
          </div>

          {/* Card 5: Explore More Services */}
          <div className="bg-white/90 backdrop-blur-md text-zinc-900 rounded-xl p-5 shadow-xl flex flex-col justify-between group hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer col-span-2 md:col-span-1">
            <div className="mb-4">
              <LayoutGrid className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Explore More</h3>
              <p className="text-xs opacity-80 line-clamp-2">Browse and discover more available police services.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
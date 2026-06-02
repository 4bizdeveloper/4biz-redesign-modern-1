import React from 'react';
import { Search, Accessibility, Globe, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xs border-b border-white/10 text-white">
      {/* Top Brand & Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: Government/Main Logo Placeholder */}
        <div className="flex items-center space-x-3">
          <div className="h-12 w-32 bg-white/10 backdrop-blur-md rounded border border-white/20 flex items-center justify-center p-2">
            <span className="text-xs font-bold tracking-wider text-center">GOVERNMENT LOGO</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-emerald-400 transition-colors border-b-2 border-emerald-400 pb-1">Home</a>
          <a href="#" className="hover:text-emerald-400 transition-colors pb-1">About Us</a>
          <a href="#" className="hover:text-emerald-400 transition-colors pb-1">Open Data</a>
          <a href="#" className="hover:text-emerald-400 transition-colors pb-1">Application Status</a>
          <a href="#" className="hover:text-emerald-400 transition-colors pb-1">Media</a>
          <a href="#" className="hover:text-emerald-400 transition-colors pb-1">Information</a>
        </nav>

        {/* Right Side: Action Utilities & Secondary Logo */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:inline-flex" aria-label="Accessibility">
            <Accessibility className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-1 text-sm hover:text-emerald-400 transition-colors">
            <Globe className="w-4 h-4" />
            <span>English</span>
          </button>
          <button className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-emerald-900/30">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
          
          {/* Corporate Secondary Logo */}
          <div className="h-12 w-24 bg-white/10 backdrop-blur-md rounded border border-white/20 flex items-center justify-center p-2 hidden lg:flex">
            <span className="text-[10px] font-bold text-center">POLICE LOGO</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
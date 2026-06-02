'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const ENGLISH_CONTENT = {
  placeholder: "Type to search services, enterprise solutions...",
  searchBtn: "Search",
  getStarted: "Get Started",
  nav: ['Home', 'About Us', 'Services', 'Contact Us', 'Blogs']
};

export default function Header() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isSearchOpen, setIsSearchOpen]       = useState(false);
  const [searchQuery, setSearchQuery]         = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) alert(`Querying Index: "${searchQuery}"`);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{ padding: isScrolled ? '10px 16px' : '0' }}
    >
      <header
        className={`w-full transition-all duration-500 text-white relative flex items-center justify-between ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md rounded-full shadow-2xl px-5 h-14 max-w-5xl mx-auto'
            : 'bg-transparent px-4 sm:px-6 lg:px-10 h-20 max-w-full'
        }`}
      >

        {/* ── Search Panel — slides down from header ── */}
        <div
          className={`absolute left-0 right-0 top-0 transition-all duration-300 z-20 overflow-hidden bg-zinc-950 border border-white/10 ${
            isScrolled ? 'rounded-3xl' : 'rounded-none'
          } ${
            isSearchOpen ? 'opacity-100 max-h-32 p-4' : 'opacity-0 max-h-0 p-0'
          }`}
        >
          <form onSubmit={handleSearchSubmit} className="w-full flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center flex-1 mr-3 min-w-0">
              <Search className="w-4 h-4 text-zinc-400 mr-3 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ENGLISH_CONTENT.placeholder}
                className="w-full bg-transparent text-white border-none outline-none placeholder-zinc-500 text-sm min-w-0"
              />
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <button
                type="submit"
                style={{ backgroundColor: '#151569' }}
                className="px-3 py-1.5 rounded-md text-xs font-bold hover:brightness-110 cursor-pointer"
              >
                {ENGLISH_CONTENT.searchBtn}
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* ── Logo ── */}
        <div className="flex items-center z-10 shrink-0">
          <img
            src="/4biz_logo.png"
            alt="4Biz Logo"
            className="w-auto object-contain"
            style={{ height: isScrolled ? '44px' : '60px', transition: 'height 0.3s ease' }}
          />
        </div>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center space-x-0 lg:space-x-1 text-sm font-medium z-10">
          {ENGLISH_CONTENT.nav.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="px-3 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* ── Right Controls ── */}
        <div className="flex items-center space-x-1 sm:space-x-2 z-10 shrink-0">
          <button
            onClick={() => setIsSearchOpen(v => !v)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Open search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            style={{ backgroundColor: '#151569' }}
            className="hidden sm:flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold cursor-pointer hover:brightness-110 transition-all"
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
            <span>{ENGLISH_CONTENT.getStarted}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Drawer panel */}
        <div
          className={`fixed top-0 left-0 w-72 h-full bg-zinc-950 p-6 flex flex-col justify-between transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mb-6 p-1.5 hover:bg-white/10 rounded-full text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col space-y-1">
              {ENGLISH_CONTENT.nav.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <button
            style={{ backgroundColor: '#151569' }}
            className="w-full py-3 rounded-xl font-bold text-white text-sm cursor-pointer hover:brightness-110 transition-all"
          >
            {ENGLISH_CONTENT.getStarted}
          </button>
        </div>
      </div>
    </div>
  );
}
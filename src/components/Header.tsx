'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, Globe, User, Menu, X, ArrowRight, CornerDownLeft, RotateCcw } from 'lucide-react';

// Multi-language Global Search Mock Dataset Matrix (Limited to en and ar)
const MOCK_SERVICES_DATA = {
  en: [
    { id: 1, title: 'Cloud Infrastructure Migration', type: 'Services', url: '#services' },
    { id: 2, title: 'Custom Enterprise ERP Solutions', type: 'Services', url: '#services' },
    { id: 3, title: 'AI Automation & Machine Learning', type: 'Services', url: '#services' },
    { id: 4, title: 'Cybersecurity Threat Auditing & Compliance', type: 'Services', url: '#services' },
    { id: 5, title: 'How to build scalable microservices architectures', type: 'Blogs', url: '#blogs' },
  ],
  ar: [
    { id: 1, title: 'ترحيل البنية التحتية السحابية', type: 'خدمات', url: '#services' },
    { id: 2, title: 'حلول أنظمة ERP المخصصة للمؤسسات', type: 'خدمات', url: '#services' },
    { id: 3, title: 'أتمتة الذكاء الاصطناعي وتعلم الآلة', type: 'خدمات', url: '#services' },
    { id: 4, title: 'تدقيق التهديدات السيبرانية والامتثال', type: 'خدمات', url: '#services' },
    { id: 5, title: 'كيفية بناء بنية خوادم مجهرية قابلة للتوسع', type: 'مدونات', url: '#blogs' },
  ]
};

// Global Interactive Translation Context Dictionary Map
const translations = {
  en: {
    placeholder: "Type to search services, enterprise solutions...",
    searchBtn: "Search",
    matchTitle: "Matching Internal Matrix Results",
    noMatches: "No local matches found for",
    tryTyping: 'Try typing: "Cloud", "AI Automation", or "Services"',
    getStarted: "Get Started",
    nav: ['Home', 'About Us', 'Services', 'Contact Us', 'Blogs']
  },
  ar: {
    placeholder: "اكتب للبحث عن الخدمات، حلول الشركات...",
    searchBtn: "بحث",
    matchTitle: "نتائج البحث المتطابقة",
    noMatches: "لم نجد نتائج لـ",
    tryTyping: 'جرب كتابة: "Cloud" أو "خدماتنا"',
    getStarted: "ابدأ الآن",
    nav: ['الرئيسية', 'من نحن', 'خدماتنا', 'اتصل بنا', 'المدونات']
  }
};

type LanguageKey = keyof typeof translations;

const AVAILABLE_LANGUAGES: { key: LanguageKey; label: string }[] = [
  { key: 'en', label: 'English (UK)' },
  { key: 'ar', label: 'العربية' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLang, setCurrentLang] = useState<LanguageKey>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Sync state transitions on window scrolling mechanics
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock target interface autofocus when search bar panel pops
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Set initial default document parameters cleanly
  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Reactive Multi-Language search matcher rule execution engine 
  const activeSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const activeDataset = MOCK_SERVICES_DATA[currentLang] || MOCK_SERVICES_DATA['en'];

    return activeDataset.filter(item => 
      item.title.toLowerCase().includes(normalizedQuery) || 
      item.type.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery, currentLang]);

  // Universal State Mutator for handling global language parameters
  const changeGlobalLanguage = (targetLang: LanguageKey) => {
    setCurrentLang(targetLang);
    setIsLangDropdownOpen(false);
    
    // Adjust configuration layout values directly across active document nodes
    const dir = targetLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = targetLang;

    // Dispatches notification out to any listening downstream workspace components
    const langEvent = new CustomEvent('langChange', { detail: targetLang });
    window.dispatchEvent(langEvent);
  };

  const resetToEnglish = () => {
    changeGlobalLanguage('en');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Querying Index: "${searchQuery}"`);
    }
  };

  const currentContent = translations[currentLang] || translations['en'];
  const isRtl = currentLang === 'ar';

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 p-0 sm:p-4 transition-all duration-300 ease-in-out">
        <header
          dir={isRtl ? 'rtl' : 'ltr'}
          className={`w-full transition-all duration-500 ease-in-out text-white relative ${
            isScrolled
              ? 'max-w-6xl mx-auto bg-black/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl px-6 h-16'
              : 'max-w-full bg-transparent px-4 sm:px-6 lg:px-8 h-24'
          } flex items-center justify-between`}
        >
          
          {/* Dynamic Full Width Interactive Search Box + Results Drops Overlay */}
          <div
            className={`absolute left-0 right-0 top-0 transition-all duration-300 ease-in-out z-20 overflow-hidden bg-zinc-950 text-white border border-white/10 ${
              isScrolled ? 'rounded-3xl mt-1 mx-2' : 'rounded-none'
            } ${
              isSearchOpen 
                ? 'h-auto max-h-[450px] opacity-100 pointer-events-auto p-4' 
                : 'h-0 opacity-0 pointer-events-none p-0'
            }`}
          >
            <form onSubmit={handleSearchSubmit} className="w-full flex items-center justify-between border-b border-white/10 pb-3">
              <div className={`flex items-center flex-1 ${isRtl ? 'ml-4' : 'mr-4'}`}>
                <Search className={`w-5 h-5 text-zinc-400 ${isRtl ? 'ml-3' : 'mr-3'} shrink-0`} />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentContent.placeholder}
                  className="w-full bg-transparent text-white border-none outline-hidden placeholder-zinc-500 text-base"
                />
              </div>
              
              <div className={`flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-2`}>
                <button
                  type="submit"
                  style={{ backgroundColor: '#151569' }}
                  className="px-4 py-1.5 rounded-md text-xs font-bold hover:brightness-110 transition-all flex items-center space-x-1 space-x-reverse cursor-pointer text-white"
                >
                  <span>{currentContent.searchBtn}</span>
                  <CornerDownLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Embedded Live Internal Search Result Display Panel */}
            {isSearchOpen && (
              <div className="mt-3 overflow-y-auto max-h-[320px] custom-scrollbar">
                {activeSearchResults.length > 0 ? (
                  <div>
                    <p className={`text-[11px] uppercase tracking-wider text-zinc-400 mb-2 px-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                      {currentContent.matchTitle}
                    </p>
                    <div className="space-y-1">
                      {activeSearchResults.map((result) => (
                        <a
                          key={result.id}
                          href={result.url}
                          onClick={() => setIsSearchOpen(false)}
                          className={`flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all text-sm group ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                          <div className={`flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-3`}>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/5 group-hover:border-zinc-700">
                              {result.type}
                            </span>
                            <span className="text-zinc-200 group-hover:text-white transition-colors">{result.title}</span>
                          </div>
                          <ArrowRight className={`w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 transition-all ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : searchQuery ? (
                  <div className="text-center py-6 text-sm text-zinc-500">
                    {currentContent.noMatches} "{searchQuery}"
                  </div>
                ) : (
                  <div className={`py-4 px-2 text-xs text-zinc-400 italic ${isRtl ? 'text-right' : 'text-left'}`}>
                    {currentContent.tryTyping}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Left Side: Brand Logo */}
          <div className="flex items-center z-10">
            <a href="#" className="block transition-transform active:scale-95">
              <img
                src="/4biz_logo.png"
                alt="4Biz Logo"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'h-8 w-auto' : 'h-12 w-auto'
                }`}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    target.nextElementSibling.classList.remove('hidden');
                  }
                }}
              />
              <div className="hidden h-10 px-3 bg-white/10 rounded flex items-center justify-center border border-white/20">
                <span className="text-xs font-black tracking-wider text-[#151569]">4BIZ</span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation Menu Links */}
          <nav className={`hidden md:flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-1 lg:space-x-4 text-sm font-medium z-10`}>
            {currentContent.nav.map((item, idx) => (
              <a 
                key={idx} 
                href={`#${translations.en.nav[idx].toLowerCase().replace(' ', '')}`} 
                className="px-3 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200 white-space-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side: Action Utility Controls */}
          <div className={`flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-2 lg:space-x-4 z-10`}>
            
            {/* Active Search Toggle Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer" 
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* Contextual Multi-Language Dropdown Architecture Wrapper */}
            <div className="relative" ref={langDropdownRef}>
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1.5 space-x-reverse text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all active:scale-95 cursor-pointer text-white"
              >
                <Globe className="w-3.5 h-3.5 text-white" />
                <span className="text-zinc-200 hover:text-white transition-colors">
                  {AVAILABLE_LANGUAGES.find(l => l.key === currentLang)?.label || 'Languages'}
                </span>
              </button>

              {isLangDropdownOpen && (
                <div className={`absolute top-full mt-2 w-44 bg-zinc-950/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-1 z-50 ${isRtl ? 'left-0' : 'right-0'}`}>
                  {AVAILABLE_LANGUAGES.map((langItem) => (
                    <button
                      key={langItem.key}
                      onClick={() => changeGlobalLanguage(langItem.key)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                        currentLang === langItem.key ? 'bg-[#151569] text-white' : 'hover:bg-white/5 text-zinc-300 hover:text-white'
                      } ${langItem.key === 'ar' ? 'text-right flex-row-reverse' : ''}`}
                    >
                      <span>{langItem.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Anchor Reset Control Override: Returns to English without disrupting viewport state */}
            {currentLang !== 'en' && (
              <button
                onClick={resetToEnglish}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all active:scale-95 cursor-pointer text-white"
                title="Reset environment to English"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
            
            {/* Action CTA Button using exact color hex #151569 */}
            <button 
              style={{ backgroundColor: '#151569' }}
              className="items-center space-x-1 space-x-reverse hover:brightness-125 px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-black/40 active:scale-95 cursor-pointer text-white hidden sm:flex"
            >
              <User className="w-4 h-4" />
              <span>{currentContent.getStarted}</span>
            </button>

            {/* Mobile Hamburg Trigger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer" 
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>
      </div>

      {/* Fully Functional Mobile Navigation Drawer Menu Component (Slide-out Overlay) */}
      <div 
        className={`fixed inset-0 w-full h-full z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Semi-transparent dark back-drop overlay matrix */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-xs"
        />
        
        {/* Navigation Sidebar Panel Container */}
        <div 
          className={`fixed top-0 w-72 h-full bg-zinc-950 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 ease-out text-white ${
            isRtl 
              ? 'right-0 border-l border-white/10' 
              : 'left-0 border-r border-white/10'
          }`}
          style={{ 
            transform: isMobileMenuOpen 
              ? 'translateX(0)' 
              : isRtl ? 'translateX(100%)' : 'translateX(-100%)' 
          }}
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center">
                <img src="/4biz_logo.png" alt="4Biz Logo" className="h-7 w-auto object-contain" />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Link Mapping */}
            <nav className="flex flex-col space-y-3">
              {currentContent.nav.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${translations.en.nav[idx].toLowerCase().replace(' ', '')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3 text-base font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all text-zinc-300 ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Side CTA Layer Inside Mobile Sidebar Drawer */}
          <div className="border-t border-white/10 pt-4">
            <button 
              style={{ backgroundColor: '#151569' }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold hover:brightness-110 active:scale-98 transition-all cursor-pointer text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>{currentContent.getStarted}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
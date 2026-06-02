'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Monitor, Cpu, Database, Layers, Globe, X } from 'lucide-react';

// 3-Slide Multi-Layer Media Storage Object (SEO Optimized Headings & Subtitles)
const slidesData = {
  en: [
    {
      image: "hero-background-1.png",
      heading: "Next-Gen Enterprise Cloud & ERP Solutions",
      sub: "Accelerate your digital transformation journey with customizable 4Biz ERP systems, tailored CRM platforms, and seamless system integrations.",
      badge: "Impacting Infinite"
    },
    {
      image: "hero-background-2.png",
      heading: "Premium Web Development & SEO Performance",
      sub: "Maximize online visibility and scale client pipelines through tailored, high-performance web engineering and data-driven organic search architectures.",
      badge: "Trust & Innovation"
    },
    {
      image: "hero-background-3.png",
      heading: "Secure Corporate IT & Cloud Infrastructure",
      sub: "Protect business asset operations via advanced hosting infrastructure, robust cybersecurity auditing, automated backups, and expert engineering support.",
      badge: "Excellence Unmatched"
    }
  ],
  ar: [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
      heading: "حلول الحوسبة السحابية وأنظمة ERP للمؤسسات",
      sub: "سرّع رحلة التحول الرقمي لأعمالك مع أنظمة 4Biz ERP المرنة، ومنصات CRM المخصصة، وتكامل الأنظمة الرقمية بسلاسة وكفاءة عالية.",
      badge: "تأثير غير محدود"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
      heading: "تطوير مواقع الويب المتميزة وتحسين محركات البحث SEO",
      sub: "ضاعف ظهورك الرقمي ونطاق وصول عملائك من خلال هندسة الويب عالية الأداء واستراتيجيات الأرشفة المرتكزة على البيانات الدقيقة.",
      badge: "الثقة والابتكار"
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
      heading: "بنية تحتية آمنة لتكنولوجيا المعلومات وحلول السحاب",
      sub: "احمِ عمليات شركتك وأصولها من خلال استضافة متطورة، وأنظمة أمان سيبراني قوية، ونسخ احتياطي تلقائي بدعم من مهندسين خبراء.",
      badge: "تمياز لا مثيل له"
    }
  ]
};

// Static Localized Core Interface Dictionary
const uiContent = {
  en: {
    searchPlaceholder: "Search for enterprise systems, cloud software, or IT services...",
    noResults: "No services matching your search found.",
    card1Title: "4Biz ERP Systems",
    card1Desc: "Custom modular modules tailored to scale retail, manufacturing, and supply chains.",
    card2Title: "Web Management",
    card2Desc: "Immersive high-converting custom layout design, fast corporate email setup, and hosting.",
    card3Title: "SEO Optimization",
    card3Desc: "Advanced technical audits and rank strategies designed to capture market visibility.",
    card4Title: "IT Infrastructure",
    card4Desc: "Managed network cabling, server migration support, system engineering, and security setups.",
    card5Title: "Cloud Ecosystems",
    card5Desc: "Official verified license provisioning for Microsoft 365, Google Workspace, and Zoho apps.",
  },
  ar: {
    searchPlaceholder: "ابحث عن الأنظمة المؤسسية، البرمجيات السحابية، أو الخدمات التقنية...",
    noResults: "لم يتم العثور على خدمات تطابق بحثك.",
    card1Title: "حلول 4Biz ERP",
    card1Desc: "أنظمة برمجية مرنة ومخصصة لإدارة وتطوير قطاعات التجزئة، التصنيع، وسلاسل الإمداد.",
    card2Title: "إدارة وتطوير الويب",
    card2Desc: "تصميم مواقع استثنائية وعالية التحويل، مع إعداد بريد الشركات والاستضافة السريعة.",
    card3Title: "تحسين محركات البحث SEO",
    card3Desc: "خطط أرشفة متقدمة وتدقيق تقني مصمم لضمان تصدرك أعلى نتائج البحث واكتساح المنافسين.",
    card4Title: "البنية التحتية للمعلومات",
    card4Desc: "تركيب الشبكات المتكاملة، ترحيل الخوادم، وهندسة الأنظمة وتدابير الحماية الشاملة.",
    card5Title: "الأنظمة السحابية",
    card5Desc: "توفير تراخيص رسمية معتمدة لكل من Microsoft 365 وGoogle Workspace وتطبيقات Zoho.",
  }
};

export default function Hero() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Sync language shifts globally from the core layout header dispatch
  useEffect(() => {
    const handleLanguageSync = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'en' || customEvent.detail === 'ar') {
        setLang(customEvent.detail);
      }
    };

    window.addEventListener('langChange', handleLanguageSync);
    return () => window.removeEventListener('langChange', handleLanguageSync);
  }, []);

  // Automatic slide rotation handler (Swaps backgrounds & titles every 6.5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const activeSlidesList = slidesData[lang];
  const currentContent = uiContent[lang];

  // Dynamic searchable repository map derived directly from UI Content structures
  const searchableServices = useMemo(() => {
    return [
      { id: 'erp', title: currentContent.card1Title, desc: currentContent.card1Desc, icon: Database },
      { id: 'web', title: currentContent.card2Title, desc: currentContent.card2Desc, icon: Monitor },
      { id: 'seo', title: currentContent.card3Title, desc: currentContent.card3Desc, icon: Globe },
      { id: 'infra', title: currentContent.card4Title, desc: currentContent.card4Desc, icon: Cpu },
      { id: 'cloud', title: currentContent.card5Title, desc: currentContent.card5Desc, icon: Layers },
    ];
  }, [currentContent]);

  // Client-side search optimization rule matching values against structural titles or descriptions
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const normalizedQuery = searchQuery.toLowerCase().trim();
    return searchableServices.filter(
      (service) =>
        service.title.toLowerCase().includes(normalizedQuery) ||
        service.desc.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery, searchableServices]);

  const isRtl = lang === 'ar';

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="relative min-h-screen flex flex-col justify-between bg-zinc-950 text-white overflow-hidden"
    >
      
      {/* Immersive Background Slider Layer */}
      <div className="absolute inset-0 z-0">
        {activeSlidesList.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform duration-[2000ms]`}
          >
            <img 
              src={slide.image} 
              alt="4Biz International Enterprise Technology Infrastructure Backdrop" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Dynamic Vignette Contrast Overlay Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-950"></div>
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 pb-12 max-w-5xl mx-auto w-full text-center">
        
        {/* Anniversary Replacement Corporate Badge Wrapper - Stylized to Light Sky Blue */}
        <div className="mb-6">
          <div 
            style={{ borderColor: 'rgba(56, 189, 248, 0.25)' }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border bg-zinc-900/60 backdrop-blur-md shadow-2xl transition-all duration-500"
          >
            <div className={`flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-2`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                {activeSlidesList[activeSlide].badge}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Central SEO Optimized Changing Heading Element */}
        <div className="min-h-[120px] sm:min-h-[160px] md:min-h-[180px] flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl drop-shadow-lg transition-all duration-500 text-white">
            {activeSlidesList[activeSlide].heading}
          </h1>
        </div>

        {/* Hero Supporting Slide Subtitle Details */}
        <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl mb-8 leading-relaxed h-auto md:h-14">
          {activeSlidesList[activeSlide].sub}
        </p>

        {/* Centered Unified Core Portfolio Query Input Bar & Live Search Matrix */}
        <div className="w-full max-w-2xl relative shadow-2xl rounded-xl group z-30">
          <div className="relative overflow-hidden rounded-xl bg-white w-full h-14 flex items-center">
            <input 
              id="hero-search"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder={currentContent.searchPlaceholder} 
              aria-label={currentContent.searchPlaceholder}
              className={`w-full h-full ${isRtl ? 'pr-14 pl-12' : 'pl-14 pr-12'} bg-white text-zinc-900 placeholder-zinc-500 text-sm sm:text-base font-medium outline-hidden transition-all focus:ring-4 focus:ring-[#151569]/30`}
            />
            <Search className={`absolute ${isRtl ? 'right-5' : 'left-5'} top-1/2 -translate-y-1/2 text-zinc-400 w-6 h-6 transition-colors group-focus-within:text-[#151569]`} />
            
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors`}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Contextual Instant Results Portal Container */}
          {isFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl max-h-80 overflow-y-auto text-left shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {filteredResults.length > 0 ? (
                <div className="p-2 space-y-1">
                  {filteredResults.map((result) => {
                    const IconComponent = result.icon;
                    return (
                      <div 
                        key={result.id}
                        className={`flex items-start p-3 rounded-lg hover:bg-[#151569] transition-colors cursor-pointer text-white group/item ${isRtl ? 'text-right' : 'text-left'}`}
                      >
                        <div className={`mt-0.5 ${isRtl ? 'ml-3' : 'mr-3'} p-1.5 rounded-md bg-zinc-800 group-hover/item:bg-white/20 transition-colors`}>
                          <IconComponent className="w-5 h-5 text-sky-400 group-hover/item:text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white group-hover/item:text-sky-300 transition-colors">{result.title}</h4>
                          <p className="text-xs text-zinc-400 group-hover/item:text-zinc-200 line-clamp-1 mt-0.5">{result.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 text-center text-zinc-400 text-sm">
                  {currentContent.noResults}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Manual Indicator Controls Overrides */}
        <div className={`flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-2.5 mt-8`}>
          {[0, 1, 2].map((slideIdx) => (
            <button
              key={slideIdx}
              onClick={() => setActiveSlide(slideIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                slideIdx === activeSlide ? 'w-6 bg-sky-400' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Switch to 4Biz slide frame highlight ${slideIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lower Interactive Feature Service Cards Grid System - Set to Brand Deep Navy Hex #151569 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
          {searchableServices.map((card, index) => {
            const CardIcon = card.icon;
            const isLastCard = index === searchableServices.length - 1;
            
            return (
              <div 
                key={card.id}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#151569'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; }}
                className={`bg-white/90 backdrop-blur-md text-zinc-900 rounded-xl p-5 shadow-xl flex flex-col justify-between group hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  isLastCard ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className={`mb-4 flex ${isRtl ? 'justify-start' : 'justify-start'}`}>
                  <CardIcon style={{ color: '#151569' }} className="w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <h3 className="font-bold text-base mb-1">{card.title}</h3>
                  <p className="text-xs opacity-80 line-clamp-2">{card.desc}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, Database, Layers, Globe } from 'lucide-react';

const SLIDES_DATA = [
  {
    image: "hero-background-1.png",
    heading: "Enterprise Cloud & ERP Systems",
    sub: "Accelerate growth with customizable 4Biz ERP systems and seamless software integrations.",
  },
  {
    image: "hero-background-2.png",
    heading: "Premium Web & SEO Engineering",
    sub: "Maximize your online visibility through high-performance web solutions and organic search architectures.",
  },
  {
    image: "hero-background-3.png",
    heading: "Secure Corporate IT Infrastructure",
    sub: "Protect mission-critical operations with advanced hosting, cyber auditing, and expert engineering.",
  }
];

const CARDS_DATA = [
  { id: 'erp',   title: "4Biz ERP Systems",  desc: "Custom modular setups to scale retail and supply chains.",            icon: Database },
  { id: 'web',   title: "Web Management",     desc: "High-converting layouts, corporate emails, and swift hosting.",       icon: Monitor  },
  { id: 'seo',   title: "SEO Optimization",   desc: "Technical audits designed to capture organic market visibility.",     icon: Globe    },
  { id: 'infra', title: "IT Infrastructure",  desc: "Managed network cabling, server migration, and system engineering.", icon: Cpu      },
  { id: 'cloud', title: "Cloud Ecosystems",   desc: "License provisioning for Microsoft 365, Google, and Zoho.",          icon: Layers   },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollY, setScrollY]         = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveSlide(p => (p + 1) % SLIDES_DATA.length), 6500);
    return () => clearInterval(id);
  }, []);

  // Dubai Police scroll effect processing variables
  const progress           = Math.min(scrollY / 400, 1);
  const sideMargin         = progress * 32;
  const borderRadiusBottom = progress * 28;

  return (
    <div 
      style={{ 
        background: '#ffffff', // Outer surrounding whitespace wrapper layout context preserved perfectly
        width: '100%',
        position: 'relative'
      }}
    >
      <section
        style={{
          marginLeft:              `${sideMargin}px`,
          marginRight:             `${sideMargin}px`,
          marginTop:               0,
          borderBottomLeftRadius:  `${borderRadiusBottom}px`,
          borderBottomRightRadius: `${borderRadiusBottom}px`,
          borderTopLeftRadius:     0,
          borderTopRightRadius:    0,
          transition:              'margin 0.01s linear, border-radius 0.01s linear',
          willChange:              'margin, border-radius',
          overflow:                'hidden',
          position:                'relative',
          minHeight:               '100vh',
        }}
        className="flex flex-col bg-zinc-950 text-white"
      >

        {/* Background Slider */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {SLIDES_DATA.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === activeSlide ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover object-top"
                loading={idx === 0 ? "eager" : "lazy"} // GTmetrix Optimisation: speeds up early paint indices
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-zinc-950" />
        </div>

        {/* Centre Content */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-24 sm:pt-28 pb-6">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-3xl mx-auto drop-shadow-lg transition-all duration-500 mb-3 sm:mb-4">
            {SLIDES_DATA[activeSlide].heading}
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-5 sm:mb-7">
            {SLIDES_DATA[activeSlide].sub}
          </p>

          {/* Slide indicators */}
          <div className="flex items-center space-x-2" role="tablist">
            {SLIDES_DATA.map((_, slideIdx) => (
              <button
                key={slideIdx}
                onClick={() => setActiveSlide(slideIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none p-0 ${
                  slideIdx === activeSlide ? 'w-6 bg-sky-400' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${slideIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-30 w-full px-3 sm:px-6 lg:px-10 pb-6 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 max-w-7xl mx-auto">
            {CARDS_DATA.map((card, index) => {
              const CardIcon = card.icon;
              const isLastOdd = index === CARDS_DATA.length - 1 && CARDS_DATA.length % 2 !== 0;
              return (
                <div
                  key={card.id}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.backgroundColor = '#151569';
                    el.style.color = '#fff';
                    const svg = el.querySelector('svg');
                    if (svg) svg.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.backgroundColor = 'rgba(255,255,255,0.92)';
                    el.style.color = '';
                    const svg = el.querySelector('svg');
                    if (svg) svg.style.color = '#151569';
                  }}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    transition: 'all 0.3s ease'
                  }}
                  className={`backdrop-blur-md text-zinc-900 rounded-xl p-3 sm:p-4 shadow-xl flex flex-col gap-2 group hover:-translate-y-1 cursor-pointer ${
                    isLastOdd ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <CardIcon 
                    style={{ color: '#151569', transition: 'color 0.3s' }} 
                    className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" 
                  />
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm leading-tight mb-0.5 transition-colors">{card.title}</h3>
                    <p className="text-xs opacity-70 leading-snug transition-colors hidden sm:block line-clamp-2">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}
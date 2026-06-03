'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Cpu, Database, Layers, Globe } from 'lucide-react';

const SLIDES_DATA = [
  {
    image: "hero-background-8.png",
    heading: "Enterprise Cloud & ERP Systems",
    sub: "Accelerate growth with customizable 4Biz ERP systems and seamless software integrations.",
  },
  {
    image: "hero-background-9.png",
    heading: "Premium Web & SEO Engineering",
    sub: "Maximize your online visibility through high-performance web solutions and organic search architectures.",
  },
  {
    image: "hero-background-7.png",
    heading: "Secure Corporate IT Infrastructure",
    sub: "Protect mission-critical operations with advanced hosting, cyber auditing, and expert engineering.",
  }
];

const CARDS_DATA = [
  { id: 'erp',   title: "4Biz ERP Systems",   desc: "Custom modular setups to scale retail and supply chains.",         icon: Database },
  { id: 'web',   title: "Web Management",     desc: "High-converting layouts, corporate emails, and swift hosting.",       icon: Monitor  },
  { id: 'seo',   title: "SEO Optimization",   desc: "Technical audits designed to capture organic market visibility.",     icon: Globe    },
  { id: 'infra', title: "IT Infrastructure",  desc: "Managed network cabling, server migration, and system engineering.", icon: Cpu      },
  { id: 'cloud', title: "Cloud Ecosystems",   desc: "License provisioning for Microsoft 365, Google, and Zoho.",           icon: Layers   },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 1. High-Performance Non-blocking Scroll Logic (Isolated to Desktop Media Widths)
  useEffect(() => {
    let ticking = false;

    const updateScrollAnimation = () => {
      if (!sectionRef.current) return;
      
      // Check if the current window inner width matches desktop media match requirements
      if (window.innerWidth >= 768) {
        const scrollY = window.scrollY;
        // Normalizes scroll curve completely over a 0px to 400px timeline
        const progress = Math.min(scrollY / 400, 1);
        sectionRef.current.style.setProperty('--scroll-p', progress.toString());
      } else {
        // Explicitly clear properties on mobile/tablet viewports to prevent layout inheritance
        sectionRef.current.style.removeProperty('--scroll-p');
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollAnimation);
        ticking = true;
      }
    };

    const onResize = () => {
      updateScrollAnimation();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    updateScrollAnimation(); // Initial paint layout setup

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // 2. Automated background rotations
  useEffect(() => {
    const id = setInterval(() => setActiveSlide(p => (p + 1) % SLIDES_DATA.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Critical Core Resource Optimization Injection Module */}
      <link rel="preload" as="image" href={SLIDES_DATA[0].image} fetchPriority="high" />

      {/* Main Page Container Layout Wrapper Context */}
      <div className="w-full relative bg-white overflow-x-hidden block clear-both">
        
        <section
          ref={sectionRef}
          style={{
            // Fluid responsive clamping parameters that shift seamlessly during window scrolling on Desktop viewports only
            marginLeft: 'calc(var(--scroll-p, 0) * clamp(0px, 3.5vw, 48px))',
            marginRight: 'calc(var(--scroll-p, 0) * clamp(0px, 3.5vw, 48px))',
            borderBottomLeftRadius: 'calc(var(--scroll-p, 0) * clamp(12px, 2.5vw, 40px))',
            borderBottomRightRadius: 'calc(var(--scroll-p, 0) * clamp(12px, 2.5vw, 40px))',
            transform: 'translate3d(0, 0, 0)', // Forces GPU layer isolation context to prevent screen micro-shaking
          }}
          className="relative flex flex-col bg-zinc-950 text-white h-[85svh] sm:h-[90svh] md:h-[100svh] min-h-[560px] max-h-[1080px] overflow-hidden shadow-2xl z-10 transition-all md:transition-[margin,border-radius] duration-150 ease-out will-change-[transform]"
        >

          {/* BACKGROUND IMAGE SLIDER ENGINE */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none transform-gpu">
            {SLIDES_DATA.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform-gpu ${
                  idx === activeSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img 
                  src={slide.image} 
                  alt="" 
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  className="w-full h-full object-cover object-center transform-gpu"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding={idx === 0 ? "async" : "auto"}
                  fetchPriority={idx === 0 ? "high" : "low"}
                />
              </div>
            ))}
            {/* Cinematic Gradient overlay guaranteeing continuous content readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-zinc-950/40 to-zinc-950" />
          </div>

          {/* RESPONSIVE DYNAMIC TEXT HERO BODY */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6 max-w-5xl mx-auto w-full h-full">
            
            {/* Context Header Microtag */}
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-sky-400 uppercase mb-3 drop-shadow">
              Enterprise Technology Partner
            </span>

            {/* Core Heading - Scaled cleanly to prevent visual bloat on small screens */}
            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-white drop-shadow-xl mb-4 max-w-4xl">
              {SLIDES_DATA[activeSlide].heading}
            </h1>

            {/* Subtitle Paragraph Layout - Shortened and hidden entirely on small displays for high conciseness */}
            <p className="text-zinc-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 hidden xs:block opacity-90 font-medium">
              {SLIDES_DATA[activeSlide].sub}
            </p>

            {/* Dot Selectors Pagination Navigation */}
            <div className="flex items-center space-x-2.5" role="tablist" aria-label="Hero slider tabs">
              {SLIDES_DATA.map((_, slideIdx) => (
                <button
                  key={slideIdx}
                  onClick={() => setActiveSlide(slideIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none p-0 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                    slideIdx === activeSlide ? 'w-6 sm:w-8 bg-sky-400' : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  role="tab"
                  aria-selected={slideIdx === activeSlide}
                  aria-label={`Go to slide index position ${slideIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* INTERACTIVE FEATURE CARDS GRID CONTAINER */}
          <div className="relative z-30 w-full px-4 sm:px-6 lg:px-10 pb-6 sm:pb-8 lg:pb-12 mt-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 max-w-7xl mx-auto">
              {CARDS_DATA.map((card, index) => {
                const CardIcon = card.icon;
                const isLastOdd = index === CARDS_DATA.length - 1 && CARDS_DATA.length % 2 !== 0;
                
                return (
                  <article
                    key={card.id}
                    className={`backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl flex items-center sm:items-start sm:flex-col gap-2.5 sm:gap-3 cursor-pointer 
                      bg-white/95 text-zinc-900 group transition-all duration-200 ease-out 
                      hover:-translate-y-1 hover:bg-[#151569] hover:text-white
                      border border-white/10 select-none min-w-0
                      ${isLastOdd ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    {/* Icon Element Container */}
                    <div className="p-1.5 sm:p-2 bg-zinc-100 text-[#151569] rounded-lg shrink-0 transition-colors duration-200 group-hover:bg-white/10 group-hover:text-white">
                      <CardIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" aria-hidden="true" />
                    </div>
                    
                    {/* Text Data Node Container */}
                    <div className="flex flex-col justify-center flex-grow min-w-0 text-left">
                      <h2 className="font-extrabold text-[11px] sm:text-xs md:text-sm tracking-tight leading-tight whitespace-normal break-words transition-colors">
                        {card.title}
                      </h2>
                      {/* Sub-descriptions are strictly limited to tablets and desktop structures for a lightweight presentation layout */}
                      <p className="text-[11px] lg:text-xs opacity-70 leading-snug transition-colors hidden sm:block sm:line-clamp-2 mt-1 group-hover:opacity-90 font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
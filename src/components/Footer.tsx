'use client';

import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Layers } from 'lucide-react';

// Production-ready custom vector SVGs matching the visual brand requirements
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function UltraModernFooter() {
  return (
    <footer className="relative w-full bg-zinc-950 text-white pt-24 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden z-10 border-t border-zinc-900">
      {/* Absolute Layered Ambient Neon Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#151569]/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 z-0"></div>

      {/* Main Container Deck — Modified for Frameless Full-Width Matrix Layout */}
      <div className="relative z-10 w-full mx-auto">
        
        {/* Core Top Grid Layout Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 mb-16">
          
          {/* Brand/Identity Segment Frame */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-2.5 bg-[#151569] rounded-xl border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Layers className="w-6 h-6 text-sky-400" />
              </div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                4BIZ INTERNATIONAL
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Engineering next-generation digital ecosystems, immersive cloud architectures, and highly optimized enterprise systems for international scale operations.
            </p>
            
            {/* Target Core Social Media Grid Layout */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: FacebookIcon, href: "#" },
                { icon: InstagramIcon, href: "#" },
                { icon: LinkedInIcon, href: "#" },
                { icon: XIcon, href: "#" },
                { icon: YouTubeIcon, href: "#" }
              ].map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-[#151569] hover:border-sky-500/40 transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-sky-400 uppercase">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {['4Biz ERP Suite', 'Cloud Security', 'Web Infrastructure', 'Data Analytics'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-zinc-400 hover:text-white flex items-center group/link transition-colors">
                    <span className="group-hover/link:underline">{item}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-sky-400 uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {['About Operations', 'Performance Architecture', 'Media Assets', 'Contact Support'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-zinc-400 hover:text-white flex items-center group/link transition-colors">
                    <span className="group-hover/link:underline">{item}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Headquarters Information Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-sky-400 uppercase">Headquarters</h4>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Downtown District, Level 42, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+971 4 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>operations@4biz.int</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

        {/* Bottom Panel Metadata Summary — Agreements links completely removed */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} 4Biz International. All infrastructure assets secured.
          </div>
        </div>

      </div>
    </footer>
  );
}
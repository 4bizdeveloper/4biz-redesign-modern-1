'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  href: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: 'Home',      href: '/'          },
  { label: 'About Us',   href: '/about'     },
  { label: 'Services',   href: '/services'  },
  { label: 'Contact Us', href: '/contact'   },
  { label: 'Blogs',      href: '/blogs'     },
];

const BRAND_COLOR = '#151569';

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Animated hamburger → X toggle button */
function MenuToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-drawer"
      className="relative z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 md:bg-white/5 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer pointer-events-auto"
    >
      <span
        className={`absolute transition-all duration-300 ${
          open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
        }`}
      >
        <X className="w-5 h-5 text-white" />
      </span>
      <span
        className={`absolute transition-all duration-300 ${
          open ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
        }`}
      >
        <Menu className="w-5 h-5 text-white" />
      </span>
    </button>
  );
}

/** Inline search bar that drops below the header without causing layout shifts */
function SearchPanel({
  open,
  isScrolled,
  onClose,
}: {
  open: boolean;
  isScrolled: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQuery('');
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      console.log('Search:', q);
    }
  };

  return (
    <div
      role="search"
      aria-hidden={!open}
      className={`
        absolute left-0 right-0 top-full z-50
        bg-zinc-950/95 backdrop-blur-xl border border-white/10
        transition-all duration-300 ease-in-out pointer-events-auto shadow-2xl
        ${isScrolled ? 'rounded-2xl mx-4 mt-3' : 'rounded-none mx-0 mt-0 md:mt-2'}
        ${open ? 'opacity-100 translate-y-0 scale-100 visibility-visible' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none inventory-hidden'}
      `}
      style={{ transformOrigin: 'top center' }}
    >
      <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4">
        <Search className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services, enterprise solutions…"
          autoComplete="off"
          className="flex-1 min-w-0 bg-transparent text-white text-sm placeholder-zinc-500 border-none outline-none focus:ring-0 focus:border-none"
        />
        <button
          type="submit"
          style={{ backgroundColor: BRAND_COLOR }}
          className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white hover:brightness-125 transition-all cursor-pointer"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="shrink-0 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </form>
    </div>
  );
}

/** Mobile slide-in drawer */
function MobileDrawer({
  open,
  onClose,
  onHomeClick,
}: {
  open: boolean;
  onClose: () => void;
  onHomeClick: (e: React.MouseEvent) => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      id="mobile-drawer"
      className={`
        fixed inset-0 z-50 transition-all duration-300
        ${open ? 'pointer-events-auto visibility-visible' : 'pointer-events-none inventory-hidden'}
      `}
      aria-modal={open}
      role="dialog"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Drawer panel */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-80 max-w-[85vw]
          bg-zinc-950 flex flex-col border-r border-white/5
          transition-transform duration-300 ease-in-out will-change-transform
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <Link href="/" onClick={(e) => { onClose(); onHomeClick(e); }} aria-label="Go to homepage" className="flex items-center pointer-events-auto">
            <img
              src="/4biz_logo.png"
              alt="4Biz Logo"
              width={110}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 hover:bg-white/10 rounded-full text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex-1 flex flex-col gap-1.5 px-4 py-5 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => {
                  onClose();
                  if (item.href === '/') onHomeClick(e);
                }}
                className="flex items-center px-4 py-3 text-white text-base font-medium rounded-xl hover:bg-white/8 transition-colors pointer-events-auto"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="px-5 py-6 border-t border-white/10">
          <Link
            href="/get-started"
            onClick={onClose}
            style={{ backgroundColor: BRAND_COLOR }}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm hover:brightness-125 transition-all pointer-events-auto"
          >
            <User className="w-4 h-4" aria-hidden />
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}

// ─── Main Header ─────────────────────────────────────────────────────────────
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Passive window scroll tracking bounds avoids paint shaking mutations
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Structural hotkey bindings
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleSearch = useCallback(() => setIsSearchOpen((v) => !v), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  /**
   * Router Route Monitor Interceptor
   * Prevents layout flickering when link targets active parameters.
   */
  const handleHomeClick = useCallback((e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <>
      {/* Outer master viewport tracking container frame */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out pointer-events-none
          bg-gradient-to-b from-black/95 via-black/60 to-transparent md:bg-none
          ${isScrolled ? 'px-0 pt-0 md:px-4 md:pt-3 lg:px-6' : 'px-0 pt-0'}
        `}
      >
        <header
          role="banner"
          data-scrolled={isScrolled}
          className={`
            relative w-full flex items-center justify-between text-white pointer-events-auto
            bg-transparent h-20 px-4 sm:px-6 border-b border-transparent
            md:h-14 md:px-8 lg:px-12 md:will-change-[background-color,border-radius,max-w,height,box-shadow] md:transition-all md:duration-300 md:ease-in-out
            ${isScrolled
              ? 'md:bg-black/90 md:backdrop-blur-xl md:rounded-full md:shadow-2xl md:px-3 md:sm:px-6 md:h-14 md:max-w-6xl md:mx-auto md:border md:border-white/10'
              : 'md:bg-transparent md:px-4 md:sm:px-8 md:lg:px-12 md:h-24 md:max-w-full md:border-b md:border-transparent'
            }
          `}
        >
          {/* ── Search Dropdown Panel Panel Shell ── */}
          <SearchPanel
            open={isSearchOpen}
            isScrolled={isScrolled}
            onClose={() => setIsSearchOpen(false)}
          />

          {/* ── LEFT CONTAINER: HAMBURGER (Mobile Alignment Mode) ── */}
          <div className="flex items-center md:hidden z-50 w-14 justify-start pointer-events-auto">
            <MenuToggle
              open={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          {/* ── CENTER LOGO LINK ── */}
          <Link
            href="/"
            onClick={handleHomeClick}
            aria-label="4Biz – go to homepage"
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              md:static md:translate-x-0 md:translate-y-0 md:left-auto
              z-50 flex items-center shrink-0 pointer-events-auto cursor-pointer
            "
          >
            {/* 
              Tailwind CSS handles responsive styling here natively on initial load.
              This prevents hydration flickering or server-side structural errors.
            */}
            <img
              src="/4biz_logo.png"
              alt="4Biz Company Logo"
              width={180}
              height={64}
              fetchPriority="high"
              decoding="async"
              className={`
                object-contain select-none pointer-events-none transition-none 
                w-auto h-[44px]
                md:transition-all md:duration-300
                ${isScrolled ? 'md:h-[44px]' : 'md:h-[64px]'}
              `}
            />
          </Link>

          {/* ── CENTER DESKTOP NAVIGATION MATRIX ── */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold z-50 mx-auto pointer-events-auto"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.href === '/' ? handleHomeClick : undefined}
                className="px-4 py-2.5 rounded-full text-zinc-200 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT CONTAINER: CONTROLS & CALL TO ACTION ── */}
          <div className="flex items-center gap-2 z-50 shrink-0 w-14 md:w-auto justify-end pointer-events-auto">
            {/* Contextual Search Button */}
            <button
              onClick={toggleSearch}
              aria-label="Open search layout"
              aria-expanded={isSearchOpen}
              className="flex items-center justify-center w-11 h-11 bg-white/10 md:bg-transparent hover:bg-white/20 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <Search className="w-5 h-5 text-white" aria-hidden />
            </button>

            {/* Premium CTA Interface Capsule */}
            <Link
              href="/get-started"
              style={{ backgroundColor: BRAND_COLOR }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-xl hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              <User className="w-3.5 h-3.5" aria-hidden />
              <span>Get Started</span>
            </Link>
          </div>
        </header>
      </div>

      {/* ── Mobile Sidebar Drawer Element Container ── */}
      <MobileDrawer open={isMobileMenuOpen} onClose={closeMenu} onHomeClick={handleHomeClick} />
    </>
  );
}
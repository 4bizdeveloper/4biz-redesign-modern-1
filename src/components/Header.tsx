'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  href: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: 'Home',       href: '/'          },
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
      className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
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

/** Inline search bar that drops below the header */
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
      // Replace with your real search handler / router.push
      console.log('Search:', q);
    }
  };

  return (
    <div
      role="search"
      aria-hidden={!open}
      className={`
        absolute left-0 right-0 top-0 z-20
        bg-zinc-950 border border-white/10
        transition-all duration-300 ease-in-out overflow-hidden
        ${isScrolled ? 'rounded-3xl' : 'rounded-none'}
        ${open ? 'opacity-100 max-h-24 py-4 px-4 sm:px-6' : 'opacity-0 max-h-0 py-0 px-4 sm:px-6'}
      `}
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 border-b border-white/10 pb-3"
      >
        <Search className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services, enterprise solutions…"
          autoComplete="off"
          className="flex-1 min-w-0 bg-transparent text-white text-sm placeholder-zinc-500 border-none outline-none"
        />
        <button
          type="submit"
          style={{ backgroundColor: BRAND_COLOR }}
          className="shrink-0 px-3 py-1.5 rounded-md text-xs font-bold hover:brightness-125 transition-all cursor-pointer"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="shrink-0 p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
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
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Trap scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      id="mobile-drawer"
      className={`
        fixed inset-0 z-50
        transition-all duration-300
        ${open ? 'pointer-events-auto' : 'pointer-events-none'}
      `}
      aria-modal={open}
      role="dialog"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Drawer panel */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-72 max-w-[85vw]
          bg-zinc-950 flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link href="/" onClick={onClose} aria-label="Go to homepage">
            <img
              src="/4biz_logo.png"
              alt="4Biz"
              width={100}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 hover:bg-white/10 rounded-full text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex-1 flex flex-col gap-0.5 px-3 py-4 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 text-white text-sm font-medium rounded-xl hover:bg-white/8 transition-colors"
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
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm hover:brightness-125 transition-all"
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
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [isSearchOpen,    setIsSearchOpen]    = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close search on Escape
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
  const closeMenu    = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      {/*
        Outer wrapper: always fixed, full-width.
        Padding is added when scrolled so the pill "floats".
      */}
      <div
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'px-3 sm:px-4 pt-3 pb-0' : 'px-0'
        }`}
      >
        <header
          role="banner"
          className={`
            relative w-full flex items-center justify-between
            text-white transition-all duration-500
            ${isScrolled
              ? 'bg-black/90 backdrop-blur-md rounded-full shadow-2xl px-4 sm:px-6 h-14 max-w-5xl mx-auto'
              : 'bg-transparent px-4 sm:px-6 lg:px-10 h-16 sm:h-20 max-w-full'
            }
          `}
        >
          {/* ── Search Panel ── */}
          <SearchPanel
            open={isSearchOpen}
            isScrolled={isScrolled}
            onClose={() => setIsSearchOpen(false)}
          />

          {/*
            ── LEFT: Hamburger (mobile) ──
            On mobile this sits left; on desktop it's hidden.
          */}
          <div className="flex items-center md:hidden z-10">
            <MenuToggle
              open={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            />
          </div>

          {/*
            ── CENTER / LEFT: Logo ──
            • Mobile: absolutely centered (Dubai Police style)
            • Desktop (md+): normal flow, left-aligned
          */}
          <Link
            href="/"
            aria-label="4Biz – go to homepage"
            className="
              absolute left-1/2 -translate-x-1/2
              md:static md:translate-x-0 md:left-auto
              z-10 flex items-center shrink-0
            "
          >
            <img
              src="/4biz_logo.png"
              alt="4Biz"
              width={120}
              height={48}
              // next/image priority prop equivalent: add fetchpriority below
              fetchPriority="high"
              decoding="async"
              className="object-contain transition-all duration-300"
              style={{ height: isScrolled ? '38px' : '48px', width: 'auto' }}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-0.5 lg:gap-1 text-sm font-medium z-10"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT CONTROLS ── */}
          <div className="flex items-center gap-1 sm:gap-2 z-10 shrink-0">
            {/* Search toggle */}
            <button
              onClick={toggleSearch}
              aria-label="Open search"
              aria-expanded={isSearchOpen}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 hover:bg-white/10 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
            </button>

            {/* Get Started – desktop only */}
            <Link
              href="/get-started"
              style={{ backgroundColor: BRAND_COLOR }}
              className="hidden sm:flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:brightness-125 transition-all whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden />
              <span>Get Started</span>
            </Link>
          </div>
        </header>
      </div>

      {/* ── Mobile Drawer (rendered outside header so it can cover full screen) ── */}
      <MobileDrawer open={isMobileMenuOpen} onClose={closeMenu} />
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Play, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenReel: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Our Films', to: '/works' },
  { label: 'Photography', to: '/photography' },
  { label: 'Who We Are', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenReel }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-[#080807]/92 backdrop-blur-md border-b border-[#F4EFE6]/10 py-3.5'
            : 'bg-gradient-to-b from-[#080807]/85 via-[#080807]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Studio Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="TNBNU Media Home"
          >
            <span className="relative flex items-center justify-center w-9 h-7 rounded-[2px] border border-[#C99A5B]/70 group-hover:border-[#C99A5B] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#C99A5B] group-hover:scale-110 transition-transform" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-xl tracking-[0.22em] text-[#F4EFE6] font-medium">
                  TNBNU
                </span>
                <span className="text-[10px] tracking-[0.28em] text-[#C99A5B] font-semibold uppercase">
                  MEDIA
                </span>
              </div>
              <span className="hidden xl:block text-[9px] tracking-[0.24em] uppercase text-[#A8A298]">
                Nairobi · Maasai Mara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] transition-colors py-1 border-b ${
                    isActive
                      ? 'text-[#F4EFE6] border-[#C99A5B]'
                      : 'text-[#A8A298] border-transparent hover:text-[#F4EFE6]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReel}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#F4EFE6] border border-[#F4EFE6]/20 hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Screen Films</span>
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold bg-[#C99A5B] text-[#080807] hover:bg-[#DDB072] transition-colors"
            >
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              type="button"
              onClick={onOpenReel}
              aria-label="Screen Films"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#F4EFE6] border border-[#F4EFE6]/20 hover:border-[#C99A5B] transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current text-[#C99A5B]" />
              <span>Films</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 text-[#F4EFE6] hover:text-[#C99A5B] transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#080807] transition-all duration-500 lg:hidden flex flex-col justify-between pt-24 pb-10 px-6 overflow-y-auto ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#F4EFE6]/10">
          {NAV_ITEMS.map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `py-5 flex items-baseline justify-between group ${
                  isActive ? 'text-[#C99A5B]' : 'text-[#F4EFE6]'
                }`
              }
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#767067]">0{idx + 1}</span>
                <span className="font-display text-3xl uppercase tracking-[0.12em]">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#767067] group-hover:text-[#C99A5B] transition-colors" />
            </NavLink>
          ))}
        </nav>

        <div className="pt-8 border-t border-[#F4EFE6]/10 space-y-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[#C99A5B]">
            Nairobi &amp; Maasai Mara · Max 3 Clients at a Time
          </p>
          <div className="flex flex-col gap-1.5 text-sm text-[#A8A298]">
            <a
              href={`mailto:${STUDIO_INFO.emailPrimary}`}
              className="hover:text-[#F4EFE6] transition-colors"
            >
              {STUDIO_INFO.emailPrimary}
            </a>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4EFE6] transition-colors"
            >
              WhatsApp · {STUDIO_INFO.whatsappDisplay}
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="flex-1 text-center py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C99A5B] text-[#080807]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

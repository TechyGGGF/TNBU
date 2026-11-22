import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { FILM_PROJECTS, STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060605] border-t border-[#F4EFE6]/10 text-[#F4EFE6]">
      {/* Upper Let's Talk Editorial Band */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16 border-b border-[#F4EFE6]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
              LET’S TALK · NAIROBI &amp; MAASAI MARA
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-[#F4EFE6] font-normal">
              {STUDIO_INFO.closingHeadline}
            </h2>
            <p className="text-sm sm:text-base text-[#A8A298] max-w-xl leading-relaxed">
              {STUDIO_INFO.commitmentNote}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#DDB072] transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-[#F4EFE6]/20 text-[#F4EFE6] text-xs uppercase tracking-[0.22em] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Middle Directory Columns */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Direct Studio Contact */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-xl tracking-[0.22em] text-[#F4EFE6]">
              TNBNU
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#C99A5B] font-semibold uppercase">
              MEDIA
            </span>
          </div>
          <p className="text-sm text-[#A8A298] max-w-sm leading-relaxed">
            Founded and led by {STUDIO_INFO.founder}, cinematographer. Crafting brand films,
            short documentaries and campaign stills across East Africa.
          </p>

          <div className="pt-2 space-y-2.5">
            <a
              href={`mailto:${STUDIO_INFO.emailPrimary}`}
              className="flex items-center gap-2.5 text-base sm:text-lg font-editorial tracking-wide text-[#F4EFE6] hover:text-[#C99A5B] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#C99A5B] shrink-0" />
              <span>{STUDIO_INFO.emailPrimary}</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.emailSecondary}`}
              className="flex items-center gap-2.5 text-base sm:text-lg font-editorial tracking-wide text-[#A8A298] hover:text-[#F4EFE6] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#767067] shrink-0" />
              <span>{STUDIO_INFO.emailSecondary}</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.24em] text-[#767067] font-semibold">
            Navigate
          </h3>
          <ul className="space-y-2.5 text-sm text-[#A8A298]">
            <li>
              <Link to="/" className="hover:text-[#F4EFE6] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F4EFE6] transition-colors">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/works" className="hover:text-[#F4EFE6] transition-colors">
                Our Films
              </Link>
            </li>
            <li>
              <Link to="/photography" className="hover:text-[#F4EFE6] transition-colors">
                Photography
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F4EFE6] transition-colors">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Featured Films */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.24em] text-[#767067] font-semibold">
            Selected Films
          </h3>
          <ul className="space-y-2.5 text-sm text-[#A8A298]">
            {FILM_PROJECTS.map((film) => (
              <li key={film.slug}>
                <Link
                  to={`/works/${film.slug}`}
                  className="hover:text-[#F4EFE6] transition-colors flex items-center justify-between gap-2 group"
                >
                  <span>{film.title}</span>
                  <span className="text-[11px] text-[#767067] group-hover:text-[#C99A5B] transition-colors">
                    {film.client}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials & Locations */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.24em] text-[#767067] font-semibold">
            Connect
          </h3>
          <ul className="space-y-2.5 text-sm text-[#A8A298]">
            <li>
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#F4EFE6] transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C99A5B]" />
              </a>
            </li>
            <li>
              <a
                href={STUDIO_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#F4EFE6] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C99A5B]" />
              </a>
            </li>
            <li>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#F4EFE6] transition-colors"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C99A5B]" />
              </a>
            </li>
          </ul>
          <p className="pt-2 text-xs text-[#767067] leading-relaxed">
            Nairobi, Kenya
            <br />
            Maasai Mara, Kenya
          </p>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#F4EFE6]/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#767067]">
          <p>{STUDIO_INFO.legalCopyright}</p>
          <p className="uppercase tracking-[0.2em] text-[10px]">
            Natural Light · Intentional Cinema · East Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

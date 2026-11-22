import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS, STUDIO_INFO } from '../data/studioData';

interface FaqSectionProps {
  compact?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ compact = false }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayedFaqs = compact ? FAQ_ITEMS.slice(0, 6) : FAQ_ITEMS;

  return (
    <section className="py-24 sm:py-32 border-t border-[#F4EFE6]/10 bg-[#0A0A09]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
            QUESTIONS · BEFORE WE TALK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.06em] text-[#F4EFE6] leading-[1.08]">
            Before We Talk
          </h2>
          <p className="font-editorial text-2xl sm:text-3xl text-[#A8A298] leading-snug italic">
            “Film and story for brands where the feeling is the product.”
          </p>
          <p className="text-sm text-[#A8A298] leading-relaxed">
            Every engagement starts with a quiet conversation around your brand, what you
            want people to feel, and the season or light that suits it best.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DDB072] transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#F4EFE6]/20 text-[#F4EFE6] text-xs uppercase tracking-[0.2em] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-7 divide-y divide-[#F4EFE6]/10 border-y border-[#F4EFE6]/10">
          {displayedFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer"
                >
                  <span className="font-editorial text-xl sm:text-2xl text-[#F4EFE6] group-hover:text-[#C99A5B] transition-colors">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center border border-[#F4EFE6]/15 text-[#C99A5B] group-hover:border-[#C99A5B] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 pr-10 text-sm sm:text-base text-[#A8A298] leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

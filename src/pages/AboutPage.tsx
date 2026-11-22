import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  HOW_WE_WORK_TENETS,
  PRODUCTION_SERVICES,
  STUDIO_INFO,
} from '../data/studioData';
import { SmartImage } from '../components/SmartImage';
import { FaqSection } from '../components/FaqSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36">
      {/* Studio Story Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 border-b border-[#F4EFE6]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
              WHO WE ARE · TNBNU MEDIA
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.04em] text-[#F4EFE6] leading-[1.03]">
              We Make Films You Feel Before You Understand Them.
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[#A8A298] leading-snug">
              {STUDIO_INFO.heroSubheadline}
            </p>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-[#F4EFE6]/12 lg:pl-8 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C99A5B]">
              FOUNDED &amp; LED BY
            </p>
            <p className="font-editorial text-3xl text-[#F4EFE6]">
              {STUDIO_INFO.founder}
            </p>
            <p className="text-sm text-[#A8A298]">{STUDIO_INFO.founderRole}</p>
            <p className="text-xs text-[#767067] pt-1">{STUDIO_INFO.base}</p>
          </div>
        </div>
      </section>

      {/* Atmospheric Mara & Zanzibar Split */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] border border-[#F4EFE6]/12 overflow-hidden">
              <SmartImage
                src="https://framerusercontent.com/images/g7EGZHrpvMpWAMPF6w5lsQRiS2I.jpg"
                alt="Maasai Mara golden hour cinematography by TNBNU Media"
                priority
                wrapperClassName="w-full h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
              WHY THREE CLIENTS AT A TIME
            </p>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-[0.05em] text-[#F4EFE6]">
              Attention Is What Makes a Story Honest.
            </h2>
            <p className="text-base text-[#F4EFE6]/90 leading-relaxed">
              {STUDIO_INFO.commitmentNote}
            </p>
            <p className="text-base text-[#A8A298] leading-relaxed">
              Whether we are chasing sunrise over the Indian Ocean in Zanzibar for a luxury
              jeweller, writing an unprompted narrative film for an automotive house in
              Nairobi, or building an in-house production studio inside a safari camp in the
              Maasai Mara, our work is built for brands people buy with their hearts first.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DDB072] transition-colors"
              >
                <span>Watch Our Films</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F4EFE6]/20 text-[#F4EFE6] text-xs uppercase tracking-[0.2em] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
              >
                <span>Start a Conversation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Principles */}
      <section className="py-20 sm:py-28 border-t border-[#F4EFE6]/10 bg-[#0C0C0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-4 mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
              HOW WE WORK
            </p>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
              Three Principles Behind Every Shoot
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_WE_WORK_TENETS.map((tenet) => (
              <div
                key={tenet.number}
                className="p-8 bg-[#12110F] border border-[#F4EFE6]/10 space-y-4"
              >
                <span className="font-mono text-xs text-[#C99A5B] tracking-[0.24em]">
                  {tenet.number}
                </span>
                <h3 className="font-editorial text-3xl text-[#F4EFE6]">
                  {tenet.title}
                </h3>
                <p className="text-sm sm:text-base text-[#A8A298] leading-relaxed">
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 sm:py-28 border-t border-[#F4EFE6]/10 bg-[#080807]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
              CAPABILITIES &amp; DELIVERABLES
            </p>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
              End-to-End Film &amp; Photography
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTION_SERVICES.map((stage) => (
              <div
                key={stage.phase}
                className="p-8 bg-[#11110F] border border-[#F4EFE6]/10 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#C99A5B] font-semibold">
                    {stage.phase} · {stage.subtitle}
                  </p>
                  <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-[#F4EFE6]">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#A8A298] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-6 border-t border-[#F4EFE6]/10">
                  {stage.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#F4EFE6]/85"
                    >
                      <Check className="w-4 h-4 text-[#C99A5B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  );
};

import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { SmartImage } from '../components/SmartImage';
import { FaqSection } from '../components/FaqSection';

const TIMING_OPTIONS = [
  'As soon as possible',
  'In the next 1 to 3 months',
  'Later this year',
  'Just exploring',
] as const;

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [based, setBased] = useState('');
  const [story, setStory] = useState('');
  const [timing, setTiming] = useState<string>('In the next 1 to 3 months');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const buildBriefText = () =>
    [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Brand or Property: ${brand.trim() || 'Not specified'}`,
      `Location: ${based.trim() || 'Not specified'}`,
      `Timing: ${timing}`,
      '',
      'Story / Project Vision:',
      story.trim(),
    ].join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !story.trim()) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${STUDIO_INFO.emailPrimary}?cc=${encodeURIComponent(
    STUDIO_INFO.emailSecondary
  )}&subject=${encodeURIComponent(
    `Film Inquiry — ${brand.trim() || name.trim()} | TNBNU Media`
  )}&body=${encodeURIComponent(buildBriefText())}`;

  const whatsappHref = `${STUDIO_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hello Japheth & TNBNU Media,\n\n${buildBriefText()}`
  )}`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: ${STUDIO_INFO.emailPrimary}\n\n${buildBriefText()}`
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36">
      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Visual & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
                CONTACT · START A CONVERSATION
              </p>
              <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-[0.04em] text-[#F4EFE6] leading-[1.03]">
                Tell Us What You’re Building.
              </h1>
              <p className="font-editorial text-2xl text-[#F4EFE6]/90">
                A camp, a collection, a launch. Start with a few lines about it.
              </p>
              <p className="text-sm text-[#A8A298] leading-relaxed">
                {STUDIO_INFO.responseWindow}
              </p>
            </div>

            {/* Authentic Contact Frame from tnbnu.media/contact */}
            <div className="aspect-video overflow-hidden border border-[#F4EFE6]/12">
              <SmartImage
                src={STUDIO_INFO.contactHeroImage}
                alt="TNBNU Media — On location in East Africa"
                priority
                wrapperClassName="w-full h-full"
              />
            </div>

            {/* Direct Contact Details */}
            <div className="p-6 sm:p-7 bg-[#11110F] border border-[#F4EFE6]/10 space-y-5">
              <h2 className="text-xs uppercase tracking-[0.24em] text-[#C99A5B] font-semibold">
                Direct Studio Channels
              </h2>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${STUDIO_INFO.emailPrimary}`}
                  className="flex items-center justify-between gap-3 py-2 border-b border-[#F4EFE6]/8 text-[#F4EFE6] hover:text-[#C99A5B] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C99A5B]" />
                    <span>{STUDIO_INFO.emailPrimary}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#767067]" />
                </a>

                <a
                  href={`mailto:${STUDIO_INFO.emailSecondary}`}
                  className="flex items-center justify-between gap-3 py-2 border-b border-[#F4EFE6]/8 text-[#A8A298] hover:text-[#F4EFE6] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#767067]" />
                    <span>{STUDIO_INFO.emailSecondary}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#767067]" />
                </a>

                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 py-2 border-b border-[#F4EFE6]/8 text-[#F4EFE6] hover:text-[#C99A5B] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-[#C99A5B]" />
                    <span>WhatsApp · {STUDIO_INFO.whatsappDisplay}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#767067]" />
                </a>

                <div className="flex items-center gap-2.5 pt-1 text-[#A8A298]">
                  <MapPin className="w-4 h-4 text-[#C99A5B] shrink-0" />
                  <span>Based between Nairobi &amp; the Maasai Mara, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#11110F] border border-[#F4EFE6]/12 p-6 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#F4EFE6]/10 pb-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#C99A5B]">
                    PROJECT BRIEF
                  </p>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#F4EFE6] mt-1">
                    Share your vision, timing and location.
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-[0.2em] text-[#A8A298] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 bg-[#080807] border border-[#F4EFE6]/15 text-sm text-[#F4EFE6] placeholder-[#767067] focus:outline-none focus:border-[#C99A5B] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-[0.2em] text-[#A8A298] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbrand.com"
                      className="w-full px-4 py-3.5 bg-[#080807] border border-[#F4EFE6]/15 text-sm text-[#F4EFE6] placeholder-[#767067] focus:outline-none focus:border-[#C99A5B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-brand"
                      className="block text-xs uppercase tracking-[0.2em] text-[#A8A298] mb-2"
                    >
                      Brand or property
                    </label>
                    <input
                      id="contact-brand"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Camp, lodge, house or company"
                      className="w-full px-4 py-3.5 bg-[#080807] border border-[#F4EFE6]/15 text-sm text-[#F4EFE6] placeholder-[#767067] focus:outline-none focus:border-[#C99A5B] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-based"
                      className="block text-xs uppercase tracking-[0.2em] text-[#A8A298] mb-2"
                    >
                      Where are you based?
                    </label>
                    <input
                      id="contact-based"
                      type="text"
                      value={based}
                      onChange={(e) => setBased(e.target.value)}
                      placeholder="e.g. Nairobi, Maasai Mara, Zanzibar, London"
                      className="w-full px-4 py-3.5 bg-[#080807] border border-[#F4EFE6]/15 text-sm text-[#F4EFE6] placeholder-[#767067] focus:outline-none focus:border-[#C99A5B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-timing"
                    className="block text-xs uppercase tracking-[0.2em] text-[#A8A298] mb-2"
                  >
                    Timing
                  </label>
                  <select
                    id="contact-timing"
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#080807] border border-[#F4EFE6]/15 text-sm text-[#F4EFE6] focus:outline-none focus:border-[#C99A5B] transition-colors"
                  >
                    {TIMING_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#080807] text-[#F4EFE6]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-story"
                    className="block text-xs uppercase tracking-[0.2em] text-[#A8A298] mb-2"
                  >
                    What story do you want told? *
                  </label>
                  <textarea
                    id="contact-story"
                    rows={5}
                    required
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Tell us about what you’re building, what you want people to feel, and any upcoming season or launch window..."
                    className="w-full px-4 py-3.5 bg-[#080807] border border-[#F4EFE6]/15 text-sm text-[#F4EFE6] placeholder-[#767067] focus:outline-none focus:border-[#C99A5B] transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#DDB072] transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Prepare Inquiry</span>
                  </button>
                  <p className="text-xs text-[#767067]">
                    Replies personally within 2 working days.
                  </p>
                </div>
              </form>
            ) : (
              <div className="space-y-6 py-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C99A5B]/15 border border-[#C99A5B]/40 text-[#C99A5B] text-xs uppercase tracking-[0.2em]">
                  <Check className="w-4 h-4" />
                  <span>Brief Ready to Send</span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl text-[#F4EFE6]">
                  Thank you, {name}. Choose your preferred channel to dispatch your brief:
                </h2>

                <pre className="p-5 bg-[#080807] border border-[#F4EFE6]/12 text-xs sm:text-sm text-[#A8A298] whitespace-pre-wrap font-sans leading-relaxed">
                  {buildBriefText()}
                </pre>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DDB072] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email App</span>
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#F4EFE6]/25 text-[#F4EFE6] text-xs uppercase tracking-[0.2em] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C99A5B]" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#F4EFE6]/10">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A8A298] hover:text-[#F4EFE6] cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#C99A5B]" />
                    <span>{copied ? 'Copied Brief to Clipboard!' : 'Copy Brief Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-[0.2em] text-[#C99A5B] hover:text-[#DDB072] cursor-pointer"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  );
};

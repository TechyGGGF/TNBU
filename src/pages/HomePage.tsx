import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  Compass,
  Play,
  Sun,
} from 'lucide-react';
import {
  FILM_PROJECTS,
  HOW_WE_WORK_TENETS,
  PHOTOGRAPHY_ARCHIVE,
  PRODUCTION_SERVICES,
  STUDIO_INFO,
  type FilmProject,
} from '../data/studioData';
import { SmartImage } from '../components/SmartImage';
import { FaqSection } from '../components/FaqSection';
import { type LightboxItem } from '../components/LightboxModal';

interface HomePageProps {
  onPlayFilm: (film: FilmProject) => void;
  onOpenLightbox: (items: LightboxItem[], index: number) => void;
}

const FILTER_CATEGORIES = ['All Films', 'Brand Film', 'Short Film', 'Hospitality', 'Luxury', 'Automotive'] as const;

export const HomePage: React.FC<HomePageProps> = ({
  onPlayFilm,
  onOpenLightbox,
}) => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof FILTER_CATEGORIES)[number]>('All Films');

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % FILM_PROJECTS.length);
    }, 7500);
    return () => window.clearInterval(interval);
  }, []);

  const activeHeroFilm = FILM_PROJECTS[heroIndex];

  const filteredFilms = FILM_PROJECTS.filter((film) => {
    if (selectedFilter === 'All Films') return true;
    if (selectedFilter === 'Brand Film' || selectedFilter === 'Short Film') {
      return film.category === selectedFilter;
    }
    return film.sector === selectedFilter;
  });

  const featuredStills = PHOTOGRAPHY_ARCHIVE.slice(0, 6);
  const lightboxItems: LightboxItem[] = featuredStills.map((s) => ({
    src: s.src,
    alt: s.alt,
    caption: s.caption,
    location: s.location,
    projectSlug: s.projectSlug,
    projectTitle: s.projectTitle,
  }));

  return (
    <div>
      {/* =========================================================
          1. FULL-VIEWPORT CINEMA HERO (Black Bean Reference + TNBNU Identity)
         ========================================================= */}
      <section className="relative min-h-[94vh] flex flex-col justify-between overflow-hidden pt-28 pb-10">
        {/* Background Crossfading Stills */}
        <div className="absolute inset-0 z-0">
          {FILM_PROJECTS.map((project, idx) => (
            <div
              key={project.slug}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === heroIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <SmartImage
                src={project.heroImage}
                alt={`${project.title} — ${project.location}`}
                priority={idx === 0}
                wrapperClassName="w-full h-full"
                className={idx === heroIndex ? 'hero-slow-zoom' : ''}
              />
            </div>
          ))}
          <div className="absolute inset-0 z-10 cinema-vignette" />
        </div>

        {/* Center Hero Editorial Copy */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 my-auto py-14">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#080807]/65 backdrop-blur-sm border border-[#F4EFE6]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A5B]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#F4EFE6]/90 font-medium">
                {STUDIO_INFO.heroKicker}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.1rem] uppercase tracking-[0.04em] leading-[1.02] text-[#F4EFE6]">
              We make films you feel{' '}
              <span className="font-editorial italic font-normal normal-case text-[#C99A5B] tracking-normal">
                before
              </span>{' '}
              you understand them.
            </h1>

            <p className="text-base sm:text-lg text-[#F4EFE6]/85 max-w-2xl leading-relaxed font-light">
              {STUDIO_INFO.heroSubheadline}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onPlayFilm(activeHeroFilm)}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#DDB072] transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Screen “{activeHeroFilm.title}”</span>
              </button>

              <Link
                to="/works"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#080807]/60 backdrop-blur-sm border border-[#F4EFE6]/25 text-[#F4EFE6] text-xs uppercase tracking-[0.22em] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
              >
                <span>Explore All Films</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Hero Frame Switcher Strip */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 pt-6 border-t border-[#F4EFE6]/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {FILM_PROJECTS.map((project, idx) => {
              const active = idx === heroIndex;
              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setHeroIndex(idx)}
                  className={`text-left group pt-2.5 border-t-2 transition-all cursor-pointer ${
                    active
                      ? 'border-[#C99A5B] opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-95'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#C99A5B]">
                    0{idx + 1} · {project.location}
                  </p>
                  <p className="font-display text-sm sm:text-base uppercase tracking-[0.1em] text-[#F4EFE6] mt-0.5 truncate">
                    {project.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. WHO WE ARE / STUDIO MANIFESTO (#about)
         ========================================================= */}
      <section
        id="about"
        className="py-24 sm:py-32 border-t border-[#F4EFE6]/10 bg-[#080807]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
                WHO WE ARE
              </p>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] leading-[1.08] text-[#F4EFE6]">
                Crafted Between Nairobi &amp; the Maasai Mara.
              </h2>
              <div className="pt-2 border-l-2 border-[#C99A5B] pl-5">
                <p className="font-editorial text-xl sm:text-2xl italic text-[#F4EFE6]/90">
                  Founded and led by {STUDIO_INFO.founder}, cinematographer.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="font-editorial text-2xl sm:text-3xl lg:text-[2.15rem] leading-[1.32] text-[#F4EFE6]">
                We don’t keep to one kind of story. From a city street in Nairobi to sunrise
                over Zanzibar and the stillness of the Maasai Mara, if there’s something worth
                feeling, we’ll find a way to film it.
              </p>
              <p className="text-base sm:text-lg text-[#A8A298] leading-relaxed">
                {STUDIO_INFO.commitmentNote} Working closely with founders, safari properties,
                luxury houses and ambitious brands, we build every film around what people
                should feel before they have ever stepped through your door.
              </p>

              {/* 3 Authentic Studio Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#F4EFE6]/10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#C99A5B]">
                    <Compass className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-[0.22em] font-semibold">
                      Focus Cap
                    </span>
                  </div>
                  <p className="font-display text-2xl uppercase tracking-[0.08em] text-[#F4EFE6]">
                    3 Clients Max
                  </p>
                  <p className="text-xs text-[#A8A298] leading-relaxed">
                    Dedicated creative attention at a time — never a slot in a production queue.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#C99A5B]">
                    <Sun className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-[0.22em] font-semibold">
                      Lighting Ethos
                    </span>
                  </div>
                  <p className="font-display text-2xl uppercase tracking-[0.08em] text-[#F4EFE6]">
                    Natural Light
                  </p>
                  <p className="text-xs text-[#A8A298] leading-relaxed">
                    Filmed at sunrise and golden hour, bringing studio rigs only when the story asks.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#C99A5B]">
                    <Camera className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-[0.22em] font-semibold">
                      Field Footprint
                    </span>
                  </div>
                  <p className="font-display text-2xl uppercase tracking-[0.08em] text-[#F4EFE6]">
                    East Africa
                  </p>
                  <p className="text-xs text-[#A8A298] leading-relaxed">
                    Rooted in Nairobi &amp; the Maasai Mara, filming across Kenya, Zanzibar &amp; beyond.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C99A5B] hover:text-[#DDB072] transition-colors"
                >
                  <span>Read More About How We Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED WORK — PORTFOLIO PRESENTATION
         ========================================================= */}
      <section className="py-24 sm:py-32 border-t border-[#F4EFE6]/10 bg-[#0C0C0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header & Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
                OUR WORK · FEATURED FILMS
              </p>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
                Selected Filmography
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter featured films"
              className="flex flex-wrap items-center gap-2"
            >
              {FILTER_CATEGORIES.map((category) => {
                const active = selectedFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] border transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#C99A5B] text-[#080807] border-[#C99A5B] font-semibold'
                        : 'bg-transparent text-[#A8A298] border-[#F4EFE6]/15 hover:border-[#F4EFE6]/35 hover:text-[#F4EFE6]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Widescreen Cinema Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredFilms.map((film) => (
              <article
                key={film.slug}
                className="group bg-[#12110F] border border-[#F4EFE6]/10 hover:border-[#C99A5B]/50 transition-all duration-500 flex flex-col"
              >
                {/* 16:9 Poster Stage */}
                <div className="relative aspect-video overflow-hidden">
                  <SmartImage
                    src={film.cardImage}
                    alt={`${film.title} — ${film.client}`}
                    wrapperClassName="w-full h-full"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080807]/90 via-[#080807]/20 to-transparent" />

                  {/* Category & Location Badges */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-[#080807]/80 backdrop-blur-sm border border-[#F4EFE6]/15 text-[10px] uppercase tracking-[0.2em] text-[#C99A5B]">
                      {film.category} · {film.sector}
                    </span>
                    <span className="px-2.5 py-1 bg-[#080807]/75 backdrop-blur-sm text-[10px] uppercase tracking-[0.18em] text-[#F4EFE6]/80">
                      {film.year}
                    </span>
                  </div>

                  {/* Center Play Trigger */}
                  <button
                    type="button"
                    onClick={() => onPlayFilm(film)}
                    aria-label={`Play ${film.title}`}
                    className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group/play"
                  >
                    <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#080807]/75 backdrop-blur-md border border-[#C99A5B]/80 flex items-center justify-center text-[#F4EFE6] group-hover/play:bg-[#C99A5B] group-hover/play:text-[#080807] group-hover/play:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </span>
                  </button>
                </div>

                {/* Card Copy */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#A8A298]">
                      <span>{film.client}</span>
                      <span>{film.location}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-[0.06em] text-[#F4EFE6] group-hover:text-[#C99A5B] transition-colors">
                      <Link to={`/works/${film.slug}`}>{film.title}</Link>
                    </h3>
                    <p className="text-sm text-[#A8A298] leading-relaxed line-clamp-3">
                      {film.logline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F4EFE6]/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onPlayFilm(film)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F4EFE6] hover:text-[#C99A5B] transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-[#C99A5B]" />
                      <span>Watch Film</span>
                    </button>

                    <Link
                      to={`/works/${film.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C99A5B] hover:text-[#DDB072] transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#F4EFE6]/25 text-xs uppercase tracking-[0.22em] text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
            >
              <span>See All Works &amp; Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. HOW WE WORK & PRODUCTION SERVICES (#services)
         ========================================================= */}
      <section
        id="services"
        className="py-24 sm:py-32 border-t border-[#F4EFE6]/10 bg-[#080807]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-24">
          {/* Part A: TNBNU Media's 3 Creative Principles */}
          <div>
            <div className="max-w-3xl space-y-4 mb-14">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
                HOW WE WORK · PHILOSOPHY
              </p>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
                Every Frame Starts With Conviction
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_WE_WORK_TENETS.map((item) => (
                <div
                  key={item.number}
                  className="p-7 sm:p-9 bg-[#11110F] border border-[#F4EFE6]/10 space-y-4"
                >
                  <span className="font-mono text-xs tracking-[0.24em] text-[#C99A5B]">
                    {item.number}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F4EFE6]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8A298] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: End-to-End Production Services (Black Bean Concept -> Craft -> Post Architecture) */}
          <div className="pt-16 border-t border-[#F4EFE6]/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
                  END-TO-END PRODUCTION SERVICES
                </p>
                <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
                  From Founder Vision to Final Cut
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C99A5B] hover:text-[#DDB072] shrink-0"
              >
                <span>Request a Production Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PRODUCTION_SERVICES.map((service) => (
                <div
                  key={service.phase}
                  className="p-8 bg-[#0E0E0C] border border-[#F4EFE6]/10 flex flex-col justify-between space-y-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em]">
                      <span className="text-[#C99A5B] font-semibold">{service.phase}</span>
                      <span className="text-[#767067]">{service.subtitle}</span>
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-[#F4EFE6]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#A8A298] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-6 border-t border-[#F4EFE6]/10">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4EFE6]/85"
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
        </div>
      </section>

      {/* =========================================================
          5. STILL PHOTOGRAPHY PREVIEW STRIP
         ========================================================= */}
      <section className="py-24 sm:py-32 border-t border-[#F4EFE6]/10 bg-[#0C0C0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
                STILL FRAMES &amp; CAMPAIGN PHOTOGRAPHY
              </p>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
                Frames From the Field
              </h2>
            </div>

            <Link
              to="/photography"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C99A5B] hover:text-[#DDB072] shrink-0"
            >
              <span>Open Full Gallery ({PHOTOGRAPHY_ARCHIVE.length} Stills)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredStills.map((still, idx) => (
              <button
                key={still.id}
                type="button"
                onClick={() => onOpenLightbox(lightboxItems, idx)}
                className="group relative aspect-[16/10] overflow-hidden border border-[#F4EFE6]/10 text-left cursor-pointer"
              >
                <SmartImage
                  src={still.src}
                  alt={still.alt}
                  wrapperClassName="w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080807]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#C99A5B]">
                    {still.location}
                  </span>
                  <span className="text-sm text-[#F4EFE6] font-medium mt-0.5 line-clamp-1">
                    {still.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. BEFORE WE TALK — FAQ ACCORDION
         ========================================================= */}
      <FaqSection compact />
    </div>
  );
};

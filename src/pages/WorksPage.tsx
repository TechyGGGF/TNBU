import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Play } from 'lucide-react';
import { FILM_PROJECTS, type FilmProject } from '../data/studioData';
import { SmartImage } from '../components/SmartImage';

interface WorksPageProps {
  onPlayFilm: (film: FilmProject) => void;
}

const WORK_FILTERS = [
  'All Works',
  'Brand Film',
  'Short Film',
  'Hospitality',
  'Luxury',
  'Automotive',
] as const;

export const WorksPage: React.FC<WorksPageProps> = ({ onPlayFilm }) => {
  const [activeFilter, setActiveFilter] =
    useState<(typeof WORK_FILTERS)[number]>('All Works');

  const visibleProjects = FILM_PROJECTS.filter((project) => {
    if (activeFilter === 'All Works') return true;
    if (activeFilter === 'Brand Film' || activeFilter === 'Short Film') {
      return project.category === activeFilter;
    }
    return project.sector === activeFilter;
  });

  return (
    <div className="pt-28 sm:pt-36">
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 border-b border-[#F4EFE6]/10">
        <div className="max-w-4xl space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
            OUR FILMS · CASE STUDIES
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.04em] text-[#F4EFE6] leading-[1.03]">
            Crafting Stories That Stay With People
          </h1>
          <p className="text-base sm:text-lg text-[#A8A298] max-w-2xl leading-relaxed">
            Brand films and short documentaries filmed in natural light across Nairobi,
            Zanzibar and the Maasai Mara. Every project begins with what people should feel
            before they ever walk through your door.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          {WORK_FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] border transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#C99A5B] text-[#080807] border-[#C99A5B] font-semibold'
                    : 'text-[#A8A298] border-[#F4EFE6]/15 hover:border-[#F4EFE6]/35 hover:text-[#F4EFE6]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Editorial Alternating Works List */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {visibleProjects.map((project, idx) => (
          <article
            key={project.slug}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Widescreen Frame */}
            <div
              className={`lg:col-span-7 ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}
            >
              <div className="group relative aspect-video overflow-hidden border border-[#F4EFE6]/12 bg-[#12110F]">
                <SmartImage
                  src={project.cardImage}
                  alt={project.title}
                  priority={idx === 0}
                  wrapperClassName="w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080807]/85 via-transparent to-transparent" />

                <button
                  type="button"
                  onClick={() => onPlayFilm(project)}
                  aria-label={`Screen ${project.title}`}
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group/btn"
                >
                  <span className="w-16 h-16 rounded-full bg-[#080807]/75 backdrop-blur-md border border-[#C99A5B] flex items-center justify-center text-[#F4EFE6] group-hover/btn:bg-[#C99A5B] group-hover/btn:text-[#080807] group-hover/btn:scale-110 transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </span>
                </button>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#F4EFE6]/85">
                  <span>{project.location}</span>
                  <span>{project.stills.length} Production Stills</span>
                </div>
              </div>
            </div>

            {/* Narrative Details */}
            <div
              className={`lg:col-span-5 space-y-5 ${
                idx % 2 === 1 ? 'lg:order-1' : ''
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#C99A5B]">
                <span>0{idx + 1}</span>
                <span>·</span>
                <span>{project.category}</span>
                <span>·</span>
                <span>{project.client}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
                <Link
                  to={`/works/${project.slug}`}
                  className="hover:text-[#C99A5B] transition-colors"
                >
                  {project.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-[#A8A298] leading-relaxed">
                {project.logline}
              </p>

              <div className="pt-2 text-xs text-[#767067] space-y-1">
                <p>
                  <span className="text-[#A8A298]">Role:</span> {project.role}
                </p>
                <p>
                  <span className="text-[#A8A298]">Year:</span> {project.year} ·{' '}
                  {project.credits}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to={`/works/${project.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DDB072] transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => onPlayFilm(project)}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#F4EFE6]/20 text-xs uppercase tracking-[0.2em] text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Screen Film</span>
                </button>

                <a
                  href={project.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} master video in new tab`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs text-[#A8A298] hover:text-[#F4EFE6] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Authentic TNBNU Works CTA Band */}
      <section className="border-t border-[#F4EFE6]/10 bg-[#0D0C0A] py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
            COMMISSION A FILM
          </p>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#F4EFE6]">
            Want to become one of our featured works? Let’s start a project.
          </h2>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#DDB072] transition-colors"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

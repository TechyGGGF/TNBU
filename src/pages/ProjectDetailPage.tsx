import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Maximize2,
  Play,
} from 'lucide-react';
import { FILM_PROJECTS } from '../data/studioData';
import { SmartImage } from '../components/SmartImage';
import { FaqSection } from '../components/FaqSection';
import { type LightboxItem } from '../components/LightboxModal';

interface ProjectDetailPageProps {
  onOpenLightbox: (items: LightboxItem[], index: number) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  onOpenLightbox,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const [playerActive, setPlayerActive] = useState(false);

  const project = FILM_PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    setPlayerActive(false);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[75vh] pt-36 pb-24 max-w-3xl mx-auto px-5 text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
          FILM NOT FOUND
        </p>
        <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6]">
          This Case Study Could Not Be Located
        </h1>
        <p className="text-sm text-[#A8A298]">
          Explore TNBNU Media’s complete filmography below.
        </p>
        <div className="pt-2">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Films</span>
          </Link>
        </div>
      </div>
    );
  }

  const otherFilms = FILM_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  const projectLightboxItems: LightboxItem[] = project.stills.map((s) => ({
    src: s.src,
    alt: s.alt,
    caption: s.caption,
    location: project.location,
  }));

  return (
    <div>
      {/* Full-Bleed Project Hero */}
      <section className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden pt-32 pb-14">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={project.heroImage}
            alt={project.title}
            priority
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 z-10 cinema-vignette" />
        </div>

        <div className="relative z-20 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 space-y-6">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A8A298] hover:text-[#C99A5B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Films</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#080807]/75 backdrop-blur-sm border border-[#F4EFE6]/15 text-[10px] uppercase tracking-[0.2em] text-[#C99A5B]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.04em] text-[#F4EFE6] leading-[1.03]">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#F4EFE6]/85 max-w-3xl leading-relaxed font-light">
            {project.logline}
          </p>
        </div>
      </section>

      {/* Metadata Credits Bar */}
      <section className="border-y border-[#F4EFE6]/10 bg-[#0D0C0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs">
          <div>
            <p className="uppercase tracking-[0.22em] text-[#767067] mb-1">Client</p>
            <p className="text-[#F4EFE6] font-medium text-sm">{project.client}</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.22em] text-[#767067] mb-1">Location</p>
            <p className="text-[#F4EFE6] font-medium text-sm">{project.location}</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.22em] text-[#767067] mb-1">Year</p>
            <p className="text-[#F4EFE6] font-medium text-sm">{project.year}</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.22em] text-[#767067] mb-1">Role</p>
            <p className="text-[#F4EFE6] font-medium text-sm">{project.role}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="uppercase tracking-[0.22em] text-[#767067] mb-1">Credits</p>
            <p className="text-[#F4EFE6] font-medium text-sm">{project.credits}</p>
          </div>
        </div>
      </section>

      {/* Inline Film Screening Stage */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C99A5B]">
              FILM SCREENING
            </p>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-[0.06em] text-[#F4EFE6]">
              {project.subtitle}
            </h2>
          </div>

          <a
            href={project.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#F4EFE6]/20 text-xs uppercase tracking-[0.18em] text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors self-start sm:self-auto"
          >
            <span>Open Master Film Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="relative aspect-video w-full overflow-hidden border border-[#F4EFE6]/15 bg-black shadow-2xl">
          {!playerActive ? (
            <button
              type="button"
              onClick={() => setPlayerActive(true)}
              aria-label={`Play ${project.title}`}
              className="group relative w-full h-full block text-left cursor-pointer"
            >
              <SmartImage
                src={project.cardImage}
                alt={`${project.title} screening poster`}
                wrapperClassName="w-full h-full"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 bg-[#080807]/45 group-hover:bg-[#080807]/30 transition-colors flex flex-col items-center justify-center gap-4">
                <span className="w-20 h-20 rounded-full bg-[#C99A5B] text-[#080807] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </span>
                <span className="px-4 py-1.5 bg-[#080807]/80 backdrop-blur-sm border border-[#F4EFE6]/15 text-xs uppercase tracking-[0.24em] text-[#F4EFE6]">
                  Click to Watch Film
                </span>
              </div>
            </button>
          ) : (
            <iframe
              src={project.embedUrl}
              title={`${project.title} — TNBNU Media Film`}
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>
      </section>

      {/* Editorial Production Narrative */}
      <section className="pb-20 sm:pb-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C99A5B]">
              BEHIND THE STORY
            </p>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F4EFE6] leading-snug">
              How the film came together on location.
            </h3>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#A8A298] leading-relaxed">
            {project.storyParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0 ? 'text-[#F4EFE6] font-editorial text-2xl sm:text-3xl leading-snug' : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stills Gallery */}
      <section className="py-20 sm:py-28 border-t border-[#F4EFE6]/10 bg-[#0C0C0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
                STILLS &amp; FRAMES
              </p>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-[0.05em] text-[#F4EFE6] mt-2">
                Production Frames
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#767067]">
              Click any frame to enlarge
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {project.stills.map((still, index) => (
              <button
                key={still.src}
                type="button"
                onClick={() => onOpenLightbox(projectLightboxItems, index)}
                className={`group relative overflow-hidden border border-[#F4EFE6]/10 text-left cursor-pointer ${
                  index === 0 && project.stills.length % 2 === 1
                    ? 'md:col-span-2 aspect-[21/10]'
                    : 'aspect-video'
                }`}
              >
                <SmartImage
                  src={still.src}
                  alt={still.alt}
                  wrapperClassName="w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080807]/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end justify-between p-5 gap-4">
                  <span className="text-xs sm:text-sm text-[#F4EFE6]">
                    {still.caption}
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#C99A5B] shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* More Films Cross-Navigation */}
      <section className="py-20 sm:py-28 border-t border-[#F4EFE6]/10 bg-[#080807]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
                OUR WORK
              </p>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-[0.05em] text-[#F4EFE6] mt-2">
                More Films
              </h2>
            </div>
            <Link
              to="/works"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C99A5B] hover:text-[#DDB072]"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherFilms.map((other) => (
              <Link
                key={other.slug}
                to={`/works/${other.slug}`}
                className="group block bg-[#12110F] border border-[#F4EFE6]/10 hover:border-[#C99A5B]/50 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <SmartImage
                    src={other.cardImage}
                    alt={other.title}
                    wrapperClassName="w-full h-full"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#C99A5B]">
                      {other.category} · {other.client}
                    </p>
                    <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-[#F4EFE6] group-hover:text-[#C99A5B] transition-colors mt-1">
                      {other.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#A8A298] group-hover:text-[#C99A5B] transition-colors shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before We Talk FAQ */}
      <FaqSection compact />
    </div>
  );
};

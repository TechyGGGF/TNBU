import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Film, X, ArrowRight } from 'lucide-react';
import { FILM_PROJECTS, type FilmProject } from '../data/studioData';

interface FilmModalProps {
  activeFilm: FilmProject | null;
  onSelectFilm: (film: FilmProject) => void;
  onClose: () => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({
  activeFilm,
  onSelectFilm,
  onClose,
}) => {
  useEffect(() => {
    if (!activeFilm) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeFilm, onClose]);

  if (!activeFilm) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Screening Room — ${activeFilm.title}`}
      className="fixed inset-0 z-50 bg-[#050504]/95 backdrop-blur-lg flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className="max-w-6xl w-full mx-auto my-auto bg-[#0D0D0B] border border-[#F4EFE6]/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Screening Room Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b border-[#F4EFE6]/10">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-[#C99A5B]" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#C99A5B]">
                TNBNU Screening Room · {activeFilm.category}
              </p>
              <h3 className="font-display text-lg sm:text-xl uppercase tracking-[0.1em] text-[#F4EFE6]">
                {activeFilm.title}{' '}
                <span className="text-[#767067] text-sm font-sans normal-case tracking-normal">
                  — {activeFilm.client} ({activeFilm.location})
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={activeFilm.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] uppercase tracking-[0.18em] border border-[#F4EFE6]/20 text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
            >
              <span>Open Master Film</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close screening room"
              className="p-2 text-[#A8A298] hover:text-[#F4EFE6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Cinema Frame */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            key={activeFilm.driveId}
            src={activeFilm.embedUrl}
            title={`${activeFilm.title} — TNBNU Media Film Player`}
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Switcher & Case Study Link */}
        <div className="p-5 sm:p-6 bg-[#0B0B09] border-t border-[#F4EFE6]/10 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-[#A8A298] max-w-2xl leading-relaxed">
              {activeFilm.logline}
            </p>
            <Link
              to={`/works/${activeFilm.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 shrink-0 px-5 py-2.5 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DDB072] transition-colors"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Film Reel Selector */}
          <div className="pt-4 border-t border-[#F4EFE6]/10">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#767067] mb-3">
              Switch Film in Screening Room
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {FILM_PROJECTS.map((project) => {
                const isSelected = project.slug === activeFilm.slug;
                return (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => onSelectFilm(project)}
                    className={`text-left px-3.5 py-2.5 border transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#C99A5B] bg-[#C99A5B]/10 text-[#F4EFE6]'
                        : 'border-[#F4EFE6]/10 bg-[#12110F] text-[#A8A298] hover:border-[#F4EFE6]/30 hover:text-[#F4EFE6]'
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#C99A5B]">
                      {project.client}
                    </p>
                    <p className="text-xs font-medium truncate mt-0.5">{project.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

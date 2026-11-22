import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import { SmartImage } from './SmartImage';

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  projectSlug?: string;
  projectTitle?: string;
}

interface LightboxModalProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onChangeIndex: (index: number) => void;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onChangeIndex,
  onClose,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onChangeIndex((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onChangeIndex((currentIndex - 1 + items.length) % items.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [currentIndex, items.length, onChangeIndex, onClose]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Still Frame Lightbox"
      className="fixed inset-0 z-50 bg-[#050504]/96 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="max-w-7xl w-full mx-auto flex items-center justify-between text-xs text-[#A8A298]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[#C99A5B]">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')}
          </span>
          {current.location && (
            <span className="uppercase tracking-[0.2em] hidden sm:inline">
              · {current.location}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#F4EFE6]/15 text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Close</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative max-w-6xl w-full mx-auto my-4 flex-1 flex items-center justify-center min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onChangeIndex((currentIndex - 1 + items.length) % items.length)}
            aria-label="Previous frame"
            className="absolute left-0 sm:-left-4 z-20 p-3 bg-[#080807]/85 border border-[#F4EFE6]/15 text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div className="w-full h-full max-h-[74vh] flex items-center justify-center">
          <SmartImage
            src={current.src}
            alt={current.alt}
            priority
            wrapperClassName="w-full h-full max-h-[74vh] bg-transparent"
            className="!object-contain max-h-[74vh]"
          />
        </div>

        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onChangeIndex((currentIndex + 1) % items.length)}
            aria-label="Next frame"
            className="absolute right-0 sm:-right-4 z-20 p-3 bg-[#080807]/85 border border-[#F4EFE6]/15 text-[#F4EFE6] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Caption & Project Link */}
      <div
        className="max-w-5xl w-full mx-auto pt-3 border-t border-[#F4EFE6]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-[#F4EFE6]/90">{current.caption || current.alt}</p>
        {current.projectSlug && current.projectTitle && (
          <Link
            to={`/works/${current.projectSlug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C99A5B] hover:text-[#DDB072] shrink-0"
          >
            <span>From “{current.projectTitle}”</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { PHOTOGRAPHY_ARCHIVE, type StillPhoto } from '../data/studioData';
import { SmartImage } from '../components/SmartImage';
import { type LightboxItem } from '../components/LightboxModal';

interface PhotographyPageProps {
  onOpenLightbox: (items: LightboxItem[], index: number) => void;
}

const COLLECTIONS: ('All Collections' | StillPhoto['collection'])[] = [
  'All Collections',
  'Maasai Mara & Hospitality',
  'Zanzibar & Luxury',
  'Automotive & Nairobi',
  'Behind the Frame',
];

export const PhotographyPage: React.FC<PhotographyPageProps> = ({
  onOpenLightbox,
}) => {
  const [selectedCollection, setSelectedCollection] =
    useState<(typeof COLLECTIONS)[number]>('All Collections');

  const filteredPhotos = PHOTOGRAPHY_ARCHIVE.filter((photo) =>
    selectedCollection === 'All Collections'
      ? true
      : photo.collection === selectedCollection
  );

  const lightboxItems: LightboxItem[] = filteredPhotos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    caption: photo.caption,
    location: photo.location,
    projectSlug: photo.projectSlug,
    projectTitle: photo.projectTitle,
  }));

  return (
    <div className="pt-28 sm:pt-36">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 border-b border-[#F4EFE6]/10">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B] font-medium">
            PHOTOGRAPHY &amp; CAMPAIGN STILLS
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.04em] text-[#F4EFE6] leading-[1.03]">
            Photography
          </h1>
          <p className="text-base sm:text-lg text-[#A8A298] leading-relaxed">
            Natural-light still frames and campaign photography captured alongside our film
            productions across the Maasai Mara, Zanzibar and Nairobi.
          </p>
        </div>

        {/* Collection Filter Tabs (Inspired by Black Bean Productions' Photography Collections) */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          {COLLECTIONS.map((collection) => {
            const active = selectedCollection === collection;
            const count =
              collection === 'All Collections'
                ? PHOTOGRAPHY_ARCHIVE.length
                : PHOTOGRAPHY_ARCHIVE.filter((p) => p.collection === collection).length;
            return (
              <button
                key={collection}
                type="button"
                onClick={() => setSelectedCollection(collection)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] border transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#C99A5B] text-[#080807] border-[#C99A5B] font-semibold'
                    : 'text-[#A8A298] border-[#F4EFE6]/15 hover:border-[#F4EFE6]/35 hover:text-[#F4EFE6]'
                }`}
              >
                {collection} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className={`group bg-[#11110F] border border-[#F4EFE6]/10 overflow-hidden flex flex-col ${
                idx % 7 === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => onOpenLightbox(lightboxItems, idx)}
                className="relative aspect-[16/10] w-full overflow-hidden text-left cursor-pointer"
              >
                <SmartImage
                  src={photo.src}
                  alt={photo.alt}
                  priority={idx < 3}
                  wrapperClassName="w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-20 bg-[#080807]/0 group-hover:bg-[#080807]/35 transition-colors flex items-start justify-end p-4">
                  <span className="p-2 bg-[#080807]/75 border border-[#F4EFE6]/15 text-[#F4EFE6] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#C99A5B]" />
                  </span>
                </div>
              </button>

              <div className="p-4 sm:p-5 flex items-center justify-between gap-4 border-t border-[#F4EFE6]/8">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#C99A5B]">
                    {photo.location} · {photo.collection}
                  </p>
                  <p className="text-xs sm:text-sm text-[#F4EFE6]/90 truncate mt-1">
                    {photo.caption}
                  </p>
                </div>

                {photo.projectSlug && (
                  <Link
                    to={`/works/${photo.projectSlug}`}
                    aria-label={`View film ${photo.projectTitle}`}
                    className="shrink-0 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#A8A298] hover:text-[#C99A5B] transition-colors"
                  >
                    <span>Film</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

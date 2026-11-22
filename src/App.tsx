import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FILM_PROJECTS, type FilmProject } from './data/studioData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FilmModal } from './components/FilmModal';
import { LightboxModal, type LightboxItem } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { PhotographyPage } from './pages/PhotographyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [activeFilm, setActiveFilm] = useState<FilmProject | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    items: LightboxItem[];
    index: number | null;
  }>({ items: [], index: null });

  const handleOpenLightbox = (items: LightboxItem[], index: number) => {
    setLightboxState({ items, index });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#F4EFE6]">
      <ScrollToTop />
      <Navbar onOpenReel={() => setActiveFilm(FILM_PROJECTS[0])} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onPlayFilm={(film) => setActiveFilm(film)}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/works"
            element={<WorksPage onPlayFilm={(film) => setActiveFilm(film)} />}
          />
          <Route
            path="/works/:slug"
            element={<ProjectDetailPage onOpenLightbox={handleOpenLightbox} />}
          />
          <Route
            path="/photography"
            element={<PhotographyPage onOpenLightbox={handleOpenLightbox} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      <FilmModal
        activeFilm={activeFilm}
        onSelectFilm={(film) => setActiveFilm(film)}
        onClose={() => setActiveFilm(null)}
      />

      <LightboxModal
        items={lightboxState.items}
        currentIndex={lightboxState.index}
        onChangeIndex={(index) =>
          setLightboxState((prev) => ({ ...prev, index }))
        }
        onClose={() => setLightboxState({ items: [], index: null })}
      />
    </div>
  );
};

export default App;

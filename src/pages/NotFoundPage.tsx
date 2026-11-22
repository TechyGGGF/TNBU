import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] pt-36 pb-24 max-w-3xl mx-auto px-5 flex flex-col items-center justify-center text-center space-y-6">
      <p className="text-xs uppercase tracking-[0.28em] text-[#C99A5B]">
        404 · OUT OF FRAME
      </p>
      <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-[0.05em] text-[#F4EFE6]">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-[#A8A298] max-w-md leading-relaxed">
        The page you are looking for has moved or does not exist. Return to the studio
        homepage or explore our films.
      </p>
      <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C99A5B] text-[#080807] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#DDB072] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/works"
          className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F4EFE6]/20 text-[#F4EFE6] text-xs uppercase tracking-[0.2em] hover:border-[#C99A5B] hover:text-[#C99A5B] transition-colors"
        >
          <span>View Our Films</span>
        </Link>
      </div>
    </div>
  );
};

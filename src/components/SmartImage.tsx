import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  fallbackLabel,
  priority = false,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#131210] ${wrapperClassName}`}
    >
      {/* Subtle warm atmospheric placeholder behind image while loading or if offline */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br from-[#1b1814] via-[#12110f] to-[#0a0a09] transition-opacity duration-700 ${
          loaded && !errored ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-4 border border-[#F4EFE6]/8 flex items-end justify-between p-4">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C99A5B]/60 font-medium">
            {fallbackLabel || 'TNBNU MEDIA · 2.39:1'}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F4EFE6]/25">
            EAST AFRICA
          </span>
        </div>
      </div>

      {!errored && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`relative z-10 w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};

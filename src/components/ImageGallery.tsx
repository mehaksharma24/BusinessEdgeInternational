import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type ImageItem = { src: string; alt?: string; caption?: string } | string;

interface ImageGalleryProps {
  images: ImageItem[];
  title?: string;
}

function getSrc(img: ImageItem): string {
  return typeof img === 'string' ? img : img.src;
}

function getAlt(img: ImageItem): string {
  return typeof img === 'string' ? '' : (img.alt ?? '');
}

function getCaption(img: ImageItem): string | undefined {
  return typeof img === 'string' ? undefined : img.caption;
}

export default function ImageGallery({ images, title = 'Gallery' }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Touch swipe state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevMain = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const nextMain = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prevLightbox = useCallback(() => {
    setLightbox((l) => l !== null ? (l - 1 + images.length) % images.length : null);
  }, [images.length]);

  const nextLightbox = useCallback(() => {
    setLightbox((l) => l !== null ? (l + 1) % images.length : null);
  }, [images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prevLightbox, nextLightbox]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const handleMainTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleMainTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? nextMain() : prevMain();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? nextLightbox() : prevLightbox();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!images.length) return null;

  const caption = getCaption(images[current]);

  return (
    <div className="w-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {title && (
        <h2
          className="text-2xl text-gray-900 mb-4 tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          {title}
        </h2>
      )}

      {/* Main image */}
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-md group cursor-pointer"
        style={{ aspectRatio: '4/3' }}
        onClick={() => setLightbox(current)}
        onTouchStart={handleMainTouchStart}
        onTouchEnd={handleMainTouchEnd}
      >
        <img
          src={getSrc(images[current])}
          alt={getAlt(images[current])}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Gradient overlay for caption readability */}
        {caption && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        )}

        {caption && (
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
            <p
              className="text-white text-sm leading-snug drop-shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              {caption}
            </p>
          </div>
        )}

        {/* Click-to-zoom hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-black/40 backdrop-blur-sm text-white rounded-xl px-4 py-2 flex items-center gap-2 pointer-events-none">
            <span
              className="text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              View All Photos
            </span>
          </div>
        </div>

        {/* Prev / Next arrows on main image */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevMain(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/45 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextMain(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/45 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image counter badge */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white rounded-lg px-2.5 py-1 z-10">
            <span
              className="text-xs tabular-nums"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              {current + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Two-row thumbnail grid */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setLightbox(i); }}
              className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5fa8] ${
                i === current
                  ? 'border-[#1a5fa8] opacity-100 shadow-md scale-[1.03]'
                  : 'border-transparent opacity-55 hover:opacity-90 hover:border-gray-300'
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={getSrc(img)}
                alt={getAlt(img)}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          style={{ backdropFilter: 'blur(6px)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Inner container — stops click propagation */}
          <div
            className="relative w-full max-w-5xl mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleLightboxTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
          >
            {/* Top bar */}
            <div className="w-full flex items-center justify-between mb-3 px-1">
              <span
                className="text-white/70 text-sm tabular-nums"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
              >
                {(lightbox ?? 0) + 1} / {images.length}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main lightbox image */}
            <div className="relative w-full">
              <img
                src={getSrc(images[lightbox ?? 0])}
                alt={getAlt(images[lightbox ?? 0])}
                className="w-full h-auto rounded-xl shadow-2xl max-h-[75vh] object-contain select-none"
                draggable={false}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Next"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            {getCaption(images[lightbox ?? 0]) && (
              <p
                className="text-white/80 text-sm text-center mt-3 max-w-xl"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
              >
                {getCaption(images[lightbox ?? 0])}
              </p>
            )}

            {/* Thumbnail strip in lightbox */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto max-w-full pb-1 px-1 scrollbar-thin">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`flex-shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      i === (lightbox ?? 0)
                        ? 'border-white opacity-100 scale-[1.06]'
                        : 'border-transparent opacity-45 hover:opacity-80'
                    }`}
                    aria-label={`Jump to image ${i + 1}`}
                  >
                    <img
                      src={getSrc(img)}
                      alt={getAlt(img)}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

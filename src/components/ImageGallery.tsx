import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface ImageGalleryProps {
  images: { src: string; alt: string; caption?: string }[] | string[];
  title?: string;
}

export default function ImageGallery({ images, title = 'Gallery' }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, origin: 'slider' | 'lightbox' = 'slider') => {
      const target = origin === 'slider' ? index : index;
      if (origin === 'slider') {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrent(target);
          setIsAnimating(false);
        }, 200);
      } else {
        setLightbox(target);
      }
    },
    []
  );

  const prev = (origin: 'slider' | 'lightbox' = 'slider') => {
    const idx = origin === 'slider' ? current : lightbox ?? 0;
    const next = (idx - 1 + images.length) % images.length;
    origin === 'slider' ? goTo(next, 'slider') : setLightbox(next);
  };

  const next = (origin: 'slider' | 'lightbox' = 'slider') => {
    const idx = origin === 'slider' ? current : lightbox ?? 0;
    const n = (idx + 1) % images.length;
    origin === 'slider' ? goTo(n, 'slider') : setLightbox(n);
  };

  useEffect(() => {
    if (lightbox !== null) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length, lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev('lightbox');
      if (e.key === 'ArrowRight') next('lightbox');
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  if (!images.length) return null;

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{title}</h2>
      )}

      {/* Main slider */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl group" style={{ aspectRatio: '4/3' }}>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          <img
            src={images[current].src || images[current]}
            alt={images[current].alt || ""}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {images[current].caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium z-10">
            {images[current].caption}
          </div>
        )}

        <button
          onClick={() => setLightbox(current)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
        >
          <ZoomIn size={16} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={() => prev('slider')}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => next('slider')}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, 'slider')}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i, 'slider')}
              className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current ? 'border-[#1a5fa8] opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={img.src || img}
                alt={img.alt || ""}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
            <img
              src={images[lightbox].src || images[lightbox]}
              alt={images[lightbox].alt || ""}
              className="w-full h-auto rounded-xl shadow-2xl max-h-[80vh] object-contain"
            />
            {images[lightbox].caption && (
              <p className="text-white/70 text-sm text-center mt-3">{images[lightbox].caption}</p>
            )}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => prev('lightbox')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => next('lightbox')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

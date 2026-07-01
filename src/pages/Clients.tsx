import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import Footer from '../components/Footer';
import { banners } from '../lib/bannerConfig';
import { clientCards, marqueeLogos } from '../lib/clientConfig';
import { testimonials } from '../lib/testimonials';

interface ClientsProps {
  onNavigate: (page: string) => void;
}

const partSize = Math.ceil(marqueeLogos.length / 4);
const row1 = marqueeLogos.slice(0, partSize);
const row2 = marqueeLogos.slice(partSize, partSize * 2);
const row3 = marqueeLogos.slice(partSize * 2, partSize * 3);
const row4 = marqueeLogos.slice(partSize * 3);

const CARDS_PER_PAGE = 3;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function LogoImg({ src, name, className = '' }: { src: string; name: string; className?: string }) {
  return (
    <img
      src={src}
      alt={name}
      className={className}
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
    />
  );
}

function MarqueeRow({ logos, reverse = false }: { logos: typeof marqueeLogos; reverse?: boolean }) {
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }} />

      <div
        className="flex gap-16 items-center"
        style={{
          width: 'max-content',
          animation: `marquee${reverse ? 'Rev' : 'Fwd'} ${logos.length * 2.5}s linear infinite`,
        }}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-44 flex items-center justify-center h-20 transition-all duration-300">
            <LogoImg src={logo.src} name={logo.name} className="max-h-14 max-w-[160px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients({ onNavigate }: ClientsProps) {
  const [cardPage, setCardPage] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);

  const cardTotalPages = Math.ceil(clientCards.length / CARDS_PER_PAGE);
  const testTotalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">

      <style>{`
        @keyframes marqueeFwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @keyframes zoom-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
        .animate-zoom-pulse { animation: zoom-pulse 12s ease-in-out infinite; }
      `}</style>

      {/* Hero */}
      <section className="relative pt-80 pb-52 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-zoom-pulse"
          style={{ backgroundImage: `url(${banners.clients})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d73]/90 to-[#1a5fa8]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-4">Our Clients</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white"
            style={{ textShadow: '2px 2px 4px #243d7d' }}>
            Trusted by brands that value impact.
          </h1>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Brands we've worked with
        </p>

        <div className="flex flex-col gap-8">
          <MarqueeRow logos={row1} reverse={false} />
          <MarqueeRow logos={row2} reverse={true} />
          <MarqueeRow logos={row3} reverse={false} />
          <MarqueeRow logos={row4} reverse={true} />
        </div>
      </section>

      {/* Client Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Partnerships built on results</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCards
              .slice(cardPage * CARDS_PER_PAGE, cardPage * CARDS_PER_PAGE + CARDS_PER_PAGE)
              .map((client, i) => (
                <div key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">

                  <div className="flex items-center justify-center h-40 bg-gray-50 border-b border-gray-100 px-8">
                    <LogoImg src={client.src} name={client.name} className="max-h-18 max-w-[220px] object-contain" />
                  </div>

                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                      {client.industry}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{client.detail}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setCardPage(p => Math.max(0, p - 1))}
              disabled={cardPage === 0}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1a5fa8] hover:text-[#1a5fa8] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: cardTotalPages }).map((_, i) => (
                <button key={i} onClick={() => setCardPage(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === cardPage ? 'w-6 h-2.5 bg-[#1a5fa8]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`} />
              ))}
            </div>

            <button
              onClick={() => setCardPage(p => Math.min(cardTotalPages - 1, p + 1))}
              disabled={cardPage === cardTotalPages - 1}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1a5fa8] hover:text-[#1a5fa8] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f0f6ff 0%, #fafafa 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl font-extrabold text-gray-900">What it's like to work with us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials
              .slice(testimonialPage * CARDS_PER_PAGE, testimonialPage * CARDS_PER_PAGE + CARDS_PER_PAGE)
              .map((t, i) => (
                <div key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">

                  <StarRating count={t.rating} />

                  <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">
                    "{t.text}"
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.company}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setTestimonialPage(p => Math.max(0, p - 1))}
              disabled={testimonialPage === 0}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1a5fa8] hover:text-[#1a5fa8] disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: testTotalPages }).map((_, i) => (
                <button key={i} onClick={() => setTestimonialPage(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === testimonialPage ? 'w-6 h-2.5 bg-[#1a5fa8]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`} />
              ))}
            </div>

            <button
              onClick={() => setTestimonialPage(p => Math.min(testTotalPages - 1, p + 1))}
              disabled={testimonialPage === testTotalPages - 1}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1a5fa8] hover:text-[#1a5fa8] disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Business+Edge+International+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#1a5fa8] hover:text-[#1a5fa8] transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              See Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

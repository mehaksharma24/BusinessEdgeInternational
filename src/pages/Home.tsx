import { ArrowRight, Award, Target, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import videoFile from '../assets/video.mp4'; // ⭐ Your video file
import Footer from '../components/Footer';
import { banners } from '../lib/bannerConfig';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1526401485004-2fda9f6d6c37?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
  ];

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-pulse"
          style={{ backgroundImage: `url(${banners.home})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3d73]/85 via-[#0d3d73]/60 to-transparent" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-wide mb-8 whitespace-nowrap"
              style={{ textShadow: '3px 3px 6px #243d7d' }}
            >
              Where ideas become
              <br />
              <span
                className="text-orange-400"
                style={{ textShadow: '3px 3px 6px #243d7d' }}
              >
                impactful products.
              </span>
            </h1>

            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-blue-100 mb-14 leading-relaxed tracking-wide font-semibold"
              style={{ textShadow: '2px 2px 4px #243d7d' }}
            >
              Over 20 years of global experience turning ideas into high-impact brand experiences.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => onNavigate('services')}
                className="group flex items-center gap-3 px-12 py-6 bg-orange-500 text-white text-2xl font-extrabold rounded-2xl hover:bg-orange-400 transition-all duration-300 shadow-xl hover:shadow-orange-500/40 hover:shadow-2xl hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight size={30} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-[3px] h-12 bg-white/70 rounded-full" />
          <div className="w-4 h-4 rounded-full bg-white/80" />
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* TEXT SIDE */}
            <div>
              <p className="text-orange-500 font-medium text-2xl tracking-widest mb-4">
                About Us
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-6">
                We make brands <span className="text-[#1a5fa8]">impossible</span> to ignore.
              </h2>

              <p className="text-2xl font-medium text-gray-700 leading-relaxed mb-6">
                Business Edge International (BEI) helps brands show up better, everywhere.
              </p>

              <p className="text-2xl font-medium text-gray-700 leading-relaxed mb-8">
                With over 20 years of global experience, we turn ideas into high-impact brand experiences across merch, apparel, print, digital, and experiential. From concept to execution, we handle every detail so your brand connects, stands out, and delivers real results.
              </p>
            </div>

            {/* VIDEO SIDE */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-[420px]">
                <video
                  src={videoFile}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-black">20+</div>
                <div className="text-sm font-medium mt-1">
                  Years of Global Experience
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
              Process
            </p>

            <h2 className="text-5xl font-extrabold text-gray-900">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Strategy First',
                description:
                  'We start with your goals, audience, and brand. Everything we create is built to drive engagement and ROI.',
                color: 'bg-blue-100 text-[#1a5fa8]',
              },
              {
                icon: Zap,
                title: 'End-to-End Execution',
                description:
                  'From sourcing to delivery, we manage the entire process. On time, on budget, on brand.',
                color: 'bg-orange-100 text-orange-500',
              },
              {
                icon: Award,
                title: 'Built for Impact',
                description:
                  'Every product, campaign, and touchpoint is designed to strengthen your brand and leave a lasting impression.',
                color: 'bg-teal-100 text-teal-600',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8`}>
                  <item.icon size={34} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-lg font-medium text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d3d73 0%, #1a5fa8 50%, #2a7fd4 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center animate-zoom-pulse"
          style={{ backgroundImage: `url(${banners.home})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            We don't just deliver products.
          </h2>
          <p className="text-2xl text-blue-200 font-light mb-12">
            We build promotional solutions that work.
          </p>

          <button
            onClick={() => onNavigate('services')}
            className="group inline-flex items-center gap-2 px-10 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:shadow-2xl hover:-translate-y-0.5"
          >
            See Our Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

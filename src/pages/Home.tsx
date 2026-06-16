import { ArrowRight, Award, Target, Zap } from 'lucide-react';
import bannerArtwork from '../assets/Banner_Artwork.png';
import Footer from '../components/Footer';
import { banners } from '../lib/bannerConfig';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Zoom-pulsing banner — swap banners.home to change the image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-pulse"
          style={{ backgroundImage: `url(${banners.home})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3d73]/85 via-[#0d3d73]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="mb-6">
             
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"  style={{ textShadow: "2px 2px 4px #243d7d" }}>
              Where ideas become{' '} 

              <span className="text-orange-400"  style={{ textShadow: "2px 2px 4px #243d7d" }}>impactful</span>{' '}
              products.
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed" style={{ textShadow: "2px 2px 4px #243d7d" }}>
              Over 20 years of global experience turning ideas into high-impact brand experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="group flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-400 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
          {/*
<button
  onClick={() => onNavigate('team')}
  className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#0d3d73] transition-all duration-300"
>
  Meet The Team
</button>
*/}

            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4" >About Us</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6" >
                We make brands{' '}
                <span className="text-[#1a5fa8]">impossible</span>{' '}
                to ignore.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Business Edge International (BEI) helps brands show up better, everywhere.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 20 years of global experience, we turn ideas into high-impact brand experiences across merch, apparel, print, digital, and experiential. From concept to execution, we handle every detail so your brand connects, stands out, and delivers real results.
              </p>
           {/*
<button
  onClick={() => onNavigate('team')}
  className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#0d3d73] transition-all duration-300"
>
  Meet The Team
</button>
*/}

            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={bannerArtwork} alt="BEI Brand Artwork" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-black">20+</div>
                <div className="text-sm font-medium mt-1">Years of Global Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-4xl font-extrabold text-gray-900">How We Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Strategy First',
                description: 'We start with your goals, audience, and brand. Everything we create is built to drive engagement and ROI.',
                color: 'bg-blue-50 text-[#1a5fa8]',
              },
              {
                icon: Zap,
                title: 'End-to-End Execution',
                description: 'From sourcing to delivery, we manage the entire process. On time, on budget, on brand.',
                color: 'bg-orange-50 text-orange-500',
              },
              {
                icon: Award,
                title: 'Built for Impact',
                description: 'Every product, campaign, and touchpoint is designed to strengthen your brand and leave a lasting impression.',
                color: 'bg-teal-50 text-teal-600',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d3d73 0%, #1a5fa8 50%, #2a7fd4 100%)' }}>
        <div className="absolute inset-0 opacity-10 bg-cover bg-center animate-zoom-pulse" style={{ backgroundImage: `url(${bannerArtwork})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-4">Our Approach</p>
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

import Footer from '../components/Footer';
import { banners } from '../lib/bannerConfig';

interface TeamProps {
  onNavigate: (page: string) => void;
}

const placeholderMembers = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: 'Team Member',
  role: 'Role / Title',
  bio: 'Bio and description coming soon. Photos and details will be provided.',
  photo: `https://images.pexels.com/photos/${[3778876, 2379004, 1181686, 3184291, 2182970, 1516680, 3184338, 2381069, 1181695][i]}/pexels-photo-${[3778876, 2379004, 1181686, 3184291, 2182970, 1516680, 3184338, 2381069, 1181695][i]}.jpeg?auto=compress&cs=tinysrgb&w=400`,
}));

export default function Team({ onNavigate }: TeamProps) {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(150deg, #f5f9ff 0%, #ffffff 50%, #fffaf5 100%)' }}>
      <style>{`
        @keyframes svcOrb1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-60px,40px); } }
        @keyframes svcOrb2 { 0%,100% { transform: translate(0,0); } 40% { transform: translate(50px,-50px); } }
        @keyframes svcOrb3 { 0%,100% { transform: translate(0,0); } 60% { transform: translate(-40px,60px); } }
      `}</style>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-zoom-pulse" style={{ backgroundImage: `url(${banners.team})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d73]/90 to-[#1a5fa8]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-4">Our Team</p>
          <h1
  className="text-5xl sm:text-6xl font-montserrat font-black text-white"
  style={{ textShadow: "2px 2px 4px #243d7d" }}
>
  The people behind the work.
</h1>

        </div>
      </section>

      {/* Team Grid — same dynamic background as Services */}
      <section className="relative py-24">
        {/* Floating orbs — identical to Services page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[700px] h-[700px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #1a5fa8 0%, transparent 70%)', top: '-20%', right: '-10%', animation: 'svcOrb1 20s ease-in-out infinite' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', bottom: '10%', left: '-5%', animation: 'svcOrb2 25s ease-in-out infinite' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #0d3d73 0%, transparent 70%)', top: '50%', left: '40%', animation: 'svcOrb3 30s ease-in-out infinite' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {placeholderMembers.map((member) => (
              <div key={member.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/80">
                <div className="relative overflow-hidden h-72">
                  <img src={member.photo} alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d73]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,61,115,0.06) 0%, rgba(249,115,22,0.05) 100%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to work with us?</h2>
          <p className="text-gray-600 mb-8">Explore our full range of services and see how BEI can elevate your brand.</p>
          <button onClick={() => onNavigate('services')}
            className="px-8 py-4 bg-[#1a5fa8] text-white font-bold rounded-xl hover:bg-[#154d8a] transition-all duration-300 shadow-md hover:shadow-lg">
            Explore Services
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

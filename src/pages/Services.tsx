import {
  ArrowRight,
  Box,
  Globe,
  Lightbulb,
  Package,
  Palette,
  Printer,
  Shirt,
  SignpostBig,
  Trophy,
  Users,
} from "lucide-react";

import Footer from "../components/Footer";
import { banners } from "../lib/bannerConfig";

// Importing your real images from src/assets
import AP_01 from "../assets/AP_01.png";
import AW_01 from "../assets/AW_01.png";
import BM_01 from "../assets/BM_01.png";
import CO_01 from "../assets/CO_01.png";
import CS_01 from "../assets/CS_01.png";
import EV_01 from "../assets/EV_01.jpg";
import GD_01 from "../assets/GD_01.png";
import PR_01 from "../assets/PR_01.png";
import SC_01 from "../assets/SC_01.png";

// Stock image for Website & Social Media
const SOCIAL_STOCK =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    id: 1,
    icon: Package,
    title: "Branded Merch",
    short: "Your brand belongs in people's hands.",
    description:
      "We create merch they'll actually use — and every time they do, they think of you.",
    photo: BM_01,
  },
  {
    id: 2,
    icon: Shirt,
    title: "Apparel & Team Uniforms",
    short: "Look unified. Look professional.",
    description:
      "Look like you mean business with custom apparel for every team member.",
    photo: AP_01,
  },
  {
    id: 3,
    icon: Trophy,
    title: "Awards & Trophies",
    short: "People remember how you made them feel.",
    description:
      "Custom recognition pieces that drive performance and spark conversations.",
    photo: AW_01,
  },
  {
    id: 4,
    icon: Printer,
    title: "Web & Offset Printing",
    short: "From 50 copies to 50,000.",
    description:
      "Crisp, clean, and built to impress — with specialty finishes available.",
    photo: PR_01,
  },
  {
    id: 5,
    icon: SignpostBig,
    title: "Signage & Displays",
    short: "Your one-stop shop for all signage needs.",
    description:
      "From interior signs to full event displays — design, permits, fabrication, installation.",
    photo: SC_01,
  },
  {
    id: 6,
    icon: Box,
    title: "Co-Packing & Kitting",
    short: "You focus on growing. We'll handle the boxes.",
    description:
      "Scalable assembly, bundling, and kitting from small batches to high volume.",
    photo: CO_01,
  },
  {
    id: 7,
    icon: Users,
    title: "Demos & Sampling Events",
    short: "Nothing sells like letting people experience it.",
    description:
      "In-store demos, sampling programs, pop-ups, and trained brand ambassadors.",
    photo: EV_01,
  },
  {
    id: 8,
    icon: Lightbulb,
    title: "Custom Solutions",
    short: "Got a big idea? Good. That's our favorite kind.",
    description:
      "End-to-end concept development and execution for one-of-a-kind campaigns.",
    photo: CS_01,
  },
  {
    id: 9,
    icon: Palette,
    title: "Graphic Design",
    short: "Design that does the talking.",
    description:
      "Logos, brand identity, marketing collateral, and guidelines that keep everything consistent.",
    photo: GD_01,
  },
  {
    id: 10,
    icon: Globe,
    title: "Website & Social Media Marketing",
    short: "Your online presence is working 24/7.",
    description:
      "Web design, social strategy, content management, and data-driven paid ads.",
    photo: SOCIAL_STOCK,
  },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[900px] h-[900px] rounded-full opacity-[0.12] blur-3xl animate-slowFloat"
        style={{
          background: "radial-gradient(circle, #1a5fa8 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.10] blur-3xl animate-slowFloatReverse"
        style={{
          background: "radial-gradient(circle, #4aa3ff 0%, transparent 70%)",
          bottom: "5%",
          left: "-10%",
        }}
      />
    </div>
  );
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(160deg, #eaf3ff 0%, #f5f9ff 40%, #dce9ff 100%)",
      }}
    >
      <style>{`
        @keyframes slowFloat {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-60px, 40px); }
        }
        @keyframes slowFloatReverse {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(60px, -40px); }
        }
      `}</style>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-pulse"
          style={{ backgroundImage: `url(${banners.services})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d73]/90 to-[#1a5fa8]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Services
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
            Everything your brand needs,
          </h1>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-400 mt-2">
            all in one place.
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24">
        <AnimatedBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigate(`service-${service.id}`)}
                className="group rounded-xl bg-white/80 backdrop-blur-sm border border-orange-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden"
              >
                {/* Top Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={service.photo}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#1a5fa8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-orange-500 font-semibold text-sm mb-3">
                    {service.short}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <span className="flex items-center gap-2 text-[#1a5fa8] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

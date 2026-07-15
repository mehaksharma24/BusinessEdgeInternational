// IMPORTS
import { ArrowLeft, ArrowRight, CheckCircle, Globe, Lightbulb, Package, Palette, Printer, Shirt, SignpostBig, Tag, Trophy, Users } from 'lucide-react';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import { banners } from '../lib/bannerConfig';


// IMAGE IMPORTS — BRANDED MERCH (31)
import BM_01 from '../assets/BM_01.png';
import BM_02 from '../assets/BM_02.png';
import BM_03 from '../assets/BM_03.png';
import BM_04 from '../assets/BM_04.png';
import BM_05 from '../assets/BM_05.png';
import BM_06 from '../assets/BM_06.png';
import BM_07 from '../assets/BM_07.png';
import BM_08 from '../assets/BM_08.png';
import BM_09 from '../assets/BM_09.png';
import BM_10 from '../assets/BM_10.png';
import BM_11 from '../assets/BM_11.png';
import BM_12 from '../assets/BM_12.png';
import BM_13 from '../assets/BM_13.png';
import BM_14 from '../assets/BM_14.png';
import BM_15 from '../assets/BM_15.png';
import BM_16 from '../assets/BM_16.png';
import BM_17 from '../assets/BM_17.png';
import BM_18 from '../assets/BM_18.png';

import BM_20 from '../assets/BM_20.png';
import BM_21 from '../assets/BM_21.png';
import BM_22 from '../assets/BM_22.png';
import BM_23 from '../assets/BM_23.png';
import BM_24 from '../assets/BM_24.png';
import BM_25 from '../assets/BM_25.png';
import BM_26 from '../assets/BM_26.png';
import BM_27 from '../assets/BM_27.png';

import BM_29 from '../assets/BM_29.png';
import BM_30 from '../assets/BM_30.png';
import BM_31 from '../assets/BM_31.png';

// IMAGE IMPORTS — APPAREL (15)
import AP_01 from '../assets/AP_01.png';
import AP_02 from '../assets/AP_02.png';
import AP_03 from '../assets/AP_03.png';
import AP_04 from '../assets/AP_04.png';
import AP_05 from '../assets/AP_05.png';
import AP_06 from '../assets/AP_06.png';
import AP_07 from '../assets/AP_07.png';
import AP_08 from '../assets/AP_08.png';
import AP_09 from '../assets/AP_09.png';
import AP_10 from '../assets/AP_10.png';
import AP_11 from '../assets/AP_11.png';
import AP_12 from '../assets/AP_12.png';
import AP_13 from '../assets/AP_13.png';
import AP_14 from '../assets/AP_14.png';
import AP_15 from '../assets/AP_15.png';

// IMAGE IMPORTS — AWARDS (11)
import AW_01 from '../assets/AW_01.png';
import AW_02 from '../assets/AW_02.png';
import AW_03 from '../assets/AW_03.png';
import AW_04 from '../assets/AW_04.png';
import AW_05 from '../assets/AW_05.png';
import AW_06 from '../assets/AW_06.png';
import AW_07 from '../assets/AW_07.png';
import AW_08 from '../assets/AW_08.png';
import AW_09 from '../assets/AW_09.png';
import AW_10 from '../assets/AW_10.png';
import AW_11 from '../assets/AW_11.png';

// IMAGE IMPORTS — PRINTING (15)
import PR_01 from '../assets/PR_01.png';
import PR_02 from '../assets/PR_02.png';
import PR_03 from '../assets/PR_03.png';
import PR_04 from '../assets/PR_04.png';
import PR_05 from '../assets/PR_05.png';
import PR_06 from '../assets/PR_06.png';
import PR_07 from '../assets/PR_07.png';
import PR_08 from '../assets/PR_08.png';
import PR_09 from '../assets/PR_09.png';
import PR_10 from '../assets/PR_10.png';
import PR_11 from '../assets/PR_11.png';
import PR_12 from '../assets/PR_12.png';
import PR_13 from '../assets/PR_13.png';
import PR_14 from '../assets/PR_14.png';
import PR_15 from '../assets/PR_15.png';

// IMAGE IMPORTS — SIGNAGE (15)
import SC_01 from '../assets/SC_01.png';
import SC_02 from '../assets/SC_02.png';
import SC_03 from '../assets/SC_03.png';
import SC_04 from '../assets/SC_04.png';
import SC_05 from '../assets/SC_05.png';
import SC_06 from '../assets/SC_06.png';
import SC_07 from '../assets/SC_07.png';
import SC_08 from '../assets/SC_08.png';
import SC_09 from '../assets/SC_09.png';
import SC_10 from '../assets/SC_10.png';
import SC_11 from '../assets/SC_11.png';
import SC_12 from '../assets/SC_12.png';
import SC_13 from '../assets/SC_13.png';
import SC_14 from '../assets/SC_14.png';
import SC_15 from '../assets/SC_15.png';

// IMAGE IMPORTS — CO-PACKING (5)
import CO_01 from '../assets/CO_01.png';
import CO_02 from '../assets/CO_02.png';
import CO_03 from '../assets/CO_03.png';
import CO_04 from '../assets/CO_04.png';
import CO_05 from '../assets/CO_05.png';

// IMAGE IMPORTS — DEMOS (13)
import EV_01 from '../assets/EV_01.jpg';
import EV_02 from '../assets/EV_02.jpg';
import EV_03 from '../assets/EV_03.jpg';
import EV_04 from '../assets/EV_04.jpg';
import EV_05 from '../assets/EV_05.jpg';
import EV_06 from '../assets/EV_06.jpg';
import EV_07 from '../assets/EV_07.jpg';
import EV_08 from '../assets/EV_08.jpg';
import EV_09 from '../assets/EV_09.jpg';
import EV_10 from '../assets/EV_10.jpg';
import EV_11 from '../assets/EV_11.jpg';
import EV_12 from '../assets/EV_12.jpg';
import EV_13 from '../assets/EV_13.jpg';

// IMAGE IMPORTS — CUSTOM SOLUTIONS (8)
import CS_01 from '../assets/CS_01.png';
import CS_02 from '../assets/CS_02.png';
import CS_03 from '../assets/CS_03.png';
import CS_04 from '../assets/CS_04.png';
import CS_05 from '../assets/CS_05.png';
import CS_06 from '../assets/CS_06.png';
import CS_07 from '../assets/CS_07.png';
import CS_08 from '../assets/CS_08.jpeg';

// IMAGE IMPORTS — GRAPHIC DESIGN (10)
import GD_01 from '../assets/GD_01.png';
import GD_02 from '../assets/GD_02.png';
import GD_03 from '../assets/GD_03.png';
import GD_04 from '../assets/GD_04.png';
import GD_05 from '../assets/GD_05.png';
import GD_06 from '../assets/GD_06.png';
import GD_07 from '../assets/GD_07.png';
import GD_08 from '../assets/GD_08.png';
import GD_09 from '../assets/GD_09.png';
import GD_10 from '../assets/GD_10.png';

// IMAGE ARRAYS
const brandedMerchImages = [
  BM_01, BM_02, BM_03, BM_04, BM_05, BM_06, BM_07, BM_08, BM_09, BM_10,
  BM_11, BM_12, BM_13, BM_14, BM_15, BM_16, BM_17, BM_18, BM_20,
  BM_21, BM_22, BM_23, BM_24, BM_25, BM_26, BM_27,  BM_29, BM_30, BM_31
];

const apparelImages = [
  AP_01, AP_02, AP_03, AP_04, AP_05, AP_06, AP_07, AP_08, AP_09, AP_10,
  AP_11, AP_12, AP_13, AP_14, AP_15
];

const awardsImages = [
  AW_01, AW_02, AW_03, AW_04, AW_05, AW_06, AW_07, AW_08, AW_09, AW_10, AW_11
];

const printingImages = [
  PR_01, PR_02, PR_03, PR_04, PR_05, PR_06, PR_07, PR_08, PR_09, PR_10,
  PR_11, PR_12, PR_13, PR_14, PR_15
];

const signageImages = [
  SC_01, SC_02, SC_03, SC_04, SC_05, SC_06, SC_07, SC_08, SC_09, SC_10,
  SC_11, SC_12, SC_13, SC_14, SC_15
];

const copackingImages = [
  CO_01, CO_02, CO_03, CO_04, CO_05
];

const demosImages = [
  EV_01, EV_02, EV_03, EV_04, EV_05, EV_06, EV_07, EV_08, EV_09, EV_10,
  EV_11, EV_12, EV_13
];

const customSolutionsImages = [
  CS_01, CS_02, CS_03, CS_04, CS_05, CS_06, CS_07, CS_08
];

const graphicDesignImages = [
  GD_01, GD_02, GD_03, GD_04, GD_05, GD_06, GD_07, GD_08, GD_09, GD_10
];

// SERVICE GALLERIES
const serviceGalleries: Record<number, string[]> = {
  1: brandedMerchImages,
  2: apparelImages,
  3: awardsImages,
  4: printingImages,
  5: signageImages,
  6: copackingImages,
  7: demosImages,
  8: customSolutionsImages,
  9: graphicDesignImages,
  10: [] // No images provided for Website & Social Media Marketing
};

// SERVICE DATA
const serviceData = [
  {
    id: 1,
    title: 'Branded Merch',
    tagline: "Your brand belongs in people's hands!",
    intro: "We create merch they'll actually use — and every time they do, they think of you.",
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Custom merch across hundreds of product categories.', link: 'https://products.thebiznessedge.com/', linkText: 'Click here for ideas.' },
      { text: 'Embroidery, screen printing, laser engraving, full color transfers & more.' },
      { text: 'We can brand anything!' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      "Physical items outlast any digital ad",
      "Your customers become your best brand ambassadors",
      "Great merch builds loyalty that money can't buy"
    ],
  },

  {
    id: 2,
    title: 'Apparel & Team Uniforms',
    tagline: 'Look unified. Look professional. Look like you mean business!',
    intro: 'Custom apparel that builds team pride and makes a sharp, unforgettable impression.',
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Custom shirts, polos, jackets, hoodies & full uniforms.', link: 'https://products.thebiznessedge.com/', linkText: 'Click here for ideas.' },
      { text: 'Embroidery, screen print & heat transfer decoration.' },
      { text: 'Sizing for every team member, consistent every time.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Uniforms build team pride and client confidence',
      'Quality apparel gets worn — putting your brand in more places',
      'A sharp team makes an unforgettable first impression'
    ],
  },

  {
    id: 3,
    title: 'Awards & Trophies',
    tagline: 'People remember how you made them feel. Make it count!',
    intro: 'Custom recognition pieces designed to drive performance and spark conversations.',
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Custom trophies, plaques, crystal awards & engraved pieces.', link: 'https://products.thebiznessedge.com/', linkText: 'Click here for ideas.' },
      { text: 'Corporate recognition, employee milestones & sports leagues.' },
      { text: 'Personalized design for any occasion.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Recognition drives performance and loyalty',
      'A great award gets displayed — and sparks conversations',
      'Custom beats generic. Every. Single. Time.'
    ],
  },

  {
    id: 4,
    title: 'Web & Offset Printing',
    tagline: "From 50 copies to 50,000 — crisp, clean, and built to impress!",
    intro: "Professional print materials that keep your brand in the room after you've left.",
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Business cards, brochures, flyers, postcards & catalogues.', link: 'https://products.thebiznessedge.com/', linkText: 'Click here for ideas.' },
      { text: 'Short-run digital and large-run offset printing.' },
      { text: 'Specialty finishes — gloss, matte, soft-touch, foil & spot UV.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Print gives customers something to hold onto',
      'Quality printing signals a credible, professional brand',
      "The right piece keeps you in the room after you've left"
    ],
  },

  {
    id: 5,
    title: 'Signage & Displays',
    tagline: 'BEI Sign Central — your one-stop shop for all your signage needs!',
    intro: 'We take care of everything from start to finish: design, permit drawings and applications, fabrication and installation.',
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Interior & Exterior Signage — Acrylic signs, PVC signs, LED channel letters, light boxes, pylon etc.' },
      { text: 'Retail & In-Store Displays — Digital, backlit, sidewalk, window graphics, in-store branding and vehicle wraps.' },
      { text: 'Event Signage & Displays — Backdrops, sampling booths, banners, modular, canopy tents, flags.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Great signage never clocks out',
      'Bold displays drive traffic and instant brand recognition',
      "Professional signage says you're here to stay"
    ],
    note: {
      text: 'Need large-format or specialized signage? Visit our BEI Sign Central page for more details.',
      link: 'https://beisigncentral.com/',
      linkText: 'BEI Sign Central'
    },
  },

  {
    id: 6,
    title: 'Co-Packing & Kitting',
    tagline: "You focus on growing. We'll handle the boxes!",
    intro: 'Scalable co-packing and kitting solutions from small batches to high volume.',
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Product assembly, bundling & custom kit building.' },
      { text: 'Labelling, bagging, boxing & shrink wrapping.' },
      { text: 'Scalable runs from small batches to high volume.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Outsourcing saves time, space & labour',
      'Professionally packed products sell better',
      'Scale up without the growing pains'
    ],
  },

  {
    id: 7,
    title: 'Demos & Sampling Events',
    tagline: 'Nothing sells like letting people experience it firsthand!',
    intro: 'In-store demos, sampling programs, and pop-up events with trained brand ambassadors.',
    offerTitle: 'What We Do',
    offers: [
      { text: 'In-store demos, sampling programs & pop-up events.' },
      { text: 'Trained brand ambassadors who represent you well.' },
      { text: 'Full event logistics & post-event reporting.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Sampling converts faster than any other tactic',
      'Face-to-face builds trust no ad can replicate',
      'Real feedback from real people is priceless'
    ],
  },

  {
    id: 8,
    title: 'Custom Solutions',
    tagline: "Got a big idea that doesn't fit a box? Good. That's our favorite kind!",
    intro: 'End-to-end concept development and execution for one-of-a-kind products, packaging, and activations.',
    offerTitle: 'What We Do',
    offers: [
      { text: 'End-to-end concept development & execution.' },
      { text: 'Multi-service campaigns combining print, merch, events & more.' },
      { text: 'One-of-a-kind products, packaging & activations.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'One partner. Less hassle. Better results.',
      "Creative solutions your competitors haven't thought of yet",
      "We don't just execute — we invest in your success"
    ],
  },

  {
    id: 9,
    title: 'Graphic Design',
    tagline: 'Design that does the talking before you say a word!',
    intro: 'Strong visuals sell before anyone reads a single word.',
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Logos, brand identity & full design packages.' },
      { text: 'Marketing collateral, social graphics & packaging.' },
      { text: 'Brand guidelines to keep everything consistent.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'Great design elevates how your brand is perceived instantly',
      'Consistency builds recognition and trust over time',
      'Strong visuals sell — before anyone reads a single word'
    ],
  },

  {
    id: 10,
    title: 'Website & Social Media Marketing',
    tagline: 'Your online presence is working 24/7. Make sure it\'s working for you!',
    intro: 'Data-driven digital marketing that converts visitors into leads around the clock.',
    offerTitle: 'What We Offer',
    offers: [
      { text: 'Website design, development & optimization.' },
      { text: 'Social media strategy, content & management.' },
      { text: 'Paid ads on Google, Meta & beyond.' },
    ],
    whyTitle: 'Why It Works',
    whys: [
      'A great website converts visitors into leads around the clock',
      'Smart social keeps your brand relevant and visible',
      'Data-driven marketing means every dollar works harder'
    ],
  },
];

// COMPONENT
export default function ServiceDetail({ serviceId, onNavigate }) {
  const service = serviceData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <button
            onClick={() => onNavigate('services')}
            className="text-[#1a5fa8] font-semibold hover:underline"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const gallery = serviceGalleries[service.id] ?? [];
  const prevId = service.id > 1 ? service.id - 1 : null;
  const nextId = service.id < serviceData.length ? service.id + 1 : null;

  return (
    <div className="min-h-screen bg-white">

<section className="relative pt-40 pb-28 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center animate-zoom-pulse"
    style={{ backgroundImage: `url(${banners.services})` }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d73]/90 to-[#1a5fa8]/80" />

  {/* Floating Blur Orbs */}
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

  {/* Text */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
      {service.title}
      
    </h1>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes slowFloat {
      0%, 100% { transform: translate(0,0); }
      50% { transform: translate(-60px, 40px); }
    }

    @keyframes slowFloatReverse {
      0%, 100% { transform: translate(0,0); }
      50% { transform: translate(60px, -40px); }
    }

    @keyframes zoom-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .animate-zoom-pulse {
      animation: zoom-pulse 12s ease-in-out infinite;
    }

    .animate-slowFloat {
      animation: slowFloat 18s ease-in-out infinite;
    }

    .animate-slowFloatReverse {
      animation: slowFloatReverse 22s ease-in-out infinite;
    }
  `}</style>

</section>

{/* Service Quick Links */}
<div className="w-full py-4 flex items-center justify-center gap-5 overflow-x-auto whitespace-nowrap">
  {[
    { id: 1, icon: Tag, label: "Merch" },
    { id: 2, icon: Shirt, label: "Uniforms" },
    { id: 3, icon: Trophy, label: "Trophies" },
    { id: 4, icon: Printer, label: "Offset Printing" },
    { id: 5, icon: SignpostBig, label: "Signage" },
    { id: 6, icon: Package, label: "Kitting" },
    { id: 7, icon: Users, label: "Sampling Events" },
    { id: 8, icon: Lightbulb, label: "Custom" },
    { id: 9, icon: Palette, label: "Graphic Design" },
    { id: 10, icon: Globe, label: "Websites & Media" },
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => onNavigate(`service-${item.id}`)}
      className="flex flex-col items-center group w-[90px] transition-all duration-300"
    >
      <div className="
        w-14 h-14 rounded-full border-2 border-orange-500 
        flex items-center justify-center text-orange-600 
        transition-all duration-300
        group-hover:bg-orange-50 
        group-hover:scale-125 
        group-hover:shadow-lg 
        group-hover:shadow-orange-300/40 
        group-hover:-translate-y-1
      ">
        <item.icon size={22} strokeWidth={2.6} />
      </div>

      <span className="
        text-[11px] font-semibold mt-2 text-gray-800 
        group-hover:text-orange-600 
        transition-all duration-300
        group-hover:scale-110
      ">
        {item.label}
      </span>
    </button>
  ))}
</div>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-2 sm:px-4 lg:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT COLUMN */}
            <div className="space-y-10">

              {/* INTRO */}
              <div className="fade-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <div
  className="fade-up text-xl font-bold"
  style={{ animationDelay: "0.4s" }}
>
  {service.tagline}
</div>

                  {service.intro}
                  
                </p>

                {/* OFFERS */}
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 fade-up" style={{ animationDelay: "0.55s" }}>
                  {service.offerTitle}
                </h2>

                <ul className="space-y-4">
                  {service.offers.map((offer, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 fade-up"
                      style={{ animationDelay: `${0.65 + i * 0.15}s` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#1a5fa8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#1a5fa8]" />
                      </div>

                      <p className="text-gray-700">
                        {offer.text}{' '}
                        {offer.link && (
                          <a
                            href={offer.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 font-semibold hover:underline"
                          >
                            {offer.linkText}
                          </a>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>

                {service.note && (
  <div
    className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100 fade-up flex items-center gap-4"
    style={{ animationDelay: "1.2s" }}
  >
    {service.id === 5 && (
      <img
        src="/Sign.png"
        alt="BEI Sign Central Logo"
        className="w-20 h-20 object-contain flex-shrink-0"
      />
    )}

    <p className="text-gray-700 text-sm leading-snug">
      {service.note.text.replace(service.note.linkText, '')}{' '}
      <a
        href={service.note.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1a5fa8] font-semibold hover:underline"
      >
        {service.note.linkText}
      </a>
    </p>
  </div>
)}


              </div>

              {/* WHY IT WORKS */}
              <div
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-7 border border-blue-100 fade-up"
                style={{ animationDelay: "1.3s" }}
              >
                <h2 className="text-xl font-extrabold text-gray-900 mb-5">
                  {service.whyTitle}
                </h2>

                <ul className="space-y-4">
                  {service.whys.map((why, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 fade-up"
                      style={{ animationDelay: `${1.4 + i * 0.15}s` }}
                    >
                      <CheckCircle size={20} className="text-[#1a5fa8] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium text-sm">{why}</p>
                    </li>
                    
                  ))}
                </ul>

                
              </div>
              
              {/* CTA BOX */}
              <div
                className="p-6 bg-orange-50 rounded-2xl border border-orange-100 fade-up"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-orange-700 font-semibold text-sm mb-2">
                  Ready to get started?
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  Browse our full product catalogue to see all available options.
                </p>

                <a
                  href="https://products.thebiznessedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-semibold text-sm rounded-lg hover:bg-orange-400 transition-colors"
                >
                  Browse Products <ArrowRight size={14} />
                </a>
              </div>
            </div>

            

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6">

              {/* GALLERY */}
              {gallery.length > 0 && (
                <div className="w-full fade-up" style={{ animationDelay: "0.6s" }}>
                  <ImageGallery images={gallery} title="Gallery" />
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section
        className="py-12 border-t border-gray-100 fade-up"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* PREVIOUS SERVICE */}
          {prevId ? (
            <button
              onClick={() => onNavigate(`service-${prevId}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#1a5fa8] font-semibold transition-colors"
            >
              <ArrowLeft size={16} />
              {serviceData[prevId - 1].title}
            </button>
          ) : (
            <div />
          )}

          {/* ALL SERVICES */}
          <button
            onClick={() => onNavigate('services')}
            className="px-5 py-2 text-sm font-semibold text-[#1a5fa8] border border-[#1a5fa8] rounded-lg hover:bg-[#1a5fa8] hover:text-white transition-all"
          >
            All Services
          </button>

          {/* NEXT SERVICE */}
          {nextId ? (
            <button
              onClick={() => onNavigate(`service-${nextId}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#1a5fa8] font-semibold transition-colors"
            >
              {serviceData[nextId - 1].title}
              <ArrowRight size={16} />
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}



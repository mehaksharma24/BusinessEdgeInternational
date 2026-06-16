import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoTagline from '../assets/beilogo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Branded Merch',
    'Apparel & Team Uniforms',
    'Awards & Trophies',
    'Web & Offset Printing',
    'Signage & Displays',
    'Co-Packing & Kitting',
    'Demos & Sampling Events',
    'Custom Solutions',
    'Graphic Design',
    'Website & Social Media Marketing',
  ];

  const navLinks = [
    { label: 'Home', page: 'home' },
    //{ label: 'Our Team', page: 'team' },
    { label: 'Services', page: 'services' },
    { label: 'Clients', page: 'clients' },
    { label: 'Search', page: 'search' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => onNavigate('home')} className="flex-shrink-0">
            <img src={logoTagline} alt="BEI Logo" className="h-16 w-auto" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.page === 'services' ? (
                <div key={link.page} className="relative">
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => onNavigate('services')}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === 'services' || currentPage.startsWith('service-')
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    Services
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-1"
                    >
                      {services.map((service, i) => (
                        <button
                          key={i}
                          onClick={() => { onNavigate(`service-${i + 1}`); setServicesOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === link.page
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
            <button
              onClick={() => onNavigate('login')}
              className="ml-4 px-5 py-2 bg-[#00000] text-white text-sm font-semibold rounded-lg hover:bg-[black] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          <div className="max-w-7xl mx-auto px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => { onNavigate(link.page); setMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('login'); setMenuOpen(false); }}
              className="w-full mt-2 px-4 py-3 bg-[#1a5fa8] text-white text-sm font-semibold rounded-lg hover:bg-[#154d8a] transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

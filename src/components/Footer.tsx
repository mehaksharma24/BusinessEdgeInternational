import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-gray-200 text-base leading-relaxed font-medium mb-7">
              Over 20 years of global experience turning ideas into high-impact brand experiences across merch, apparel, print, digital, and experiential.
            </p>

            {/* SOCIAL ICONS (RESTORED ORIGINAL SVGs) */}
            <div className="flex gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/business-edge-international"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1a5fa8] flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/businessedgeintl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10z"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17" cy="7" r="1"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/businessedgeinternational"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-7">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Services', page: 'services' },
                { label: 'Clients', page: 'clients' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-200 hover:text-white text-base font-medium flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                    {link.label}
                  </button>
                </li>
              ))}

              <li>
                <a className="text-gray-200 hover:text-white text-base font-medium flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                  Product Catalogue
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </li>

              <li>
                <a className="text-gray-200 hover:text-white text-base font-medium flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                  BEI Sign Central
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-7">
              Contact
            </h4>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <Phone size={16} className="text-orange-400 mt-1" />
                <div>
                  <p className="text-white text-base font-medium">
                    (905) 864-8065
                  </p>
                  <p className="text-gray-400 text-sm">
                    Mon – Fri, 9am – 5pm EST
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail size={16} className="text-orange-400 mt-1" />
                <p className="text-white text-base font-medium break-all">
                  sales@thebiznessedge.com
                </p>
              </li>

              <li className="flex gap-3">
                <MapPin size={16} className="text-orange-400 mt-1" />
                <address className="text-gray-300 text-base not-italic leading-relaxed">
                  4141 Sladeview Cres Unit 11<br />
                  Mississauga, ON L5L 5T1<br />
                  Canada
                </address>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-7">
              Find Us
            </h4>

            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="BEI Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.998!2d-79.74494!3d43.51898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b44b8f0c9b0c7%3A0x7c3b6c2e6e0f!2s4141%20Sladeview%20Cres%20Unit%2011%2C%20Mississauga%2C%20ON%20L5L%205T1!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Business Edge International
          </p>

          <div className="text-gray-500 text-sm flex gap-4">
            <span>Mississauga, Canada</span>
            <span>•</span>
            <span>Global since 2004</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
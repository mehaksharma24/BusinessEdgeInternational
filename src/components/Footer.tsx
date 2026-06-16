import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Over 20 years of global experience turning ideas into high-impact brand experiences across merch, apparel, print, digital, and experiential.
            </p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/business-edge-international"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1a5fa8] flex items-center justify-center transition-colors duration-200"
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
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/businessedgeinternational"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
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
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                //{ label: 'Our Team', page: 'team' },
                { label: 'Services', page: 'services' },
                { label: 'Clients', page: 'clients' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover:bg-orange-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}

              <li>
                <a
                  href="https://products.thebiznessedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover:bg-orange-400 transition-colors" />
                  Product Catalogue
                  <ExternalLink size={11} className="opacity-50" />
                </a>
              </li>

              <li>
                <a
                  href="https://beisigncentral.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover:bg-orange-400 transition-colors" />
                  BEI Sign Central
                  <ExternalLink size={11} className="opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+19058648065" className="text-gray-300 hover:text-white text-sm transition-colors block">
                    (905) 864‑8065
                  </a>
                  <span className="text-gray-500 text-xs">Mon – Fri, 9am – 5pm EST</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={15} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:sales@thebiznessedge.com" className="text-gray-300 hover:text-white text-sm transition-colors break-all">
                  sales@thebiznessedge.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  4141 Sladeview Cres., Unit #11,<br />
                  Mississauga, ON L5L 5T1<br />
                  Canada
                </address>
              </li>
            </ul>
          </div>

          {/* Map embed */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Find Us</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="BEI Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.998!2d-79.74494!3d43.51898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b44b8f0c9b0c7%3A0x7c3b6c2e6e0f!2s4141%20Sladeview%20Cres%20Unit%2011%2C%20Mississauga%2C%20ON%20L5L%205T1!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.google.com/?q=4141+Sladeview+Cres+Unit+11+Mississauga+ON+L5L+5T1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-orange-400 transition-colors"
            >
              <ExternalLink size={11} />
              Open in Google Maps
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Business Edge International. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-gray-500">
            <span>Mississauga, Ontario, Canada</span>
            <span>&middot;</span>
            <span>Serving clients globally since 2004</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

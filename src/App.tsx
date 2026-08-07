import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Team from './pages/Team';

// Old-website URLs still indexed by search engines, mapped to their new pages
const LEGACY_PAGES: Record<string, string> = {
  'what-we-do': 'services',
  'whatwedo': 'services',
  'our-services': 'services',
  'our-clients': 'clients',
  'ourclients': 'clients',
  'testimonials': 'clients',
  'lets-talk': 'contact',
  'letstalk': 'contact',
  'contact-us': 'contact',
  'contactus': 'contact',
  'who-we-are': 'team',
  'whoweare': 'team',
  'about-us': 'team',
  'aboutus': 'team',
  'about': 'team',
  'why-us': 'home',
  'whyus': 'home',
  'index': 'home',
};

const KNOWN_PAGES = ['home', 'team', 'services', 'contact', 'clients', 'login', 'search'];

function pageFromPath(pathname: string): string {
  const slug = pathname
    .toLowerCase()
    .replace(/\/+$/, '')
    .replace(/^\//, '')
    .replace(/\.html?$/, '');
  if (!slug) return 'home';
  if (LEGACY_PAGES[slug]) return LEGACY_PAGES[slug];
  if (KNOWN_PAGES.includes(slug) || /^service-\d+$/.test(slug)) return slug;
  return 'home';
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    () => pageFromPath(window.location.pathname)
  );

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  const navigate = (page: string) => {
    window.history.pushState({ page }, '', `/${page}`);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePop = () => {
      setCurrentPage(pageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  // Clean up legacy/unknown URLs so the address bar shows the new page path
  useEffect(() => {
    if (currentPage === 'search' || currentPage === 'login') return;
    const expected = `/${currentPage}`;
    const path = window.location.pathname;
    const isHome = currentPage === 'home' && (path === '/' || path === '/home');
    if (!isHome && path !== expected) {
      window.history.replaceState({ page: currentPage }, '', expected);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 'search') {
      window.open('https://products.thebiznessedge.com/', '_blank', 'noopener,noreferrer');
      setCurrentPage('home');
    }
    if (currentPage === 'login') {
      window.location.href = 'https://products.thebiznessedge.com/signin.htm';
    }
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'home') return <Home onNavigate={navigate} />;
    if (currentPage === 'team') return <Team onNavigate={navigate} />;
    if (currentPage === 'services') return <Services onNavigate={navigate} />;
    if (currentPage === 'contact') return <Contact onNavigate={navigate} />;
    if (currentPage === 'clients') return <Clients onNavigate={navigate} />;

    if (currentPage.startsWith('service-')) {
      const id = parseInt(currentPage.replace('service-', ''), 10);
      return <ServiceDetail serviceId={id} onNavigate={navigate} />;
    }

    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="font-sans antialiased">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      {renderPage()}
    </div>
  );
}

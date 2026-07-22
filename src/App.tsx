import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Team from './pages/Team';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    () => window.location.pathname.slice(1) || 'home'
  );

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  const navigate = (page: string) => {
    window.history.pushState({ page }, '', `/${page}`);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePop = () => {
      setCurrentPage(window.location.pathname.slice(1) || 'home');
    };

    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

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

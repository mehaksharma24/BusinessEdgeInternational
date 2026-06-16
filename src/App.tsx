import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Clients from './pages/Clients';
import Login from './pages/Login';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentPage === 'search') {
      window.open('https://products.thebiznessedge.com/', '_blank', 'noopener,noreferrer');
      setCurrentPage('home');
    }
  }, [currentPage]);

  const hideNavbar = currentPage === 'login';

  const renderPage = () => {
    if (currentPage === 'home') return <Home onNavigate={navigate} />;
    if (currentPage === 'team') return <Team onNavigate={navigate} />;
    if (currentPage === 'services') return <Services onNavigate={navigate} />;
    if (currentPage === 'clients') return <Clients onNavigate={navigate} />;
    if (currentPage === 'login') return <Login onNavigate={navigate} />;
    if (currentPage.startsWith('service-')) {
      const id = parseInt(currentPage.replace('service-', ''), 10);
      return <ServiceDetail serviceId={id} onNavigate={navigate} />;
    }
    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="font-sans antialiased">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!hideNavbar && <Navbar currentPage={currentPage} onNavigate={navigate} />}
      {renderPage()}
    </div>
  );
}

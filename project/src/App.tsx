import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import MenuPage from './components/MenuPage';
import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Always scroll to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-tb-bg text-tb-text">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {currentPage === 'home' && (
          <>
              <div className="bg-white">
                <Hero setCurrentPage={setCurrentPage} />
              </div>
              <div className="bg-tb-bg">
                <About />
              </div>
              <div className="bg-white">
                <Services setCurrentPage={setCurrentPage} />
              </div>
              <div className="bg-tb-bg">
                <Gallery />
              </div>
              <div className="bg-white">
                <Contact />
              </div>
          </>
        )}
        {currentPage === 'services' && <ServicesPage/>}
        {currentPage === 'menu' && <MenuPage />}
  {currentPage === 'gallery' && <GalleryPage />}
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;

import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import herceg_logo from '../assets/herceg_logo.png';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ setCurrentPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Hide header on scroll down, show on scroll up
  const [showHeader, setShowHeader] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string, section?: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    if (section && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 transition-transform duration-300 backdrop-blur-md"
      style={{
        background: 'linear-gradient(90deg, #f2e5d2 80%, #e6d3b3 100%)',
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
        borderBottom: '2px solid #b89b6a',
        boxShadow: '0 2px 16px 0 rgba(192,154,108,0.10)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-3 items-center py-2">
          {/* Left Navigation */}
          <nav className="hidden lg:flex justify-end space-x-6">
            {['home', 'services', 'menu', 'gallery'].map((key) => (
              <button
                key={key}
                onClick={() =>
                  key === 'gallery'
                    ? setCurrentPage('gallery')
                    : handleNavigation(key)
                }
                className="transition-all duration-200 font-semibold text-lg text-[#5a4a36] hover:underline hover:underline-offset-4 px-4 py-2 rounded-md bg-transparent focus:outline-none"
                style={{ letterSpacing: '0.04em' }}
              >
                {t(key)}
              </button>
            ))}
          </nav>

          {/* Logo Centered */}
          <div className="flex justify-center items-center">
            <img
              src={herceg_logo}
              alt="Herceg Ketering Logo"
              className="h-36 w-36 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ minWidth: 120 }}
              onClick={() => handleNavigation('home', 'home')}
            />
          </div>

          {/* Right Navigation & Controls */}
          {/* Absolutely position on mobile with a slight inset from the edge */}
          <div className="flex items-center space-x-2 lg:space-x-6 absolute right-2 top-1/2 -translate-y-1/2 lg:static lg:transform-none">
            <nav className="hidden lg:flex flex-row space-x-6">
              <button
                onClick={() => handleNavigation('home', 'about')}
                className="transition-all duration-200 font-semibold text-lg text-[#5a4a36] hover:underline hover:underline-offset-4 px-4 py-2 rounded-md bg-transparent focus:outline-none"
                style={{ letterSpacing: '0.04em' }}
              >
                {t('about')}
              </button>
              <button
                onClick={() => handleNavigation('home', 'contact')}
                className="transition-all duration-200 font-semibold text-lg text-[#5a4a36] hover:underline hover:underline-offset-4 px-4 py-2 rounded-md bg-transparent focus:outline-none"
                style={{ letterSpacing: '0.04em' }}
              >
                {t('contact')}
              </button>
            </nav>
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-[#e6d3b3] rounded px-2 py-1 shadow-sm border border-[#c09a6c]/30">
              <Globe className="w-5 h-5 text-[#c09a6c]" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'sr' | 'ru')}
                className="bg-transparent text-[#5a4a36] font-semibold border-none text-base focus:outline-none"
              >
                <option value="sr">СР</option>
                <option value="ru">РУ</option>
              </select>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#6a5f58] hover:text-[#c09a6c] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#f2e5d2] border-t border-[#e0c9a0] absolute left-0 right-0 top-full shadow-xl z-50">
            <nav className="py-4 space-y-2">
              {['home', 'services', 'menu', 'gallery', 'about', 'contact'].map((key) => (
                <button
                  key={key}
                  onClick={() =>
                    key === 'gallery'
                      ? handleNavigation('gallery')
                      : key === 'about'
                        ? handleNavigation('home', 'about')
                        : key === 'contact'
                          ? handleNavigation('home', 'contact')
                          : handleNavigation(key)
                  }
                  className="block w-full text-left px-6 py-3 text-xl text-[#6a5f58] font-semibold hover:text-[#c09a6c] hover:bg-[#e6d3b3]/60 transition-all duration-200 rounded-lg"
                  style={{ letterSpacing: '0.04em' }}
                >
                  {t(key)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import hercegLogo from '../assets/herceg_logo.png';

export default function Footer({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const { t } = useLanguage();

  return (
    <footer className="bg-tb-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="text-center lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center mb-4">
              <img
                src={hercegLogo}
                alt="Herceg Ketering Logo"
                className="w-28 h-28 drop-shadow-xl"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
              Ваш партнер за незабораване кулинарске доживљаје
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-tb-accent">Брзе везе</h4>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')} className="block w-max mx-auto text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('home')}
              </button>
              <button onClick={() => setCurrentPage('services')} className="block w-max mx-auto text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('services')}
              </button>
              <button onClick={() => setCurrentPage('gallery')} className="block w-max mx-auto text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('gallery')}
              </button>
              
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-tb-accent">Пратите нас</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/herceg_ketering_ns?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-tb-accent/20 p-3 rounded-full hover:bg-tb-accent transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-tb-accent group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 <a href="https://core-tech.solutions/" target="_blank" rel="noopener noreferrer" className="underline hover:text-tb-accent">CTS</a>. Сва права су задржана.
          </p>
        </div>
      </div>
    </footer>
  );
}

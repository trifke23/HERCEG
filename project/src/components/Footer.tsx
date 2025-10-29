import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import hercegLogo from '../assets/herceg_logo.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-tb-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="text-center sm:text-left lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <img
                src={hercegLogo}
                alt="Herceg Ketering Logo"
                className="w-28 h-28 drop-shadow-xl"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Ваш партнер за незабораване кулинарске доживљаје
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4 text-tb-accent">Брзе везе</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('home')}
              </a>
              <a href="#services" className="block text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('services')}
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('gallery')}
              </a>
              <a href="#about" className="block text-gray-300 hover:text-tb-accent transition-colors duration-300">
                {t('about')}
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg font-semibold mb-4 text-tb-accent">Пратите нас</h4>
            <div className="flex justify-center sm:justify-end space-x-4">
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
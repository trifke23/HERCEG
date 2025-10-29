// ...existing code...
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import '../index.css';
import backgroundImg from '../assets/background.jpg';


interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

export default function Hero(props: HeroProps) {
  const { t } = useLanguage();


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay and blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm"></div>
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, #000 100%)'
        }}></div>
      </div>

      {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-6xl sm:text-8xl font-bold text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Lora', serif", letterSpacing: '0.04em' }}
        >
          ХЕРЦЕГ
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 text-3xl sm:text-5xl font-bold tracking-widest text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.12em' }}
        >
          КЕТЕРИНГ
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8 text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
        >
          {t('heroSubtitle')}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          onClick={() => props.setCurrentPage && props.setCurrentPage('menu')}
          className="inline-flex items-center space-x-2 bg-[#c09a6c] hover:bg-[#a07c4c] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl mt-[5%]"
        >
          <span>Погледај мени</span>
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-black/30">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

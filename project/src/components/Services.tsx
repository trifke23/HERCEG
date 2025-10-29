import { Building2, Heart, Users } from 'lucide-react';
import poslovni from '../assets/poslovni.jpg';
import school from '../assets/school.jpg';
import { useLanguage } from '../contexts/LanguageContext';

// Dodajemo prop za promenu stranice
import React from 'react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('corporateTitle'),
      description: t('corporateDesc'),
      image: poslovni
    },
    {
      icon: Heart,
      title: 'Кетеринг за прославе',
      description: t('weddingDesc'),
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Дечија школа кувања',
  description: 'Креативне радионице где деца уз игру и забаву уче да припремају укусна јела и уживају у својим кулинарским делима.',
      image: school
    }
  ];

  return (
  <section id="services" className="py-20 bg-tb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-tb-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-tb-accent p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-tb-text mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-tb-text/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Dugme ispod predloga */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center space-x-2 bg-[#c09a6c] hover:bg-[#a07c4c] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>Све услуге</span>
            {/* Ikonica kao u Hero sekciji */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
          
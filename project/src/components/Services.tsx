import React from 'react';
import { Baby, Church, PartyPopper } from 'lucide-react';
import kidsbd from '../assets/kidsbd.jpg';
import slave from '../assets/slave.jpg';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const { language } = useLanguage();

  const srServices = [
    {
      icon: Baby,
      title: 'Дечији кетеринг',
      description:
        'Шарене залије и креативни залогаји претварају дечију прославу у представу за сва чула.',
      image: kidsbd
    },
    {
      icon: Church,
      title: 'Кетеринг за славу',
      description:
        'Традиционални укуси, отмена декорација и избор мрсних или посних пакета гарантују славску трпезу о којој гости причају.',
      image: slave
    },
    {
      icon: PartyPopper,
      title: 'Кетеринг за прославе и догађаје',
      description:
        'Елегантни канапеи и персонализовани менији претварају сваки догађај у незаборавну причу.',
      image:
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const ruServices = [
    {
      icon: Baby,
      title: 'Детский кейтеринг',
      description:
        'Яркие блюда и веселая подача превращают детский праздник в гастрономическое приключение.',
      image: kidsbd
    },
    {
      icon: Church,
      title: 'Кейтеринг для славы',
      description:
        'Домашние рецепты, тонкая сервировка и выбор постных или скоромных пакетов создают атмосферу семейного торжества.',
      image: slave
    },
    {
      icon: PartyPopper,
      title: 'Кейтеринг для праздников и событий',
      description:
        'Авторские канапе и продуманное меню делают любое событие вкусным и запоминающимся.',
      image:
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const services = language === 'ru' ? ruServices : srServices;

  return (
  <section id="services" className="py-20 bg-tb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-4">
            {language === 'ru' ? 'Пакет услуг' : 'Пакет услуге'}
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
            <span>{language === 'ru' ? 'Подробнее о пакетах' : 'Детаљније о пакетима'}</span>
            {/* Ikonica kao u Hero sekciji */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
          
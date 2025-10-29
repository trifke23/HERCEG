import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sr' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sr: {
    // Header
    home: 'Почетна',
    services: 'Услуге',
    menu: 'Мени',
    gallery: 'Галерија',
    about: 'О нама',
    contact: 'Контакт',
    
    // Hero
    heroTitle: 'Премијум кетеринг услуге',
    heroSubtitle: 'Створимо незабораван кулинарски доживљај за ваше посебне тренутке',
    heroButton: 'Резервишите сада',
    
    // Services
    servicesTitle: 'Наше услуге',
    corporateTitle: 'Корпоративни кетеринг',
    corporateDesc: 'Професионалне услуге за пословне догађаје, конференције и семинаре',
    weddingTitle: 'Венчања',
    weddingDesc: 'Савршен мени за ваш најважнији дан са персонализованим приступом',
    eventTitle: 'Приватни догађаји',
    eventDesc: 'Рођендани, прославе и породична окупљања са посебним менијем',
    
    // Gallery
    galleryTitle: 'Галерија јела',
    
    // About
    aboutTitle: 'О нама',
    aboutText: 'Са више од 15 година искуства у кетеринг индустрији, наш тим страсних кувара ствара изузетне кулинарске доживљаје. Користимо само најквалитетније састојке и традиционалне рецепте комбиноване са модерним техникама.',
    
    // Contact
    contactTitle: 'Контактирајте нас',
    nameLabel: 'Име',
    emailLabel: 'Е-пошта',
    phoneLabel: 'Телефон',
    messageLabel: 'Порука',
    sendButton: 'Пошаљи поруку',
    
    // Footer
    footerText: '© 2025 Премијум Кетеринг. Сва права задржана.',
  },
  ru: {
    // Header
    home: 'Главная',
    services: 'Услуги',
    menu: 'Меню',
    gallery: 'Галерея',
    about: 'О нас',
    contact: 'Контакты',
    
    // Hero
    heroTitle: 'Премиум кейтеринг услуги',
    heroSubtitle: 'Создадим незабываемый кулинарный опыт для ваших особенных моментов',
    heroButton: 'Забронировать сейчас',
    
    // Services
    servicesTitle: 'Наши услуги',
    corporateTitle: 'Корпоративный кейтеринг',
    corporateDesc: 'Профессиональные услуги для деловых мероприятий, конференций и семинаров',
    weddingTitle: 'Свадьбы',
    weddingDesc: 'Идеальное меню для вашего самого важного дня с персонализированным подходом',
    eventTitle: 'Частные мероприятия',
    eventDesc: 'Дни рождения, празднования и семейные встречи со специальным меню',
    
    // Gallery
    galleryTitle: 'Галерея блюд',
    
    // About
    aboutTitle: 'О нас',
    aboutText: 'С более чем 15-летним опытом в кейтеринг индустрии, наша команда страстных поваров создает исключительные кулинарные впечатления. Мы используем только самые качественные ингредиенты и традиционные рецепты в сочетании с современными техниками.',
    
    // Contact
    contactTitle: 'Свяжитесь с нами',
    nameLabel: 'Имя',
    emailLabel: 'Электронная почта',
    phoneLabel: 'Телефон',
    messageLabel: 'Сообщение',
    sendButton: 'Отправить сообщение',
    
    // Footer
    footerText: '© 2025 Премиум Кейтеринг. Все права защищены.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('sr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['sr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
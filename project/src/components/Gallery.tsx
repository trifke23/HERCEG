
import { useLanguage } from '../contexts/LanguageContext';
import gl1 from '../assets/gl1.jpeg';
import gl2 from '../assets/gl2.jpeg';
import gl13 from '../assets/gl13.jpg';
import gl14 from '../assets/gl14.png';
import gl5 from '../assets/gl5.jpeg';
import gl6 from '../assets/gl6.jpeg';

export default function Gallery() {
  const { t } = useLanguage();

  const galleryImages = [gl1, gl2, gl13, gl14, gl5, gl6];

  return (
  <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-4">
            {t('galleryTitle')}
          </h2>
          <div className="w-24 h-1 bg-tb-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <img 
                src={image} 
                alt={`Галерија ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
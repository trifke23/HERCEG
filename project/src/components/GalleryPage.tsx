import gl25 from '../assets/gl25.jpg';
import gl9 from '../assets/gl9.jpg';
import gl13 from '../assets/gl13.jpg';
import gl15 from '../assets/gl15.jpg';
import gl1 from '../assets/gl1.jpeg';
import gl2 from '../assets/gl2.jpeg';
import gl3 from '../assets/gl3.jpeg';
import gl4 from '../assets/gl4.jpeg';
import gl5 from '../assets/gl5.jpeg';
import gl6 from '../assets/gl6.jpeg';
import gl7 from '../assets/gl7.jpeg';
import gl8 from '../assets/gl8.jpeg';
import gl10 from '../assets/gl10.jpeg';
import gl11 from '../assets/gl11.jpeg';
import gl12 from '../assets/gl12.jpeg';
import gl14 from '../assets/gl14.png';

const images = [
  gl1, gl2, gl3, gl4, gl5, gl6, gl7, gl8, gl9, gl10, gl11, gl12, gl13, gl14, gl15
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-4">
            Галерија јела
          </h2>
          <div className="w-24 h-1 bg-tb-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <img src={img} alt={`Јело ${idx + 1}`} className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
          <div className="gallery-image">
            <img src={gl25} alt="Galerija" className="rounded-xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

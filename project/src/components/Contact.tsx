import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventType: '',
    message: '',
    phone: '',
  });
  const [dateType, setDateType] = useState<'text' | 'date'>('text');
  const [timeType, setTimeType] = useState<'text' | 'time'>('text');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-tb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-24 h-1 bg-tb-accent mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Contact Form */}
          <div
            className="bg-white rounded-3xl shadow-2xl border border-tb-accent/20 p-10 flex flex-col justify-between w-full lg:w-1/2"
            style={{ minHeight: '480px', height: 'auto' }}
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Име и презиме - пуна ширина */}
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Име и презиме"
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              />

              {/* Телефон и Е‑пошта - један испод другог, пуна ширина */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Телефон"
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Е‑пошта"
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              />

              <select
                name="numPeople"
                onChange={handleChange}
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Број особа</option>
                <option value="1-10">1-10</option>
                <option value="11-30">11-30</option>
                <option value="31-50">31-50</option>
                <option value="51+">51+</option>
              </select>

              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              >
                <option value="">Врста догађаја</option>
                <option value="Рођендан">Рођендан</option>
                <option value="Пословни догађај">Пословни догађај</option>
                <option value="Свечаност">Свечаност</option>
                <option value="Породична прослава">Породична прослава</option>
                <option value="Wine & Cheese">Wine & Cheese</option>
                <option value="Остало">Остало</option>
              </select>

              <input
                type={dateType}
                name="date"
                onFocus={() => setDateType('date')}
                onBlur={(e) => { if (!e.currentTarget.value) setDateType('text'); }}
                onChange={handleChange}
                placeholder="Датум"
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              />
              <input
                type={timeType}
                name="time"
                onFocus={() => setTimeType('time')}
                onBlur={(e) => { if (!e.currentTarget.value) setTimeType('text'); }}
                onChange={handleChange}
                placeholder="Време"
                lang="sr-RS"
                step="60"
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Напишите поруку"
                rows={4}
                className="col-span-2 px-4 py-3 border border-tb-accent/40 rounded-xl bg-tb-bg/40 focus:outline-none focus:ring-2 focus:ring-tb-accent focus:border-transparent transition-all duration-300 resize-none"
                required
              />

              <button
                type="submit"
                className="col-span-2 w-full bg-gradient-to-r from-tb-accent to-tb-accent-dark hover:from-tb-accent-dark hover:to-tb-accent text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {t('sendButton')}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col w-full lg:w-1/2 space-y-6 sm:space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-2xl border border-tb-accent/20 p-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-tb-accent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tb-text text-sm sm:text-base">Адреса</h3>
                    <p className="text-tb-text/70 text-sm sm:text-base">Heroja Pinkija 41, Нови Сад, Србија</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-tb-accent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tb-text text-sm sm:text-base">Телефон</h3>
                    <p className="text-tb-text/70 text-sm sm:text-base">+381 65 447 7616</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-tb-accent p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tb-text text-sm sm:text-base">Е‑пошта</h3>
                    <p className="text-tb-text/70 text-sm sm:text-base">herceg.ketering.ns@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-tb-accent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tb-text text-sm sm:text-base">Радно време</h3>
                    <p className="text-tb-text/70 text-sm sm:text-base">Понедељак–Недеља: 08:00–22:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 flex flex-col">
              <div className="flex-1 min-h-[400px] bg-gray-100 flex items-center justify-center w-full rounded-3xl border border-tb-accent/20">
                <iframe
                  src="https://www.google.com/maps?q=Heroja+Pinkija+41,+Novi+Sad,+Serbia&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


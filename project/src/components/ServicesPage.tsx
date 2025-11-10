import { Baby, Church, PartyPopper } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import kidsbd from '../assets/kidsbd.jpg';
import slave from '../assets/slave.jpg';
// import school from '../assets/school.jpg';
// import wine from '../assets/wine.jpg';
// import poslovni from '../assets/poslovni.jpg';

export default function ServicesPage() {
  useLanguage();

  // Full list with all services (including hidden ones)
  const fullServices = [
    {
      icon: Baby,
      title: 'Дечији кетеринг',
      subtitle: 'Забава на тањиру',
      description: 'Замислите рођендан или прославу где деца не само да уживају, него једва чекају да пробају сваки залогај. Наш дечији кетеринг је пун боја, занимљивих облика и укуса који ће малишане одушевити, а родитеље ослободити стреса око припреме хране.',
      packages: [
        {
          number: 1,
          description: 'Мини бургери и мини пице у забавним облицима'
        },
        {
          number: 2,
          description: 'Шарени ражњићи са воћем, мини сендвичи, слатке палачинке'
        },
        {
          number: 3,
          description: 'Комбиновани мени за веће прославе, укључује све из пакета 1 и 2.'
        }
      ],
      image: kidsbd
    },
    
    {
      icon: Church,
      title: 'Кетеринг за славу',
      subtitle: 'Традиција на вашем столу',
      description: 'Слава је посебна прилика и заслужује пажљиво осмишљену трпезу. Наш кетеринг за славе доноси спој традиције и елеганције – храна је припремљена по домаћим рецептима, уз савршену декорацију која ствара топлу атмосферу.',
      packages: [
        {
          number: 1,
          description: 'Сухомеснати и сирни плато, пите и проје, ситни колачи.'
        },
        {
          number: 2,
          description: 'Сарма, печење, руске и шопске салате.'
        },
        {
          number: 3,
          description: 'Комплетна традиционална трпеза за велике славе.'
        }
      ],
      image: slave // koristi lokalnu sliku slave.jpg
    },
    {
      icon: PartyPopper,
      title: 'Кетеринг за прославе и догађаје',
      subtitle: 'Храна која ствара успомене',
      description: 'Без обзира да ли славите рођендан, годишњицу, свадбу или приватну забаву, ми правимо мени који се памти. Храна је аранжирана тако да привлачи погледе и позива на дегустацију, а сваки залогај прича своју причу.',
      packages: [
        {
          number: 1,
          description: 'Канапеи, мини пице, кроасани.'
        },
        {
          number: 2,
          description: 'Ражњићи са пилетином и поврћем, десерт бар.'
        },
        {
          number: 3,
          description: 'Селекција вина и коктела, комплетан мени за велике догађаје.'
        }
      ],
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
  ];
  // Filtered list for rendering (exclude hidden cards)
  const services = fullServices.filter(s =>
    s.title !== 'Wine & Cheese' &&
    s.title !== 'Дечија школа кувања' &&
    s.title !== 'Кетеринг за фирме'
  );

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-4">
            Наше услуге
          </h1>
          <div className="w-24 h-1 bg-tb-accent mx-auto mb-6"></div>
          <p className="text-lg text-tb-text/80 max-w-3xl mx-auto">
            Откријте наш широк спектар кетеринг услуга прилагођених свим врстама догађаја
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-stretch gap-8"
            >
              <div
                className="bg-white rounded-2xl shadow-xl border-2 w-full flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch min-h-[620px] lg:min-h-[560px]"
                style={{ borderColor: '#c09a6c' }}
              >
                {/* Leva kolona: tekst (max pola kartice) */}
                <div className="flex flex-col p-8 justify-start w-full lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-tb-accent p-4 rounded-full">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-tb-text">
                        {service.title}
                      </h2>
                      <p className="text-tb-accent font-medium text-lg">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-tb-text/80 leading-relaxed mb-6 text-base sm:text-lg">
                    {service.description}
                  </p>
                  {/* Paketi ispod teksta, full width */}
                  <div className="mt-8 w-full hidden">
                    <h3 className="text-xl font-semibold text-tb-text mb-4">Пакети:</h3>
                    <div className="flex flex-row gap-6 w-full">
                      {service.packages.map((pkg, pkgIdx) => (
                        <div
                          key={pkgIdx}
                          className="bg-white rounded-lg border border-tb-accent p-6 shadow flex-1 min-w-0 flex flex-col items-center justify-center"
                        >
                          <div className="text-3xl font-bold text-tb-accent mb-2">{pkg.number}</div>
                          <p className="text-tb-text/80 text-base text-center">{pkg.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Desna kolona: slika (od pola kartice nadesno) */}
                <div className="w-full lg:w-1/2 flex items-start justify-end p-8 lg:pt-8 lg:pr-12 self-start overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl object-cover w-full h-44 lg:h-[336px]"
                  />
                </div>
                {/* Paketi: puna širina ispod levo+desno */}
                <div className="w-full px-8 pb-8 -mt-6 lg:-mt-8">
                  <h3 className="text-xl font-semibold text-tb-text mb-4">Пакети:</h3>
                  <div className="flex flex-col lg:flex-row gap-6 w-full">
                    {service.packages.map((pkg, pkgIdx) => (
                      <div key={pkgIdx} className="bg-tb-bg text-tb-text rounded-lg border border-tb-accent/40 p-8 shadow flex-1 min-w-0 min-h-[240px] flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-tb-accent mb-3">{pkg.number}</div>
                        <p className="text-tb-text/80 text-lg text-center">{pkg.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



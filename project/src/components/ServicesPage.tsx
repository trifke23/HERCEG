import { Baby, Building2, Church, PartyPopper, Wine, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import kidsbd from '../assets/kidsbd.jpg';
import slave from '../assets/slave.jpg';
import school from '../assets/school.jpg';
import wine from '../assets/wine.jpg';
import poslovni from '../assets/poslovni.jpg';

export default function ServicesPage() {
  useLanguage();

  const services = [
    {
      icon: Baby,
      title: 'Дечији кетеринг',
      subtitle: 'Забава на тањиру',
      description: 'Замислите рођендан или прославу где деца не само да уживају, него једва чекају да пробају сваки залогај. Наш дечији кетеринг је пун боја, занимљивих облика и укуса који ће малишане одушевити, а родитеље ослободити стреса око припреме хране.',
      menu: [
        'Мини бургери и мини пице у забавним облицима',
        'Шарени ражњићи са воћем (јагода, банана, киви)',
        'Мини сендвичи са пилетином и сиром у облику срца/звездице',
        'Слатке палачинке са кремом и воћем',
        'Смути у бојама дуге'
      ],
      image: kidsbd
    },
    {
      icon: Building2,
      title: 'Кетеринг за фирме',
      subtitle: 'Укус који подиже продуктивност',
      description: 'Било да је у питању пословни доручак, пауза за кафу или гала коктел, наш кетеринг за фирме доноси укус, стил и професионалност. Храну припремамо тако да буде практична за послуживање, а опет незаборавна по укусу – јер знамо да добар залогај инспирише и најбољи радни састанак.',
      menu: [
        'Канапеи са лососом и крем сиром',
        'Мини кифлице пуњене пршутом и сиром',
        'Врап са пилетином, салатом и сосом од јогурта',
        'Панакота у чашицама',
        'Кафа, чај и свеже цеђени сокови'
      ],
      image: poslovni
    },
    {
      icon: Church,
      title: 'Кетеринг за славу',
      subtitle: 'Традиција на вашем столу',
      description: 'Слава је посебна прилика и заслужује пажљиво осмишљену трпезу. Наш кетеринг за славе доноси спој традиције и елеганције – храна је припремљена по домаћим рецептима, уз савршену декорацију која ствара топлу атмосферу.',
      menu: [
        'Сухомеснати и сирни плато (пршут, кулен, качкаваљ)',
        'Пите и проје са сиром',
        'Сарма са месом',
        'Печење (прасетина или јагњетина)',
        'Руска салата и шопска салата',
        'Ситни колачи и торта по избору'
      ],
      image: slave // koristi lokalnu sliku slave.jpg
    },
    {
      icon: PartyPopper,
      title: 'Кетеринг за прославе и догађаје',
      subtitle: 'Храна која ствара успомене',
      description: 'Без обзира да ли славите рођендан, годишњицу, свадбу или приватну забаву, ми правимо мени који се памти. Храна је аранжирана тако да привлачи погледе и позива на дегустацију, а сваки залогај прича своју причу.',
      menu: [
        'Канапеи са различитим надевима (сир, лосос, кулен)',
        'Мини пице и кроасани',
        'Ражњићи са пилетином и поврћем',
        'Десерт бар (чоколадни мафини, мини чизникејк, воћне корпице)',
        'Селекција вина и коктела'
      ],
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Wine,
      title: 'Wine & Cheese',
      subtitle: 'Вечери за праве хедонисте',
      description: 'За љубитеље вина и сира нудимо ексклузивно искуство дегустације. Наше "wine & cheese" вечери комбинују пажљиво одабрана вина са савршеним сиревима и пратећим залогајима – јер права чаролија настаје када се укуси споје.',
      menu: [
        'Комбинација тврдих и меких сирева (гауда, бри, горгонзола)',
        'Домаћи хлеб и крекери са семенкама',
        'Маслине, сушено грожђе, ораси, бадеми',
        'Мед и џем од смокве',
        'Црна и бела вина из домаћих винарија'
      ],
      image: wine
    },
    {
      icon: GraduationCap,
      title: 'Дечија школа кувања',
      subtitle: 'Мали мајстори укуса',
      description: 'Претворите дечију прославу у забавно кулинарско искуство! Наши кувари воде радионицу где малишани уче да праве једноставна и укусна јела, а на крају уживају у ономе што су сами припремили. Идеално за рођендане, школе и вртиће.',
      menu: [
        'Пица у облику срца или звездице',
        'Воћни ражњићи са чоколадним преливом',
        'Мини сендвичи са поврћем и сиром',
        'Декорисање колачића шареним преливима',
        'Смути од банане и јагоде'
      ],
      image: school
    }
  ];

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
              {/* Content & Image in white box with border */}
              <div className="flex-1 bg-white rounded-2xl shadow-xl border-2"
                   style={{ borderColor: '#c09a6c' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="p-8">
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
                    
                    <div className="bg-tb-bg rounded-xl p-6 shadow mb-6">
                      <h3 className="text-xl font-semibold text-tb-text mb-4">Предлог менија:</h3>
                      <ul className="space-y-2">
                        {service.menu.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-tb-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-tb-text/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Uklonjeno dugme "Затражи понуду" */}
                  </div>
                  {/* Image */}
                  <div className="flex items-center justify-center p-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tb-accent/20 to-transparent"></div>
                    </div>
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
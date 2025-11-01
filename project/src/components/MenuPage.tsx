
import gl18 from '../assets/gl18.jpeg';
import gl31 from '../assets/gl31.jpg';
import gl22 from '../assets/gl22.jpg';
import gl24 from '../assets/gl24.jpg';
import gl21 from '../assets/gl21.jpg';
import gl23 from '../assets/gl23.jpg';
import gl20 from '../assets/gl20.jpg';
import gl19 from '../assets/gl19.jpeg';
import gl28 from '../assets/gl28.jpg';
import gl26 from '../assets/gl26.jpg';

const sectionImages = [
	gl18, // kiflice
	gl31,   // rolati
	gl22,   // pite
	gl24,  // mini sendviči
	gl21,   // tortilje
	gl23,  // ciz casa
	gl20,  // ostali slani program
	gl19,  // slatki program
	gl28,  // slavski program
	gl26,  // ciz torta 
];

const menuData = [
	{
		title: 'КИФЛИЦЕ',
		items: [
			{ name: 'Празне', price: '1000 РСД/кг' },
			{ name: 'Сир', price: '1100 РСД/кг' },
			{ name: 'Шунка сир', price: '1200 РСД/кг' },
			{ name: 'Кулен сир', price: '1300 РСД/кг' },
			{ name: 'Са буткицом', price: '1400 РСД/кг' },
			{ name: 'Са џемом', price: '1100 РСД/кг' },
		],
	},
	{
		title: 'РОЛАТИ',
		items: [
			{ name: 'Класични (жути)', price: '1500 РСД/кг' },
			{ name: 'Спанаћ (зелени)', price: '1500 РСД/кг' },
			{ name: 'Ајвар (црвени)', price: '1500 РСД/кг' },
		],
	},
	{
		title: 'ПИТЕ',
		items: [
			{ name: 'Сир', price: '1300 РСД/кг' },
			{ name: 'Кромпир', price: '1300 РСД/кг' },
			{ name: 'Месо', price: '1400 РСД/кг' },
			{ name: 'Пиринач', price: '1300 РСД/кг' },
			{ name: 'Печурке', price: '1400 РСД/кг' },
		],
		note: 'Могућност и са хељдиним корама (доплата 100 РСД/кг)'
	},
	{
		title: 'МИНИ СЕНДВИЧИ',
		items: [
			{ name: 'Класик (шунка сир)', price: '1600 РСД/кг' },
			{ name: 'Кулен сир', price: '1700 РСД/кг' },
			{ name: 'Похована пилетина', price: '1900 РСД/кг' },
			{ name: 'Мини бургер', price: '1900 РСД/кг' },
		],
	},
	{
		title: 'ТОРТИЉЕ',
		items: [
			{ name: 'Руска', price: '1600 РСД/кг' },
			{ name: 'Класик (шунка, трапист, кукуруз)', price: '1600 РСД/кг' },
			{ name: 'Пилећа', price: '1800 РСД/кг' },
			{ name: 'Туна', price: '1800 РСД/кг' },
		],
	},
	{
		title: 'САЛАТЕ',
		items: [
			{ name: 'Руска', price: '1300 РСД/кг' },
			{ name: 'Мимоза', price: '1400 РСД/кг' },
			{ name: 'Пилећа', price: '1500 РСД/кг' },
			{ name: 'Туна', price: '1500 РСД/кг' },
		],
	},
	{
		title: 'ОСТАЛИ СЛАНИ ПРОГРАМ',
		items: [
			{ name: 'Царска пита', price: '1200 РСД/кг' },
			{ name: 'Пројице', price: '1100 РСД/кг' },
			{ name: 'Мини пице', price: '1300 РСД/кг' },
			{ name: 'Пица ролат', price: '1400 РСД/кг' },
			{ name: 'Слана торта', price: '2300 РСД/кг' },
			{ name: 'Такитоси', price: '2300 РСД/кг' },
			{ name: 'Канапеи', price: '1800 РСД/кг' },
		],
	},
	{
		title: 'СЛАВСКИ ПРОГРАМ',
		items: [
			{ name: 'Славски колач (око 2кг)', price: '1800 РСД/ком' },
			{ name: 'Славско жито / кољиво (0,5кг-1кг)', price: '500 РСД/ком' },
			{ name: 'Сарма (минимум 10ком)', price: '150 РСД/ком' },
			{ name: 'Пребранац', price: '1200 РСД/кг' },
			{ name: 'Овал мезе - основни (1,5 кг)', price: '2500 РСД/ком' },
			{ name: 'Овал мезе - премијум', price: '3500 РСД/ком' },
			{ name: 'Овал мезе - састав по вашој жељи', price: 'на упит' },
		],
		
	},
	{
		title: 'ПОСНИ ПРОГРАМ',
		items: [
			{ name: 'Пита са кромпиром', price: '1300 РСД/ком' },
			{ name: 'Пита са пиринчем', price: '1300 РСД/ком' },
			{ name: 'Пита са печуркама', price: '1300 РСД/ком' },
			{ name: 'Посне кифлице', price: '1000 РСД/ком' },
			{ name: 'Посни мини сендвичи', price: '1700 РСД/ком' },
			{ name: 'Тортиља туна', price: '1800 РСД/ком' },
			{ name: 'Посна руска салата', price: '1400 РСД/ком' },
			{ name: 'Пребранац', price: '1200 РСД/ком' },
			{ name: 'Посна сарма (минимум 10ком)', price: '150 РСД/ком' },
		],
	},
	{
		title: 'СЛАТКИ ПРОГРАМ',
		subtitle: 'Чиз кејк у чаши',
		items: [
			{ name: 'Малина', price: '350 РСД/чаша' },
			{ name: 'Боровница', price: '350 РСД/чаша' },
			{ name: 'Белгијска чоколада', price: '350 РСД/чаша' },
			{ name: 'Орео', price: '350 РСД/чаша' },
			{ name: 'Рафаело', price: '350 РСД/чаша' },
			{ name: 'Нутела', price: '350 РСД/чаша' },
			{ name: 'Пистаћи', price: '400 РСД/чаша' },
			{ name: 'Пакет 20ком 5 укуса по жељи', price: '6000 РСД/чаша' },
		],
		note: 'Минимална количина 10ком (могућа комбинација укуса), за поруџбине 20+ попуст од 10%'
	},
	{
		title: 'Чиз кејк торта',
		items: [
			{ name: 'Малина', price: '1800 РСД/чаша' },
			{ name: 'Боровница', price: '1800 РСД/чаша' },
			{ name: 'Белгијска чоколада', price: '1800 РСД/чаша' },
			{ name: 'Орео', price: '1800 РСД/чаша' },
			{ name: 'Рафаело', price: '1800 РСД/чаша' },
			{ name: 'Нутела', price: '1800 РСД/чаша' },
			{ name: 'Пистаћи', price: '2000 РСД/чаша' },
		],
		note: 'За торте испод 2кг цена износи 2200 РСД/кг. Торте могу бити округле и четвртасте, до 4кг'
	},
	{
		title: 'ОСТАЛИ СЛАТКИ ПРОГРАМ',
		items: [
			{ name: 'Торта Маковњача', price: '1500 РСД/чаша' },
			{ name: 'Пита бундевара', price: '1300 РСД/чаша' },
			{ name: 'Принцес крофне- 20ком', price: '2000 РСД' },
			{ name: 'Кифлице са џемом', price: '1000 РСД/чаша' },
		],
	}
];

function MenuPage() {
	return (
		<div className="bg-white min-h-screen w-full font-sans text-tb-text pt-24 pb-10 px-2">
			<div className="max-w-4xl mx-auto mb-12">
				<h1 className="text-5xl font-extrabold tracking-[0.02em] text-tb-text mb-2 uppercase text-center">МЕНИ</h1>
				<div className="w-24 h-1 bg-tb-accent mx-auto mb-4 rounded-full"></div>
				<div className="text-tb-text text-lg max-w-xl mx-auto mb-2 text-center opacity-80">
					Наш јеловник открива аутентичне укусе Херцеговине – од богатих мезета до незаборавних десерта.
				</div>
			</div>
			<div className="flex flex-col gap-12 max-w-5xl mx-auto">
				{menuData.map((section, idx) => (
					<div key={section.title} className="relative bg-white rounded-2xl border border-tb-accent shadow-lg flex flex-col md:flex-row items-stretch overflow-hidden min-h-[340px]">
						{/* Left: Text */}
						<div className="flex-1 flex flex-col justify-center p-8 min-h-0">
              <div className="w-full">
                <h2 className="text-3xl font-extrabold tracking-widest text-tb-text uppercase leading-tight mb-1 text-left">{section.title}</h2>
                <div className="w-20 h-1 bg-tb-accent rounded-full mb-6 ml-0"></div>
                {section.subtitle && <div className="text-tb-accent text-lg font-semibold mb-4 text-left">{section.subtitle}</div>}
              </div>
			<div className="flex flex-1 items-center justify-center w-full">
				<div className="bg-white rounded-xl shadow-md border border-tb-accent/30 p-0 mb-2 w-full flex flex-col items-center">
                  <ul className="divide-y divide-tb-accent-light w-full">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between px-6 py-3 transition-colors hover:bg-tb-bg/70">
                        <span className="tracking-wide text-base font-medium text-tb-text">{item.name}</span>
                        <span className="text-tb-accent-dark text-base font-bold whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {section.note && <div className="mt-2 text-xs text-tb-accent italic w-full text-left">{section.note}</div>}
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center bg-tb-bg p-0 m-0 min-h-0">
              <div className="w-full h-full aspect-video flex items-center justify-center">
                <img src={sectionImages[idx % sectionImages.length]} alt={section.title} className="w-full h-full object-cover rounded-r-xl rounded-l-none" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-base italic text-tb-accent mt-16 mb-10 space-y-2 px-4">
        <p>*Сервирање у варијанти шведски сто или тацне у складу са договором</p>
        <p>*У случају специфичних захтева могућ договор и проширење понуде</p>
      </div>
    </div>
	);
}

export default MenuPage;

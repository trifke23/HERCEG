
import gl18 from '../assets/gl18.jpeg';
import gl5 from '../assets/gl5.jpeg';
import gl13 from '../assets/gl13.jpg';
import gl9 from '../assets/gl9.jpg';
import gl17 from '../assets/gl17.jpg';
import gl19 from '../assets/gl19.jpeg';

const sectionImages = [
	gl18, // kiflice
	gl5,   // rolati
	gl5,   // pite
	gl13,  // mini sendviči
	gl9,   // tortilje
	gl17,  // ostali slani program
	gl19,  // slatki program
];

const menuData = [
	{
		title: 'КИФЛИЦЕ',
		items: [
			{ name: 'Празне', price: '1000 RSD/kg' },
			{ name: 'Шунка сир', price: '1200 RSD/kg' },
			{ name: 'Кулен сир', price: '1300 RSD/kg' },
		],
	},
	{
		title: 'РОЛАТИ',
		items: [
			{ name: 'Класични (жути)', price: '1500RSD/kg' },
			{ name: 'Спанаћ (зелени)', price: '1500RSD/kg' },
			{ name: 'Ајвар (црвени)', price: '1500RSD/kg' },
		],
	},
	{
		title: 'ПИТЕ',
		items: [
			{ name: 'Сир', price: '1300RSD/kg' },
			{ name: 'Кромпир (посна или мрсна)', price: '1300RSD/kg' },
			{ name: 'Месо', price: '1400RSD/kg' },
		],
	},
	{
		title: 'МИНИ СЕНДВИЧИ',
		items: [
			{ name: 'Класик (шунка сир)', price: '1600 RSD/kg' },
			{ name: 'Кулен сир', price: '1700 RSD/kg' },
			{ name: 'Похована пилетина', price: '1900 RSD/kg' },
		],
	},
	{
		title: 'ТОРТИЉЕ',
		items: [
			{ name: 'Руска', price: '1600RSD/kg' },
			{ name: 'Пилећа', price: '1800 RSD/kg' },
		],
	},
	{
		title: 'САЛАТЕ',
		items: [
			{ name: 'Руска салата', price: '1300RSD/kg' },
			{ name: 'Мимоза', price: '1400 RSD/kg' },
			{ name: 'Пилећа', price: '1500 RSD/kg' },
		],
	},
	{
		title: 'ОСТАЛИ СЛАНИ ПРОГРАМ',
		items: [
			{ name: 'Царска пита', price: '1200 RSD/kg' },
			{ name: 'Пројице', price: '1100 RSD/kg' },
			{ name: 'Мини пице', price: '1300 RSD/kg' },
			{ name: 'Пица ролат', price: '1400 RSD/kg' },
			{ name: 'Слана торта', price: '2300 RSD/kg' },
			{ name: 'Такитоси', price: '2300 RSD/kg' },
			{ name: 'Канапеи', price: '1800RSD/kg' },
		],
	},
	{
		title: 'СЛАТКИ ПРОГРАМ',
		subtitle: '*Cheesecake',
		items: [
			{ name: 'Малина', price: '350 RSD/чаша' },
			{ name: 'Боровница', price: '350 RSD/чаша' },
			{ name: 'Белгијска чоколада', price: '350 RSD/чаша' },
			{ name: 'Орео', price: '350 RSD/чаша' },
			{ name: 'Рафаело', price: '350 RSD/чаша' },
			{ name: 'Нутела', price: '350 RSD/чаша' },
			{ name: 'Пистаћи', price: '400RSD/чаша' },
		],
		note: 'Минимална количина 10ком, за поруџбине 20+ попуст од 10%'
	},
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
                <div className="bg-white rounded-xl shadow-md border border-tb-accent/30 p-0 mb-2 overflow-hidden w-full max-w-xl flex flex-col items-center">
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

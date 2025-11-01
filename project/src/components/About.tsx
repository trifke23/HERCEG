
import onamaImg from '../assets/onama.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tb-text mb-6">
              О нама
            </h2>
            <div className="w-24 h-1 bg-tb-accent mb-8"></div>
            <p className="text-base sm:text-lg text-tb-text/80 leading-relaxed mb-8">
              Настали смо из љубави према традицији, са жељом да сваки догађај, било пословни или породични, добије душу кроз укус, мирис и визуелну елеганцију.<br /><br />
              Наша филозофија је једноставна: аутентичност у сваком залогају, професионализам у сваком детаљу. Од ручно бираних састојака до пажљиво дизајнираних менија и паковања, сваки елемент је промишљен да пробуди емоцију, сећање и поштовање према домаћем.<br /><br />
              Иза Херцег Кетеринга стоји тим који поштује и негује традицију. Ми не правимо компромисе када је у питању квалитет, естетика и услуга. Било да припремамо славску трпезу, коктел за фирму или доручак за креативни тим — наш приступ је исти: достојанствено, укусно, са стилом.<br /><br />
              Добродошли у свет где се традиција не чува само у рецептима, већ у начину на који се храна сервира, прича преноси и гост поштује.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={onamaImg}
                alt="О нама"
                className="w-full h-[28rem] sm:h-[32rem] lg:h-[40rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tb-accent/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-tb-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tb-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
import signupIcon from '../assets/user-icon.svg';
import uploadIcon from '../assets/upload.svg';
import accessIcon from '../assets/access.svg';

const cards = [
  { src: signupIcon, alt: 'Sign up icon', label: 'Sign up' },
  { src: uploadIcon, alt: 'Upload icon', label: 'Upload' },
  { src: accessIcon, alt: 'Access icon', label: 'Access' },
];

const EasySteps = () => {
  return (
    <main className="w-full bg-[#222222] flex items-center justify-center
      py-10 lg:py-0 lg:h-[480px]">

      <div className="w-full max-w-[1192px] px-4 sm:px-8 lg:px-0
        flex flex-col justify-center
        lg:h-[530px] lg:relative">

        {/*  Заголовок  */}
        <div className="lg:absolute lg:top-0 lg:left-0 lg:w-[966px] lg:h-[141px]
          mb-8 lg:mb-0">

          <p className="text-[#F1FF7C] font-normal leading-[1.1] m-0
            text-[36px] sm:text-[48px] lg:text-[64px]
            lg:absolute lg:top-0 lg:left-0">
            It's easy!
          </p>

          <p className="text-white font-normal leading-[1.3] m-0
            text-[16px] sm:text-[22px] lg:text-[32px]
            mt-3 sm:mt-4 lg:mt-0
            lg:absolute lg:top-[98px] lg:left-0 lg:whitespace-nowrap">
            Your documents are organized, secure and always available.
          </p>

        </div>

        {/*  Карточки */}
        <div className="
          flex flex-col items-center gap-6
          sm:flex-row sm:justify-center sm:items-center sm:gap-4
          lg:absolute lg:top-[201px] lg:left-0 lg:w-full lg:h-[255px]
          lg:flex-row lg:justify-between lg:gap-0">

          {cards.map((card, i) => (
            <div key={card.label} className="flex flex-row sm:flex-row lg:contents items-center gap-4 lg:gap-0">

              {/* Карточка */}
              <div className="
                bg-[#44434E] rounded-[50px] shadow-[0px_8px_5px_rgba(0,0,0,0.5)]
                flex flex-col items-center justify-center
                w-[160px] h-[185px]
                sm:w-[180px] sm:h-[210px]
                lg:w-[223px] lg:h-[255px] lg:relative">

                <div className="flex flex-col items-center
                  lg:absolute lg:top-[35px] lg:left-[46px]">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="block
                      w-[80px] h-[80px]
                      sm:w-[100px] sm:h-[100px]
                      lg:w-[125px] lg:h-[125px]"
                  />
                  <span className="text-white font-normal
                    text-[16px] sm:text-[20px] lg:text-[24px]
                    mt-4 sm:mt-5 lg:mt-[32px]">
                    {card.label}
                  </span>
                </div>
              </div>

              {/* Стрелка между карточками */}
              {i < cards.length - 1 && (
                <>
                  {/* Горизонтальная */}
                  <svg
                    className="hidden sm:block lg:block flex-shrink-0
                      w-[60px] sm:w-[80px] lg:w-[120px]"
                    height="24"
                    viewBox="0 0 120 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0" y1="12" x2="108" y2="12" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                    <polyline points="96,4 108,12 96,20" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  {/* Вертикальная */}
                  <svg
                    className="block sm:hidden flex-shrink-0"
                    width="24"
                    height="60"
                    viewBox="0 0 24 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" y1="0" x2="12" y2="48" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                    <polyline points="4,36 12,48 20,36" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}

            </div>
          ))}

        </div>

      </div>
    </main>
  );
};

export default EasySteps;
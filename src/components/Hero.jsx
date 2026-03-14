import backPic from '../assets/backpic.svg';
import manFace from '../assets/man-face.svg';

const Hero = () => {
  return (
    <main className="w-full bg-[#222222] relative flex items-start justify-center min-h-[400px] lg:h-[560px] overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 flex items-start justify-between relative">

        {/* Левая часть */}
        <div className="flex flex-col w-full lg:w-[470px] pt-[40px] lg:pt-[70px] z-10 pb-10 lg:pb-0">

          {/* Заголовок */}
          <p className="text-white font-normal m-0 p-0 text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[83px] break-words w-full lg:w-[478px]">
            All your important documents - in one place
          </p>

          {/* Подзаголовок */}
          <p className="text-white font-normal text-[18px] md:text-[20px] lg:text-[24px] leading-snug lg:leading-none mt-[16px] lg:mt-[12px] w-full lg:w-[466px]">
            Secure. Simple. Available online 24/7.
          </p>

          {/*  КНОПКА  */}
          <div className="
            group flex items-center justify-start relative cursor-pointer
            w-[220px] h-[60px] lg:w-[272px] lg:h-[75px] mt-[32px] lg:mt-[24px] rounded-[50px] pl-[6px] box-border
            border-2 border-[#F1FF7C]
            bg-transparent
            transition-all duration-300 ease-in-out
            hover:border-[#F1FF7C]
            hover:shadow-[0_0_18px_4px_rgba(241,255,124,0.45)]
          ">

            {/* Внутренний блок */}
            <div className="flex items-center justify-start w-auto lg:w-[189px] h-full rounded-[50px] pl-[16px] lg:pl-[29px] pr-4 box-border">
              <span className="
                text-[18px] lg:text-[24px] leading-[32px] font-normal
                text-[#F1FF7C] opacity-80
                group-hover:opacity-100
                transition-opacity duration-300
              ">
                get started
              </span>
            </div>

            {/* Круг со стрелкой */}
            <div className="
              absolute right-[2px] lg:right-[3px] top-[2px] lg:top-[1px]
              flex items-center justify-center
              w-[52px] h-[52px] lg:w-[68px] lg:h-[68px] rounded-full shrink-0
              border-2 border-[#F1FF7C]
              bg-transparent
              transition-all duration-300 ease-in-out
              group-hover:bg-[rgba(241,255,124,0.12)]
              group-hover:shadow-[0_0_14px_3px_rgba(241,255,124,0.5)]
            ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
              >
                <line
                  x1="5" y1="19" x2="19" y2="5"
                  stroke="#F1FF7C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="transition-all duration-300 group-hover:opacity-100 opacity-80"
                />
                <polyline
                  points="9,5 19,5 19,15"
                  fill="none"
                  stroke="#F1FF7C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 group-hover:opacity-100 opacity-80"
                />
              </svg>
            </div>

          </div>
          {/*  КОНЕЦ КНОПКИ  */}

        </div>

        {/* Оригинал для десктопа */}
        <div className="hidden lg:block absolute w-[604px] h-[560px] top-[20px] right-0 z-0">
          <img
            src={backPic}
            alt="background"
            className="absolute w-[511px] h-[490px] top-0 left-0 opacity-25"
          />
          <img
            src={manFace}
            alt="face"
            className="absolute w-[450px] h-[500px] top-[58px] left-[151px]"
          />
        </div>
        
        {/* Для планшетов */}
        <div className="hidden md:block lg:hidden absolute w-[450px] h-[400px] top-[20px] right-0 z-0 opacity-40">
          <img
            src={backPic}
            alt="background"
            className="absolute w-[350px] h-[350px] top-0 right-0 opacity-25"
          />
          <img
            src={manFace}
            alt="face"
            className="absolute w-[300px] h-[350px] top-[30px] right-[20px]"
          />
        </div>

      </div>
    </main>
  );
};

export default Hero;
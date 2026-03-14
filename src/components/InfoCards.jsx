import { useNavigate } from 'react-router-dom';
import arrow from '../assets/arrow.svg';
import faqImg from '../assets/faq.svg';

const InfoCards = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full max-w-[1440px] mx-auto flex items-center justify-center px-4 py-8 lg:h-[455px] lg:py-0">

      {/* Desktop */}
      <div className="
        w-full lg:w-[1200px] lg:h-[450px] lg:relative
        flex flex-col gap-4
        lg:flex lg:flex-none lg:gap-0
      ">

        {/* Карточка */}
        <div className="
          relative w-full lg:absolute lg:top-0 lg:left-0 lg:w-[588px] lg:h-[356px]
          h-auto rounded-[30px] lg:rounded-[50px]
          bg-[#F1FF7C] shadow-[0px_8px_5px_rgba(0,0,0,0.5)] overflow-hidden
          p-6 lg:p-0
        ">
          <h2 className="
            lg:absolute lg:top-[59px] lg:left-[49px] lg:w-[397px] lg:h-[78px]
            text-[28px] sm:text-[36px] lg:text-[48px]
            font-normal text-[#222222] m-0 leading-[1.2]
          ">
            What is TrueID?
          </h2>

          <p className="
            lg:absolute lg:top-[137px] lg:left-[49px] lg:w-[425px]
            text-[14px] sm:text-[18px] lg:text-[24px]
            font-normal text-[#222222] mt-3 lg:mt-0 leading-[1.4]
          ">
            This is a service where all your
            necessary documents are
            collected in one place for
            convenient use both on the
            Internet and in life.
          </p>

          {/* Кнопка-таблетка */}
          <div
            onClick={() => navigate('/info')}
            className="
              group
              lg:absolute lg:top-[214px] lg:left-[474px]
              self-end mt-4 lg:mt-0
              w-[50px] h-[72px] lg:w-[60px] lg:h-[85px]
              rounded-[50px] bg-[#222222]
              flex items-start justify-center cursor-pointer
            "
          >
            <div className="
              mt-[22px] lg:mt-[28px]
              w-[44px] h-[44px] lg:w-[54px] lg:h-[53px]
              rounded-[50px] bg-[#F1FF7C]
              flex items-center justify-center
              transition-all duration-300
              group-hover:shadow-[0_0_18px_2px_rgba(241,255,124,0.85)]
            ">
              <img
                src={arrow}
                alt="arrow"
                className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] transition-transform duration-300 group-hover:rotate-[-180deg]"
              />
            </div>
          </div>
        </div>

        {/* Mobile row: */}
        <div className="flex flex-row gap-4 lg:contents">

          {/* Карточка FAQ */}
          <div className="
            lg:absolute lg:left-[607px] lg:top-0
            w-[120px] sm:w-[160px] lg:w-[234px]
            h-[200px] sm:h-[260px] lg:h-[356px]
            flex-shrink-0
          ">
            <div className="
              w-full h-full
              rounded-[30px] lg:rounded-[50px]
              shadow-[0px_8px_5px_rgba(0,0,0,0.5)]
              relative overflow-hidden
            ">
              <img
                src={faqImg}
                alt="FAQ"
                className="absolute top-0 left-0 w-224 object-cover z-0"
              />
              <div className="
                absolute top-[20px] lg:top-[38px]
                left-[16px] lg:left-[65px]
                text-[28px] sm:text-[36px] lg:text-[48px]
                font-normal text-[#F1FF7C] z-10
              ">
                FAQ
              </div>
            </div>
          </div>

          {/* Security + Privacy стопкой */}
          <div className="flex flex-col gap-4 flex-1 lg:contents">

            {/* Карточка Security */}
            <div className="
              lg:absolute lg:top-0 lg:left-[852px] lg:w-[348px] lg:h-[166px]
              w-full h-[90px] sm:h-[120px]
              bg-[#F1FF7C] rounded-[30px] lg:rounded-[50px]
              shadow-[0px_8px_5px_rgba(0,0,0,0.5)]
              flex items-center lg:block
              relative
            ">
              <div className="
                lg:absolute lg:top-[53px] lg:left-[70px]
                pl-6 lg:pl-0
                text-[24px] sm:text-[32px] lg:text-[48px]
                font-normal text-[#222222] leading-[1.2]
              ">
                Security
              </div>
            </div>

            {/*  Карточка Privacy  */}
            <div className="
              lg:absolute lg:top-[190px] lg:left-[850px] lg:w-[346px] lg:h-[166px]
              w-full h-[90px] sm:h-[120px]
              bg-[#44494E] rounded-[30px] lg:rounded-[50px]
              shadow-[0px_8px_5px_rgba(0,0,0,0.5)]
              flex items-center lg:block
              relative
            ">
              <div className="
                lg:absolute lg:top-[52px] lg:left-[79px]
                pl-6 lg:pl-0
                text-[24px] sm:text-[32px] lg:text-[48px]
                font-normal text-[#F1FF7C] lg:leading-[1.2]
              ">
                Privacy
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default InfoCards;
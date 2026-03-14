import polygonIcon from '../assets/polygon.svg';

export default function VideoSection() {
  return (
    <main className="bg-[#222222] w-full lg:w-[1440px] mx-auto
      h-auto lg:h-[750px]
      flex items-center justify-center
      py-10 sm:py-14 lg:py-0
      relative"
    >
      {/* Wrapper */}
      <div className="
        w-full px-4 sm:px-8 lg:px-0
        lg:w-[954px] lg:h-[698px]
        flex flex-col items-center justify-start
        lg:relative
      ">

        {/* Text above video */}
        <p className="
          text-[16px] sm:text-[22px] lg:text-[32px]
          font-normal text-[#F1FF7C]
          text-center leading-[1.3]
          w-full lg:w-[707px]
          mb-5 sm:mb-7 lg:mb-0
          lg:absolute lg:top-0 lg:left-[126px]
        ">
          See how TrueID ensures your sensitive data stays private — accessible only to you.
        </p>

        {/* Video container */}
        <div className="
          w-full lg:w-[954px]
          h-[200px] sm:h-[340px] lg:h-[570px]
          bg-[#D9D9D9]
          rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]
          relative
          lg:absolute lg:top-[128px] lg:left-0
          shadow-[0px_8px_5px_rgba(0,0,0,0.5)]
        ">
          {/* Play button */}
          <img
            src={polygonIcon}
            alt="Play"
            className="
              absolute
              w-[48px] h-[48px] sm:w-[72px] sm:h-[72px] lg:w-[107px] lg:h-[107px]
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              lg:translate-x-0 lg:translate-y-0
              lg:top-[227px] lg:left-[426px]
              cursor-pointer
            "
          />
        </div>

      </div>
    </main>
  );
}
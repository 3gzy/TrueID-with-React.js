import starIcon from '../assets/star.svg';

const items = [
  'All documents are safely located',
  'Files are available in PDF - optimized for viewing on any device',
  'Easy navigation in your documents',
];

const Track = () => (
  <div className="flex items-center gap-[6px] whitespace-nowrap">
    {items.map((text, i) => (
      <div key={i} className="flex items-center text-[14px] sm:text-[18px] lg:text-[24px] text-white leading-[1.4] lg:leading-[32px]">
        {text}
        <div className="flex items-center justify-center w-[20px] h-[20px] lg:w-[29px] lg:h-[29px] mx-[12px] lg:mx-[25px]">
          <img src={starIcon} alt="star" className="w-full h-full" />
        </div>
      </div>
    ))}
  </div>
);

const RunningLine = () => {
  return (
    <div className="w-full lg:w-[1440px] h-[140px] sm:h-[180px] lg:h-[220px] mx-auto flex items-center justify-center overflow-hidden relative">

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="w-full h-[54px] sm:h-[68px] lg:h-[84px] overflow-hidden relative border-y-[2px] lg:border-y-[3px] border-white flex items-center">

        <div
          className="flex items-center w-max"
          style={{ animation: 'scroll-left 20s linear infinite' }}
        >
          <Track />
          <Track />
          <Track />
          <Track />
        </div>

      </div>
    </div>
  );
};

export default RunningLine;
import starIcon from '../assets/star.svg';

const items = [
  'All documents are safely located',
  'Files are available in PDF – optimized for viewing on any device',
  'Easy navigation in your documents',
];

const Track = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
  }}>
    {items.map((text, i) => (
      <div
        key={i}
        style={{
          fontSize: '24px',
          color: 'white',
          lineHeight: '32px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {text}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '29px',
          height: '29px',
          marginLeft: '25px',
          marginRight: '25px',
          flexShrink: 0,
        }}>
          <img src={starIcon} alt="star" width={29} height={29} />
        </div>
      </div>
    ))}
  </div>
);

const RunningLine = () => {
  return (
    <div style={{
      width: '1440px',
      height: '137px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .running-line-content {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll-left 20s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div style={{
        width: '100%',
        height: '84px',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '3px solid #ffffff',
        borderBottom: '3px solid #ffffff',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="running-line-content">
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
import { useState } from 'react';
import backPic from '../assets/backpic.svg';
import manFace from '../assets/man-face.svg';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <main
      className="w-full bg-[#222222] relative flex items-start justify-center"
      style={{ height: '560px' }}
    >
      <style>{`
        @keyframes waveIn {
          from { background-position: 100% 0; }
          to   { background-position: 0% 0; }
        }
        @keyframes waveOut {
          from { background-position: 0% 0; }
          to   { background-position: 100% 0; }
        }
        @keyframes waveInInner {
          from { background-position: 0% 0; }
          to   { background-position: 100% 0; }
        }
        @keyframes waveOutInner {
          from { background-position: 100% 0; }
          to   { background-position: 0% 0; }
        }

        .wave-btn {
          background: linear-gradient(to right, #F1FF7C 50%, #222222 50%);
          background-size: 200% 100%;
          background-position: 100% 0;
        }
        .wave-btn.hovered {
          animation: waveIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .wave-btn.leave {
          animation: waveOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .wave-inner {
          background: linear-gradient(to right, #222222 50%, #F1FF7C 50%);
          background-size: 200% 100%;
          background-position: 0% 0;
        }
        .wave-inner.hovered {
          animation: waveInInner 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .wave-inner.leave {
          animation: waveOutInner 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="w-full max-w-[1200px] px-4 flex items-start justify-between relative">

        {/* Left side */}
        <div className="flex flex-col" style={{ width: '478px', paddingTop: '57px' }}>

          {/* Title */}
          <p
            className="text-white font-normal m-0 p-0"
            style={{
              fontSize: '64px',
              lineHeight: '83px',
              wordBreak: 'break-word',
              width: '478px',
            }}
          >
            All your important documents - in one place
          </p>

          {/* Subtitle */}
          <p
            className="text-white font-normal"
            style={{
              fontSize: '24px',
              lineHeight: '100%',
              marginTop: '12px',
              width: '466px',
            }}
          >
            Secure. Simple. Available online 24/7.
          </p>

          {/* Button */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`wave-btn flex items-center justify-start relative cursor-pointer overflow-hidden ${
              hovered ? 'hovered' : 'leave'
            }`}
            style={{
              width: '272px',
              height: '75px',
              marginTop: '24px',
              border: '1px solid #F1FF7C',
              borderRadius: '50px',
              paddingLeft: '6px',
              boxSizing: 'border-box',
            }}
          >
            {/* Button inner text block */}
            <div
              className={`wave-inner flex items-center justify-start ${
                hovered ? 'hovered' : 'leave'
              }`}
              style={{
                width: '189px',
                height: '68px',
                borderRadius: '50px',
                paddingLeft: '29px',
                boxSizing: 'border-box',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  fontWeight: 400,
                  color: hovered ? '#222222' : '#F1FF7C',
                  transition: hovered
                    ? 'color 0.2s ease 0.5s'
                    : 'color 0.2s ease 0s',
                }}
              >
                get started
              </span>
            </div>

            {/* Arrow circle */}
            <div
              className="flex items-center justify-center"
              style={{
                width: '68px',
                height: '68px',
                background: hovered ? '#F1FF7C' : '#222222',
                border: hovered ? '2px solid #222222' : '2px solid #F1FF7C',
                borderRadius: '50%',
                flexShrink: 0,
                transition: 'background 0.6s ease, border 0.6s ease',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="5" y1="19" x2="19" y2="5"
                  stroke={hovered ? '#222222' : '#F1FF7C'}
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ transition: 'stroke 0.6s ease' }}
                />
                <polyline
                  points="9,5 19,5 19,15"
                  fill="none"
                  stroke={hovered ? '#222222' : '#F1FF7C'}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'stroke 0.6s ease' }}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side — images */}
        <div
          className="absolute"
          style={{
            width: '604px',
            height: '560px',
            top: '20px',
            right: '0px',
          }}
        >
          <img
            src={backPic}
            alt="background"
            className="absolute"
            style={{
              width: '511px',
              height: '490px',
              top: 0,
              left: 0,
              opacity: 0.25,
            }}
          />
          <img
            src={manFace}
            alt="face"
            className="absolute"
            style={{
              width: '452px',
              height: '502px',
              top: '58px',
              left: '151px',
            }}
          />
        </div>

      </div>
    </main>
  );
};

export default Hero;

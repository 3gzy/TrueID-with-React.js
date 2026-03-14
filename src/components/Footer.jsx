import React from 'react';

const Footer = () => {
  const footerColumns = [
    {
      title: 'Sections',
      links: ['FAQ', 'About Us', 'My Profile', 'Verify ID'],
      containerWidth: 'lg:w-[141px]',
      leftPos: 'lg:left-0',
      titleWidth: 'lg:w-[110px]'
    },
    {
      title: 'Legal',
      links: ['Data Security', 'GDPR Compliance', 'User Agreement', 'Accessibility'],
      containerWidth: 'lg:w-[223px]',
      leftPos: 'lg:left-[220px]',
      titleWidth: 'lg:w-[75px]'
    },
    {
      title: 'Help & Support',
      links: ['Privacy Policy', 'Terms of Use', 'Contact Support', 'Report a problem'],
      containerWidth: 'lg:w-[234px]',
      leftPos: 'lg:left-[453px]',
      titleWidth: 'lg:w-[200px]'
    }
  ];

  return (
    <footer className="w-full lg:w-[1440px] lg:h-[220px] mx-auto relative bg-[#222222] px-4 sm:px-8 lg:px-0 py-8 lg:py-0">

      {/* Mobile & Tablet layout */}
      <div className="flex flex-col gap-8 lg:hidden">

        {/* Соцсети + Логотип + Копирайт */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src="src/assets/instagram.svg"
              alt="Instagram"
              className="w-[32px] h-[32px] cursor-pointer"
            />
            <img
              src="src/assets/facebook.svg"
              alt="Facebook"
              className="w-[32px] h-[32px] cursor-pointer"
            />
          </div>

          <a href="#">
            <img
              src="src/assets/true-id-logo.svg"
              alt="TrueID logo"
              className="w-[120px] h-auto cursor-pointer"
            />
          </a>

          <p className="text-[#D9D9D9] text-[13px] sm:text-[15px] font-normal leading-[1.4] m-0">
            © 2025 TrueID. All rights reserved. Your data, your rules.
          </p>
        </div>

        {/* Колонки ссылок */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-normal text-white">
          {footerColumns.map((col, index) => (
            <div key={index} className="flex flex-col gap-[6px]">
              <p className="text-[18px] sm:text-[20px] m-0 font-normal">
                {col.title}
              </p>
              {col.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="text-[13px] sm:text-[14px] text-[#D9D9D9] no-underline transition-all duration-200 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">

        {/* Левая часть */}
        <div className="relative">
          <div className="w-[481px] h-[154px] absolute top-[60px] left-[120px]">
            <img
              src="src/assets/instagram.svg"
              alt="Instagram"
              className="absolute top-0 left-0 w-[38px] h-[38px] cursor-pointer"
            />
            <img
              src="src/assets/facebook.svg"
              alt="Facebook"
              className="absolute top-0 left-[66px] w-[38px] h-[38px] cursor-pointer"
            />

            <a href="#" className="block">
              <img
                src="src/assets/true-id-logo.svg"
                alt="TrueID logo"
                className="absolute top-[62px] left-0 w-[144px] h-[29px] cursor-pointer"
              />
            </a>

            <div className="absolute top-[114px] left-0 w-[450px] h-[30px] text-[#D9D9D9] text-[16px] font-normal leading-[1.3]">
              © 2025 TrueID. All rights reserved. Your data, your rules.
            </div>
          </div>
        </div>

        {/* Правая часть — колонки */}
        <div className="w-[687px] h-[157px] absolute top-[49px] left-[639px] flex font-normal text-white">
          {footerColumns.map((col, index) => (
            <div
              key={index}
              className={`absolute flex flex-col gap-[7px] h-[156px] ${col.containerWidth} ${col.leftPos}`}
            >
              <p className={`text-[24px] h-[30px] m-0 ${col.titleWidth}`}>
                {col.title}
              </p>
              {col.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="text-[16px] h-[22px] leading-[22px] text-[#D9D9D9] block no-underline transition-all duration-200 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;
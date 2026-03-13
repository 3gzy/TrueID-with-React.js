import { useState } from "react";
import logo from "../assets/trueID-logo.svg";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { label: "about us", key: "about" },
    { label: "FAQ", key: "faq" },
    { label: "register", key: "register" },
  ];

  return (
    <header className="w-full bg-[#222222] flex justify-center items-center h-[180px]">
      <div className="w-full max-w-[1200px] h-[60px] flex justify-between items-center px-4">
        <div className="w-[149px] cursor-pointer">
          <img src={logo} alt="TrueID" className="w-full h-auto" />
        </div>

        <nav className="flex items-center gap-8 h-[43px]">
          {navLinks.map(({ label, key }) => (
            <a
              key={key}
              href="#"
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className="inline-flex items-center justify-center no-underline font-medium uppercase text-sm tracking-wide transition-colors duration-300"
              style={{
                color: hovered === key ? "#F1FF7C" : "#FFFFFF",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            onMouseEnter={() => setHovered("login")}
            onMouseLeave={() => setHovered(null)}
            className="inline-flex items-center justify-center w-[99px] h-[44px] rounded-[24px] uppercase text-sm font-semibold tracking-wide transition-all duration-300"
            style={{
              border: "1.5px solid #F1FF7C",
              color: hovered === "login" ? "#222222" : "#F1FF7C",
              backgroundColor: hovered === "login" ? "#F1FF7C" : "transparent",
              textDecoration: "none",
            }}
          >
            login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
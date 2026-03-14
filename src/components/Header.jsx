import logo from "../assets/trueID-logo.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "about us", key: "about", path: "/info" },
  { label: "FAQ", key: "faq", path: null },
  { label: "register", key: "register", path: null },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#222222] flex justify-center items-center 
      h-[80px] md:h-[120px] lg:h-[180px]">

      <div className="w-full max-w-[1200px] flex justify-between items-center 
        px-4 md:px-8 lg:px-4">

        {/* Логотип */}
        <div
          className="cursor-pointer w-[90px] md:w-[120px] lg:w-[149px]"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="TrueID" className="w-full h-auto" />
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map(({ label, key, path }) => (
            <NavLink
              key={key}
              to={path || "#"}
              onClick={(e) => { if (!path) e.preventDefault(); }}
              className={({ isActive }) =>
                `inline-flex items-center justify-center font-medium uppercase 
                text-xs lg:text-sm tracking-wide no-underline transition-colors duration-300
                ${isActive && path ? "text-[#F1FF7C]" : "text-white hover:text-[#F1FF7C]"}`
              }
            >
              {label}
            </NavLink>
          ))}

          <a
            href="#"
            className="inline-flex items-center justify-center 
              w-[80px] h-[36px] lg:w-[99px] lg:h-[44px] 
              rounded-[24px] uppercase text-xs lg:text-sm font-semibold 
              tracking-wide no-underline border-[1.5px] border-[#F1FF7C] 
              text-[#F1FF7C] bg-transparent hover:bg-[#F1FF7C] 
              hover:text-[#222222] transition-all duration-300"
          >
            login
          </a>
        </nav>

        {/* Бургер-меню */}
        <button className="flex md:hidden flex-col gap-[5px] cursor-pointer">
          <span className="w-[24px] h-[2px] bg-white block"></span>
          <span className="w-[24px] h-[2px] bg-white block"></span>
          <span className="w-[24px] h-[2px] bg-white block"></span>
        </button>

      </div>
    </header>
  );
};

export default Header;
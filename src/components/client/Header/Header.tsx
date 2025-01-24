import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderAction from "../Header-Action/HeaderAction";
import HeaderInfo from "../Header-Info/HeaderInfo";
import HeaderNavigation from "../Header-Navigation/HeaderNavigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsSticky(true);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsSticky(false);
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white shadow-sm z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 right-0" : "relative"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <HeaderInfo />
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="w-56">
          <img src="/public/imgs/logo.webp" className="w-full" alt="logo" />
        </NavLink>
        <HeaderNavigation />
        <HeaderAction />
      </div>
    </div>
  );
};

export default Header;

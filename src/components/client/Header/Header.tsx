import { NavLink } from "react-router-dom";
import HeaderAction from "../Header-Action/HeaderAction";
import HeaderInfo from "../Header-Info/HeaderInfo";
import HeaderNavigation from "../Header-Navigation/HeaderNavigation";

const Header = () => {
  return (
    <div className="bg-white">
      <HeaderInfo />
      <div className="max-w-[1280px] mx-auto px-2 flex items-center justify-between">
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

import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchContainer from "../Search-Container/SearchContainer";
import ModalLogin from "../Modal-Login/ModalLogin";
import Cart from "../Cart/Cart";

const HeaderAction = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="relative initial">
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            className="cursor-pointer"
            onClick={() => setShowLoginModal(!showLoginModal)}
          />
          <ModalLogin
            showLoginModal={showLoginModal}
            setShowLoginModal={setShowLoginModal}
          />
        </div>

        <div className="relative">
          <span className="flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full absolute top-[-10px] right-[-10px]">
            0
          </span>
          <FontAwesomeIcon
            icon={faBagShopping}
            size="lg"
            className="cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          />
          <Cart showCart={showCart} setShowCart={setShowCart} />
        </div>
      </div>
      <SearchContainer showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default HeaderAction;

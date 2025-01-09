import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContainer = (props: Props) => {
  return (
    <div
      onClick={() => props.setShowSearch(false)}
      className={`right-0 top-0 w-full h-[100vh] z-10 cursor-pointer bg-[#00000028] fixed transition-all duration-500 ease-in-out ${
        props.showSearch
          ? "translate-y-0 opacity-100"
          : "translate-y-[-70vh] opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="w-full h-auto bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[1280px] mx-auto px-2 py-7 flex items-start justify-between">
          <NavLink to="/" className="w-56">
            <img src="/public/imgs/logo.webp" className="w-full" alt="logo" />
          </NavLink>
          <div className="flex flex-col items-start gap-4">
            <div className="relative w-[600px]">
              <input
                type="text"
                className="border py-[8px] px-3 w-full placeholder:font-[600] focus:outline-none focus:bg-[#f2f5fa] focus:border-black"
                placeholder="Tìm kiếm sản phẩm"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <p className="font-[600]">Gợi ý cho bạn:</p>
          </div>
          <div
            onClick={() => props.setShowSearch(false)}
            className="w-10 h-10 rounded-full transition-all duration-500 ease-in-out hover:bg-[#cccccc50] flex items-center justify-center relative group"
          >
            <span className="block w-6 h-[2px] bg-black absolute rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"></span>
            <span className="block w-6 h-[2px] bg-black absolute -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;

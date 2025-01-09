import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchContainer from "../Search-Container/SearchContainer";

const HeaderAction = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <FontAwesomeIcon icon={faUser} size="lg" className="cursor-pointer" />
        <div className="relative">
          <span className="flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full absolute top-[-10px] right-[-10px]">
            0
          </span>
          <FontAwesomeIcon
            icon={faBagShopping}
            size="lg"
            className="cursor-pointer"
          />
        </div>
      </div>
      <SearchContainer showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default HeaderAction;

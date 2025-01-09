import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ProductTypes from "../Product-Types/ProductTypes";
import { useState } from "react";
import Sales from "../Sales/Sales";

const HeaderNavigation = () => {
  const [showProdctTypes, setShowProductTypes] = useState<boolean>(false);
  const [showSales, setShowSales] = useState<boolean>(false);

  return (
    <>
      <ul className="flex items-center gap-7 text-black uppercase font-[600]">
        <li className="py-6 cursor-pointer">
          <NavLink to="/">hàng mới về</NavLink>
        </li>
        <li
          className="group py-6 cursor-pointer"
          onMouseEnter={() => setShowProductTypes(true)}
          onMouseLeave={() => setShowProductTypes(false)}
        >
          <NavLink to="/">
            sản phẩm
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xs"
              className={`ms-2 ${
                showProdctTypes
                  ? "rotate-180 transform transition duration-300 ease-in-out"
                  : "rotate-0 transform transition duration-300 ease-in-out"
              }`}
            />
          </NavLink>
        </li>
        <li className="py-6 cursor-pointer">
          <NavLink to="/">bộ siêu tập</NavLink>
        </li>
        <li className="py-6 cursor-pointer">
          <NavLink to="/">casual</NavLink>
        </li>
        <li className="py-6 cursor-pointer">
          <NavLink to="/">lady me</NavLink>
        </li>
        <li
          className="group relative py-6 cursor-pointer"
          onMouseEnter={() => setShowSales(true)}
          onMouseLeave={() => setShowSales(false)}
        >
          <NavLink to="/">
            sale
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xs"
              className={`ms-2 ${
                showSales
                  ? "rotate-180 transform transition duration-300 ease-in-out"
                  : "rotate-0 transform transition duration-300 ease-in-out"
              }`}
            />
          </NavLink>
          <Sales showSales={showSales} setShowSales={setShowSales} />
        </li>
        <li className="py-6 cursor-pointer">
          <NavLink to="/">showroom</NavLink>
        </li>
      </ul>
      <ProductTypes
        showProdctTypes={showProdctTypes}
        setShowProductTypes={setShowProductTypes}
      />
      <Sales showSales={showSales} setShowSales={setShowSales} />
    </>
  );
};

export default HeaderNavigation;

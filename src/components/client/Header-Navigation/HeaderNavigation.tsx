import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <ul className="flex items-center gap-7 text-black uppercase font-[600]">
      <li>
        <NavLink to="/">hàng mới về</NavLink>
      </li>
      <li className="group">
        <NavLink to="/">
          sản phẩm
          <FontAwesomeIcon
            icon={faChevronDown}
            size="xs"
            className="group-hover:rotate-180 transform transition duration-300 ease-in-out ms-2"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">bộ siêu tập</NavLink>
      </li>
      <li>
        <NavLink to="/">casual</NavLink>
      </li>
      <li>
        <NavLink to="/">lady me</NavLink>
      </li>
      <li className="group">
        <NavLink to="/">
          sale{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            size="xs"
            className="group-hover:rotate-180 transform transition duration-300 ease-in-out ms-2"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">showroom</NavLink>
      </li>
    </ul>
  );
};

export default HeaderNavigation;

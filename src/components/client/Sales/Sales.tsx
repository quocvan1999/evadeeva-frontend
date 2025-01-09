import { NavLink } from "react-router-dom";

type Props = {
  showSales: boolean;
  setShowSales: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sales = (props: Props) => {
  return (
    <div
      onMouseEnter={() => props.setShowSales(true)}
      onMouseLeave={() => props.setShowSales(false)}
      className={`absolute left-0 top-full w-[300px] bg-white transition-all duration-500 ease-in-out p-4 border-t-2 shadow-md ${
        props.showSales
          ? "flex z-50 translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <ul className="normal-case">
        <li>
          <NavLink to="/">Sale 70%</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sales;

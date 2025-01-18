import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../../utils/currencyUtils";
import {
  faBagShopping,
  faBoltLightning,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  gap: number;
  itemsPerPage: number;
  item: {
    name: string;
    price: number;
    original_price: number;
    discount: number;
    image: string;
    hoverImage: string;
  };
  type: "nomal" | "sale";
};

const CardProduct = (props: Props) => {
  return (
    <div
      style={{
        width: `calc((100% - ${props.gap * 4 * (props.itemsPerPage - 1)}px) / ${
          props.itemsPerPage
        })`,
      }}
      className={`flex-shrink-0 overflow-hidden cursor-pointer flex flex-col items-center justify-start group ${
        props.type === "sale" ? "h-[350px]" : "h-[450px]"
      }`}
    >
      <div
        className={`w-full relative overflow-hidden ${
          props.type === "sale" ? "h-[70%]" : "h-[85%]"
        }`}
      >
        <img
          src={props.item.image}
          alt="img"
          className="w-full h-full object-cover transform scale-100 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-0"
        />
        <img
          src={props.item.hoverImage}
          alt="hover-img"
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 transition-transform duration-1000 opacity-0 group-hover:opacity-100 group-hover:scale-100"
        />
        <div className="absolute w-full flex items-center justify-center bottom-0 left-0 right-0 gap-3 py-4 opacity-0 group-hover:opacity-100 translate-y-7 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <button className="relative bg-white text-black text-[14px] font-semibold uppercase py-2 px-3 rounded-[5px] flex items-center gap-1 hover:text-white transition-all duration-500 ease-in-out hover:bg-black">
            <FontAwesomeIcon
              icon={faBagShopping}
              size="lg"
              className="relative z-10"
            />
            <span className="relative z-10">thêm vào giỏ</span>
          </button>

          <div className="text-white bg-[#333] p-2 text-[15px] rounded-[5px]">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
        {props.item.discount > 0 && (
          <div className="absolute bg-red-600 px-2 top-2 left-2 flex items-center justify-center rounded-[4px]">
            <FontAwesomeIcon
              icon={faBoltLightning}
              style={{ color: "#fff", fontSize: 10 }}
            />
            <span className="text-white font-semibold text-[15px] ms-1">
              - {props.item.discount}%
            </span>
          </div>
        )}
      </div>
      <div
        className={`w-full p-3 bg-white ${
          props.type === "sale" ? "h-[30%]" : "h-[15%]"
        }`}
      >
        <h1 className="text-sm font-medium">{props.item.name}</h1>
        <p
          className={`font-bold mt-2 ${
            props.item.discount > 0 ? "text-red-600" : " text-black"
          }`}
        >
          {formatCurrency(props.item.price)}{" "}
          {props.item.discount > 0 && (
            <span className="font-normal text-gray-400 line-through">
              {formatCurrency(props.item.original_price)}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;

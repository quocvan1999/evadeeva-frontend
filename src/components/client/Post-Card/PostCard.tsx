import { NavLink } from "react-router-dom";
import { limitString } from "../../../utils/currencyUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  data: {
    id: number;
    title: string;
    des: string;
    date: string;
    img: string;
  };
  gap: number;
  itemsPerPage: number;
};

const PostCard = (props: Props) => {
  const { data, itemsPerPage, gap } = props;

  return (
    <div
      style={{
        width: `calc((100% - ${gap * (itemsPerPage - 1)}px) / ${itemsPerPage})`,
      }}
      className="flex-shrink-0 h-[550px] overflow-hidden cursor-pointer shadow-md border"
    >
      <div className="w-full h-[70%] overflow-hidden">
        <img
          src={data.img}
          alt="img"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:-rotate-6 hover:scale-110"
        />
      </div>
      <div className="w-full h-[30%] p-4">
        <h1 className="text-[15px] font-medium transition-all duration-500 ease-in-out hover:opacity-70 mb-2">
          {data.title}
        </h1>
        <p className="text-[13px] font-medium text-gray-500">
          {limitString(data.des, 50)}
        </p>
        <span className="border-b h-[1px] w-full border-r-gray-600 block my-3"></span>
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-gray-500">{data.date}</p>
          <NavLink
            to=""
            className="text-[13px] text-gray-500 transition-all duration-500 ease-in-out hover:text-black flex items-center"
          >
            <span className="leading-3 me-1">Xem thêm</span>
            <FontAwesomeIcon icon={faAngleRight} />
            <FontAwesomeIcon icon={faAngleRight} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

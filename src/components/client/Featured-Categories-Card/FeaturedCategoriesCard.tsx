import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  data: { title: string; img: string };
  itemsPerPage: number;
  gap: number;
};

const FeaturedCategoriesCard = (props: Props) => {
  const { data, itemsPerPage, gap } = props;

  return (
    <div
      style={{
        width: `calc((100% - ${gap * (itemsPerPage - 1)}px) / ${itemsPerPage})`,
      }}
      className="flex-shrink-0 h-[400px] overflow-hidden cursor-pointer relative"
    >
      <div className="absolute flex items-center justify-between px-4 left-0 right-0 bottom-0 bg-[#ccccccad] py-4 z-10">
        <h1 className="text-[22px] font-medium">{data.title}</h1>
        <button className="w-12 h-12 bg-white flex items-center justify-center rounded-full transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <img
        src={data.img}
        alt={data.title}
        className="h-full w-full object-cover transition-all duration-1000 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default FeaturedCategoriesCard;

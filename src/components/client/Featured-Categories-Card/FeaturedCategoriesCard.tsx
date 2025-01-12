import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  data: { title: string; img: string };
};

const FeaturedCategoriesCard = (props: Props) => {
  return (
    <div className="w-[calc((100%-84px)/4)] flex-shrink-0 h-[400px] overflow-hidden cursor-pointer relative">
      <div className="absolute flex items-center justify-between px-4 left-0 right-0 bottom-0 bg-[#ccccccad] py-4 z-10">
        <h1 className="text-[22px] font-medium">{props.data.title}</h1>
        <button className="w-12 h-12 bg-white flex items-center justify-center rounded-full transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <img
        src={props.data.img}
        alt={props.data.title}
        className="h-full w-full object-cover transition-all duration-1000 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default FeaturedCategoriesCard;

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const imgs = [
  { url: "/data/slide_1_img.webp" },
  { url: "/data/slide_2_img.webp" },
  { url: "/data/slide_3_img.webp" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarouselButton, setShowCarouselButton] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="w-full relative bg-red-600 overflow-hidden"
      onMouseEnter={() => setShowCarouselButton(true)}
      onMouseLeave={() => setShowCarouselButton(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imgs.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={img.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
        <div className="w-[1280px] mx-auto flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            className={`w-12 h-12 rounded-full flex justify-center items-center text-black hover:text-white bg-white duration-500 transition-all ease-in-out hover:bg-[#3a3838] ${
              showCarouselButton
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0 pointer-events-none"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className={`w-12 h-12 rounded-full flex justify-center items-center text-black hover:text-white bg-white duration-500 transition-all ease-in-out hover:bg-[#3a3838] ${
              showCarouselButton
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0 pointer-events-none"
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-4 flex items-center justify-center gap-3">
        {imgs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-[#615a5a]" : "bg-[#9c9898]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

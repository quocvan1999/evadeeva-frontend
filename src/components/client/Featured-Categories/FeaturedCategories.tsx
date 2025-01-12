import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CaroucelFeaturedCategories from "../Caroucel-Featured-Categories/CaroucelFeaturedCategories";

const data = [
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Áo kiểu", img: "/public/data/dam.webp" },
  { title: "Quần", img: "/public/data/dam.webp" },
  { title: "Chân váy", img: "/public/data/dam.webp" },
  { title: "Áo khoác", img: "/public/data/dam.webp" },
  { title: "Váy dài", img: "/public/data/dam.webp" },
];

const FeaturedCategories = () => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full">
      <div className="w-[1280px] mx-auto px-2">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-3xl">Danh mục nổi bật</h1>
          <div className="flex items-center gap-5 py-6">
            <button
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className={`text-[20px] ${
                currentIndex === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black"
              }`}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              disabled={currentIndex === data.length - itemsPerPage}
              onClick={handleNext}
              className={`text-[20px] ${
                currentIndex === data.length - itemsPerPage
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black"
              }`}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative pb-10">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-7"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {data.map((category, index) => (
              <CaroucelFeaturedCategories key={index} data={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

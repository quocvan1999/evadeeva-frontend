import { useState } from "react";
import Countdown from "../Countdown/Countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardProduct from "../Card-Product/CardProduct";

const data = [
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
  {
    name: "Áo khoác kiểu, 24AJKC007X",
    price: 799500,
    original_price: 1599000,
    discount: 50,
    image: "/public/data/dam.webp",
    hoverImage:
      "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
  },
];

const SaleContainer = () => {
  const targetDate: Date = new Date("2025-01-13T23:59:59");
  const itemsPerPage: number = 6;
  const gap: number = 5;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
    <div className="w-full py-7 bg-[#FAEFEC]">
      <div className="w-[1280px] mx-auto px-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <span className="relative w-3 h-3 bg-red-500 rounded-full before:absolute before:inset-0 before:rounded-full before:animate-ping before:bg-red-500/50 before:w-3 before:h-3 before:max-w-[12rem] before:max-h-[12rem] before:duration-1000"></span>
            <h1 className="text-3xl font-medium">
              End Of Season Sale 50% FW24
            </h1>
            <Countdown date={targetDate} />
          </div>
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
        {/* Product list */}

        <div className="overflow-hidden relative pb-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
              gap: `${gap * 4}px`,
            }}
          >
            {data.map((item, index) => (
              <CardProduct
                key={index}
                gap={gap}
                itemsPerPage={itemsPerPage}
                item={item}
                type="sale"
              />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="uppercase bg-white border text-[14px] font-[500] py-3 px-4 transition-all duration-500 ease-in-out hover:bg-black hover:text-white border-black rounded-[5px]">
            Xem tất cả {" "}
            <span className="font-bold">
              End Of Season Sale 50% 70% FW24
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleContainer;

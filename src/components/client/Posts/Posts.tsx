import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PostCard from "../Post-Card/PostCard";

const data = [
  {
    id: 1,
    title: "WILD SOUL - BST CHẠM ĐẾN VẺ ĐẸP CỦA TÂM HỒN TỰ DO",
    des: "Được khơi nguồn cảm hứng từ vẻ đẹp giản dị của một tâm hồn tự do, Eva de Eva cho ra mắt bộ sưu tập mới WILD SOUL kể câu chuyện về hành trình khai phóng bản thân của người phụ nữ để chạm đến con người mà nàng ao ước muốn sống, muốn thể hiện.",
    date: "2023-10-05",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 2,
    title: "NATURE'S EMBRACE - KẾT NỐI VỚI THIÊN NHIÊN",
    des: "Bộ sưu tập NATURE'S EMBRACE mang đến những thiết kế hòa quyện giữa con người và thiên nhiên, khuyến khích mọi người sống chậm lại và tận hưởng vẻ đẹp xung quanh.",
    date: "2023-09-20",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 3,
    title: "ELEGANCE REDEFINED - SỰ TÁI ĐỊNH NGHĨA VỀ SỰ THANH LỊCH",
    des: "Với ELEGANCE REDEFINED, chúng tôi muốn mang đến một cái nhìn mới về sự thanh lịch, nơi mà sự đơn giản và tinh tế hòa quyện để tạo nên phong cách độc đáo.",
    date: "2023-09-15",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 4,
    title: "URBAN VIBES - PHONG CÁCH THÀNH PHỐ",
    des: "Bộ sưu tập URBAN VIBES được thiết kế dành riêng cho những tín đồ yêu thích sự năng động và hiện đại của cuộc sống thành phố.",
    date: "2023-08-30",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 5,
    title: "RETRO REVIVAL - HÀNH TRÌNH TRỞ VỀ QUÁ KHỨ",
    des: "RETRO REVIVAL mang đến những thiết kế lấy cảm hứng từ những năm 80, 90, kết hợp giữa phong cách cổ điển và hiện đại.",
    date: "2023-08-25",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 6,
    title: "FEMININE CHARM - SỰ QUYẾN RŨ CỦA PHÁI ĐẸP",
    des: "Bộ sưu tập FEMININE CHARM tôn vinh vẻ đẹp nữ tính với những thiết kế mềm mại, duyên dáng và đầy quyến rũ.",
    date: "2023-07-10",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 7,
    title: "BOHEMIAN DREAM - GIẤC MƠ BOHEMIAN",
    des: "Bộ sưu tập BOHEMIAN DREAM mang đến sự tự do và phóng khoáng trong từng thiết kế, phù hợp cho những tâm hồn yêu thích sự khác biệt.",
    date: "2023-06-15",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 8,
    title: "CLASSIC BEAUTY - VẺ ĐẸP CỔ ĐIỂN",
    des: "Với CLASSIC BEAUTY, chúng tôi mang đến những thiết kế vượt thời gian, thể hiện sự thanh lịch và sang trọng.",
    date: "2023-05-20",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 9,
    title: "SPORTY CHIC - PHONG CÁCH THỂ THAO SANG TRỌNG",
    des: "Bộ sưu tập SPORTY CHIC kết hợp giữa sự thoải mái và phong cách, hoàn hảo cho những ai yêu thích hoạt động thể thao nhưng vẫn muốn giữ vẻ ngoài thời trang.",
    date: "2023-04-10",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
  {
    id: 10,
    title: "MINIMALIST AESTHETIC - VẺ ĐẸP TỐI GIẢN",
    des: "Bộ sưu tập MINIMALIST AESTHETIC mang đến sự đơn giản nhưng đầy tinh tế, phù hợp cho những ai yêu thích phong cách tối giản.",
    date: "2023-03-05",
    img: "/public/data/wild-soul_2a441ad635a848878e2ba6569f63bfaf_large.webp",
  },
];

const Posts = () => {
   const itemsPerPage = 4; // Số lượng item trên mỗi trang
  const gap = 18; // Khoảng cách giữa các item (px)
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.ceil(data.length / itemsPerPage) - 1; // Số lần chuyển tối đa

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full">
      <div className="w-[1280px] mx-auto px-2">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-3xl">Bài viết mới nhất</h1>
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
              disabled={currentIndex === maxIndex}
              onClick={handleNext}
              className={`text-[20px] ${
                currentIndex === maxIndex
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
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {data.map((category, index) => (
              <PostCard
                key={index}
                data={category}
                itemsPerPage={itemsPerPage}
                gap={gap}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

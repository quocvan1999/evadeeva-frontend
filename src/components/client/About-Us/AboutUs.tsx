import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full flex items-center justify-between py-10 gap-14">
      <div className="w-[60%]">
        <img
          src="/public/data/1000x6001.webp"
          alt="img"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-[40%] pe-28">
        <Link
          to="/"
          className="relative text-[23px] py-3 font-medium after:content-[''] after:w-12 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0"
        >
          𝐍𝐇𝐔̛ 𝐘́ - 𝐀𝐎 𝐃𝐀𝐈 𝟐𝟎𝟐𝟓 𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍
        </Link>
        <div className="mt-14">
          <p className="text-[17px] italic text-gray-600 text-justify">
            Sắc Xuân về trên mọi phố phường, bừng sáng không gian những ngày
            cuối năm. Ngập tràn sắc đào, mai nở rộ, nhuộm đất trời trong tấm áo
            mới rực rỡ. Tiếng nhạc Xuân rộn ràng cùng tiếng cười khúc khích của
            đám trẻ nhỏ, khắp nơi đều là niềm vui và háo hức đón chờ một năm mới
            sắp tới. Chọn cái tên 𝐍𝐡𝐮̛ 𝐘́ để dành cho bộ sưu tập Áo Dài Tết 2025,
            Eva De Eva muốn gửi gắm những ước vọng chân thành cho một năm mới
            đầy hy vọng và hạnh phúc. Mang trong mình câu chuyện của những ngày
            xuân tươi đẹp, BST là điểm gặp gỡ - nơi mà thời trang và cảm xúc
            quyện hòa tạo nên khúc hoan ca đậm đà bản sắc. Từng đường kim mũi
            chỉ, từng họa tiết hoa văn tinh xảo trên nền chất liệu lụa, tơ cao
            cấp, khéo léo khoe trọn vẻ đẹp thanh thoát, duyên dáng nhưng không
            kém phần rạng ngời của người phụ nữ Việt. Chẳng tự nhiên mà Áo Dài
            luôn là trang phục được phái đẹp yêu thích diện trong những dịp Tết
            đến Xuân về, hãy để Eva de Eva giúp nàng lưu giữ những khoảnh khắc
            và kỉ niệm đẹp trong ngày Tết truyền thống của dân tộc cùng tà Áo
            Dài thướt tha nhé!
          </p>
          <button className="w-full py-3 uppercase border border-black rounded-[5px] text-[13px] font-medium transition-all duration-500 ease-in-out hover:bg-black hover:text-white mt-7">
            Xem sản phẩm New Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

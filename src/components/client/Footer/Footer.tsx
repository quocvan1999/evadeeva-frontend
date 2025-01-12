import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-[1280px] mx-auto px-6 flex items-stretch">
        <div className="py-10 px-5 w-[calc(100%/4)]">
          <h1 className="font-[700] py-3">Văn phòng</h1>
          <img
            src="/public/imgs/logo-footer.webp"
            alt="logo"
            className="w-[65%] pb-2"
          />
          <div className="text-[14px]">
            <h3 className="font-[700] mb-2">CÔNG TY TNHH MTV MỸ PHỤC</h3>
            <p className="mb-2">
              <span className="font-[700]">Trụ sở chính: </span>133 Thái Hà,
              Phường Trung Liệt, Quận Đống Đa, Thành phố Hà Nội
            </p>
            <p className="mb-2">
              <span className="font-[700]">Điện thoại: </span>1800 1731
            </p>
            <p className="mb-2">
              <span className="font-[700]">Email: </span>
              onlinesale@evadeeva.com.vn
            </p>
          </div>
        </div>

        <div className="py-10 px-5 w-[calc(100%/4)] border-s border-[#333333]">
          <h1 className="font-[700] py-3">Thông tin liên hệ</h1>
          <ul className="text-[14px] list-disc ps-5">
            <li className="mb-2">Về chúng tôi</li>
            <li className="mb-2">Câu hỏi thường gặp</li>
            <li className="mb-2">Sự kiện</li>
            <li className="mb-2">Tin tức</li>
            <li className="mb-2">SAO & Eva</li>
            <li className="mb-2">Hệ thống</li>
            <li className="mb-2">Tuyển dụng</li>
          </ul>
        </div>

        <div className="py-10 px-5 w-[calc(100%/4)] border-s border-[#333]">
          <h1 className="font-[700] py-3">Chính sách bán hàng</h1>
          <ul className="text-[14px] list-disc ps-5">
            <li className="mb-2">Chính sách thanh toán</li>
            <li className="mb-2">Chính sách vận chuyển</li>
            <li className="mb-2">Chính sách đổi trả</li>
            <li className="mb-2">Chính sách bảo mật</li>
            <li className="mb-2">Chương trình thẻ VIP</li>
            <li className="mb-2">Hướng dẫn chọn size</li>
          </ul>
        </div>

        <div className="py-10 px-5 w-[calc(100%/4)] border-s border-[#333]">
          <h1 className="font-[700] py-3">Đăng ký nhận tin</h1>
          <p className="text-[14px]">
            Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và
            thông tin giảm giá khác.
          </p>
          <div className="py-5 flex items-center justify-start">
            <div className="relative w-[65%]">
              <input
                type="text"
                className="py-[8px] ps-8 pe-2 w-full focus:outline-none placeholder:text-[14px] placeholder:font-[600] text-black border-black rounded-s-[5px] text[14px] border-none font-[600]"
                placeholder="Tìm kiếm sản phẩm"
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <button className="text-[14px] font-[600] text-white rounded-e-[5px] uppercase w-[35%] bg-[#302d2d] py-[11px] border-none hover:bg-black transition-all duration-500 ease-in-out">
              đăng ký
            </button>
          </div>
          <div className="flex items-center gap-2 justify-start">
            <div className="w-8 h-8 rounded-md border hover:border-white flex items-center justify-center cursor-pointer hover:text-white text-[#ccc] border-[#ccc] transition-all duration-500 ease-in-out">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="w-8 h-8 rounded-md border hover:border-white flex items-center justify-center cursor-pointer hover:text-white text-[#ccc] border-[#ccc] transition-all duration-500 ease-in-out">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="w-8 h-8 rounded-md border hover:border-white flex items-center justify-center cursor-pointer hover:text-white text-[#ccc] border-[#ccc] transition-all duration-500 ease-in-out">
              <FontAwesomeIcon icon={faTiktok} />
            </div>
            <div className="w-8 h-8 rounded-md border hover:border-white flex items-center justify-center cursor-pointer hover:text-white text-[#ccc] border-[#ccc] transition-all duration-500 ease-in-out">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
          <div className="w-full py-4">
            <img
              src="/public/imgs/footer_logobct_img.webp"
              alt="logo bct"
              className="w-[60%]"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-[#333333] py-4">
        <p className="text-[13px] text-[#ccc] text-center">
          Copyright © 2025 Eva De Eva. Powered by Haravan
        </p>
      </div>
    </div>
  );
};

export default Footer;

import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Media = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 py-6 text-2xl font-medium text-center">
        Follow us on media
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[calc(100% / 4)] relative group">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-0 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center group-hover:opacity-60"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className=" w-20 h-20 bg-white opacity-100 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                className="text-blue-600"
                icon={faFacebookF}
                size="3x"
              />
            </div>
          </div>
          <img
            src="/public/imgs/1.webp"
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[calc(100% / 4)] relative group">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-0 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center group-hover:opacity-60"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className=" w-20 h-20 bg-white opacity-100 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                className="text-red-600"
                icon={faYoutube}
                size="3x"
              />
            </div>
          </div>
          <img
            src="/public/imgs/2.webp"
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[calc(100% / 4)] relative group">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-0 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center group-hover:opacity-60"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className=" w-20 h-20 bg-white opacity-100 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                className="text-black"
                icon={faTiktok}
                size="3x"
              />
            </div>
          </div>
          <img
            src="/public/imgs/3.webp"
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[calc(100% / 4)] relative group">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-0 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center group-hover:opacity-60"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className=" w-20 h-20 bg-white opacity-100 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                className="text-orange-400"
                icon={faInstagram}
                size="3x"
              />
            </div>
          </div>
          <img
            src="/public/imgs/4.webp"
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Media;

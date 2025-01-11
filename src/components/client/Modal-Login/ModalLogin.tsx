import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalLogin = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      props.setShowLoginModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute right-[-35px] top-12 transition-all duration-300 ease-in-out bg-white shadow-custome-dark-1 p-4 rounded-sm w-[350px] text-center ${
        props.showLoginModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <span className="absolute top-[-10px] right-[27px] w-8 h-auto">
        <svg
          viewBox="0 0 20 9"
          role="presentation"
          filter="drop-shadow(0 -3px 2px rgba(0, 0, 0, 0.055))"
        >
          <path
            d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
            fill="#ffffff"
          ></path>
        </svg>
      </span>
      <h1 className="uppercase font-[700] text-lg">đăng nhập tài khoản</h1>
      <p className="text-gray-500 text-[14px]">
        Nhập email và mật khẩu của bạn:
      </p>
      <hr className="mt-2 mb-4" />
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="border py-2 px-2 text-sm placeholder:text-sm focus:outline-none"
          placeholder="Email"
        />
        <input
          type="text"
          className="border py-2 px-2 text-sm placeholder:text-sm focus:outline-none"
          placeholder="Mật khẩu"
        />
      </div>
      <p className="text-gray-500 text-start text-[13px] pt-2 pb-3">
        This site is protected by reCAPTCHA and the
        <br /> Google{" "}
        <Link to="/" className="text-blue-700">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/" className="text-blue-700">
          Terms of Service
        </Link>{" "}
        apply.
      </p>
      <button className="w-full text-center py-2 bg-[#302d2d] text-white uppercase font-[700] rounded-[5px] text-sm transition-all duration-500 ease-in-out hover:bg-black">
        đăng nhập
      </button>
      <div className="mt-2 text-start text-[13px] text-gray-500">
        <p>
          Khách hàng mới?{" "}
          <NavLink to="/" className="text-black">
            Tạo tài khoản
          </NavLink>
        </p>
        <p>
          Quên mật khẩu?{" "}
          <NavLink to="/" className="text-black">
            Khôi phục mật khẩu
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ModalLogin;

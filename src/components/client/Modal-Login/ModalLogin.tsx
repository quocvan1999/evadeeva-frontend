import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalLogin = (props: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        props.setShowLoginModal(!props.showLoginModal);
      }
    };

    if (props.showLoginModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.showLoginModal, props.setShowLoginModal]);

  return (
    <div
      ref={modalRef}
      className={`absolute right-0 top-12 bg-white shadow-custome-dark-1 p-4 rounded-sm w-[350px] text-center ${
        props.showLoginModal ? "scale-100" : "scale-0"
      }`}
    >
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

import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = (props: Props) => {
  return (
    <div
      onClick={() => {
        props.setShowCart(false);
      }}
      className={`cursor-pointer z-10 fixed top-0 bottom-0 left-0 right-0 bg-[#00000028] transition-all duration-500 ease-in-out flex items-center justify-end ${
        props.showCart ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`h-full w-[35%] bg-white duration-500 transition-all ease-in-out ${
          props.showCart
            ? "translate-x-0 opacity-100"
            : "translate-x-[300px] opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full py-4 px-2 flex items-center justify-between border-b">
          <h1 className="font-bold">Giỏ hàng</h1>
          <div
            onClick={() => props.setShowCart(false)}
            className="w-8 h-8 rounded-full transition-all duration-500 ease-in-out hover:bg-[#cccccc50] flex items-center justify-center relative group"
          >
            <span className="block w-4 h-[2px] bg-black absolute rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"></span>
            <span className="block w-4 h-[2px] bg-black absolute -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"></span>
          </div>
        </div>
        <div className="w-full p-10">
          <div className="w-full flex justify-center">
            <img src="/public/data/cart_banner_image.webp" alt="cart img" />
          </div>
          <div className="text-center w-full font-[600]">
            <h2>Chưa có sản phẩm trong giỏ hàng</h2>
            <div className="flex items-center justify-between py-2 text-blue-700 underline font-normal">
              <NavLink to="/">Trở về trang sản phẩm</NavLink>
              <NavLink to="/">Khuyến mãi dành cho bạn</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

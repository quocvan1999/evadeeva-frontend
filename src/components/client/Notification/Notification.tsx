import React from "react";

type Props = {
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
};

const Notification = (props: Props) => {
  return (
    <div
      onMouseEnter={() => props.setShowNotification(true)}
      onMouseLeave={() => props.setShowNotification(false)}
      className={`w-[400px] min-h-[100px] bg-white absolute transition-all duration-500 z-20 ease-in-out right-[60px] top-[35px] shadow-custome-dark-1 ${
        props.showNotification
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
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
      <ul className="w-full px-4 py-3">
        <li className="py-2 text-black cursor-pointer">
          <h1 className="font-[600] text-[13px] py-2">
            WILD SOUL - BST CHẠM ĐẾN VẺ ĐẸP CỦA TÂM HỒN TỰ DO
          </h1>
          <p className="text-[13px]">
            02/08/2023 - <span className="text-blue-700">Xem chi tiết</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Notification;

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Notification from "../Notification/Notification";

const HeaderInfo = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  return (
    <div className="bg-black w-full">
      <div className="w-full text-white flex items-center justify-between px-2 max-w-[1280px] mx-auto py-1 text-sm">
        <div className="flex items-center gap-3">
          <p>
            Hotline CSKH: <span className="font-bold">18001731</span> - Hotline
            mua hàng: <span className="font-bold">18001732</span>
          </p>
          <span className="h-4 w-[0.2px] block bg-white"></span>
          <p>Hệ thống showroom</p>
        </div>
        <div
          className="flex relative items-center gap-3 cursor-pointer"
          onMouseEnter={() => setShowNotification(true)}
          onMouseLeave={() => setShowNotification(false)}
        >
          <FontAwesomeIcon
            icon={faBell}
            size="xl"
            style={{ color: "#ffffff" }}
          />
          <p>Thông báo của tôi</p>
          <Notification
            showNotification={showNotification}
            setShowNotification={setShowNotification}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;

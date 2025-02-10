import { App } from "antd";
import { useEffect, useState } from "react";

const useNotification = () => {
  const { notification } = App.useApp();
  const [contentNotification, setContentNotification] = useState<{
    message: string;
    description: string;
    type: "success" | "info" | "warning" | "error";
  }>({
    message: "",
    description: "",
    type: "success",
  });

  useEffect(() => {
    if (contentNotification.message || contentNotification.description) {
      notification.open({
        message: contentNotification.message,
        description: contentNotification.description,
        placement: "bottomRight",
        type: contentNotification.type,
        showProgress: true,
        pauseOnHover: true,
      });
    }
  }, [contentNotification]);

  return { setContentNotification };
};

export default useNotification;

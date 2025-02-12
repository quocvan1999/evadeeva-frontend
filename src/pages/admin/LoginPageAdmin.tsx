import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import useCheckLogin from "../../hooks/useCheckLogin";
import LoadingPage from "../../components/admin/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../components/admin/LoginPage/LoginPage";
import ForgotSendMail from "../../components/admin/ForgotSendMail/ForgotSendMail";

const LoginPageAdmin = () => {
  const navigate = useNavigate();
  const [isPage, setIsPage] = useState<
    "login" | "forgotSendMail" | "sendCode" | "forgotPassword"
  >("login");
  const { checkIsLogin, isLogin } = useCheckLogin();

  useEffect(() => {
    checkIsLogin();
  }, []);

  useEffect(() => {
    switch (isLogin) {
      case "true":
        navigate("/admin");
        break;
      default:
        break;
    }
  }, [isLogin]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
      }}
    >
      {isLogin === "false" ? (
        <div className="w-full h-[100vh] flex items-center justify-center gap-20">
          <div className="w-[50%] h-full">
            <img
              src="/public//imgs/login_banner.svg"
              alt="login banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[50%] h-full flex flex-col items-start justify-center">
            <div className="flex flex-col justify-center items-center gap-3 min-w-[400px]">
              <img src="/public/imgs/logo.webp" alt="logo" />
              {isPage === "login" ? (
                <LoginPage isPage={isPage} setIsPage={setIsPage} />
              ) : (
                <ForgotSendMail isPage={isPage} setIsPage={setIsPage} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </ConfigProvider>
  );
};

export default LoginPageAdmin;

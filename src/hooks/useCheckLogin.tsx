import { useState } from "react";
import { RefreshTokenResponseType, ResponseType } from "../types/types.type";
import { refreshTokenService } from "../services/admin/loginPage/loginPage.service";
import { getCookie, isTokenExpired, setCookie } from "../utils/currencyUtils";

const useCheckLogin = () => {
  const [isLogin, setIsLogin] = useState<"pedding" | "true" | "false">(
    "pedding"
  );

  const getNewAccessToken = async () => {
    try {
      const getRefreshToken: ResponseType<RefreshTokenResponseType> =
        await refreshTokenService();

      switch (getRefreshToken.statusCode) {
        case 200:
          setCookie("accessToken", getRefreshToken.content.token || "", 1);
          setIsLogin("true");
          break;
        default:
          setIsLogin("false");
          break;
      }
    } catch (error) {
      setIsLogin("false");
      throw error;
    }
  };

  const checkIsLogin = () => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      const checkAccessToken = isTokenExpired(accessToken);

      if (checkAccessToken) {
        getNewAccessToken();
      } else {
        setIsLogin("true");
      }
    } else {
      getNewAccessToken();
    }
  };

  return { checkIsLogin, isLogin };
};

export default useCheckLogin;

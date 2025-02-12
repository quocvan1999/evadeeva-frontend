import axios, { AxiosResponse } from "axios";
import {
  CheckAccountResponseType,
  GetCodeResponseType,
  LoginResponseType,
  LoginType,
  RefreshTokenResponseType,
  ResponseType,
} from "../../../types/types.type";

const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (
  values: LoginType
): Promise<ResponseType<LoginResponseType>> => {
  try {
    const res: AxiosResponse = await axios.post(
      `${API_URL}/api/auth/login`,
      values,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error: any) {
    return Promise.reject(error.response?.data);
  }
};

export const refreshTokenService = async (): Promise<
  ResponseType<RefreshTokenResponseType>
> => {
  try {
    const res: AxiosResponse = await axios.post(
      `${API_URL}/api/auth/getRefreshToken`,
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCodeService = async (values: {
  email: string;
}): Promise<ResponseType<GetCodeResponseType>> => {
  try {
    const res: AxiosResponse = await axios.post(
      `${API_URL}/api/auth/forgot-password`,
      values,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error: any) {
    return Promise.reject(error.response?.data);
  }
};

export const checkAccountService = async (
  values: LoginType
): Promise<ResponseType<CheckAccountResponseType>> => {
  try {
    const res: AxiosResponse = await axios.post(
      `${API_URL}/api/auth/check-account`,
      values,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error: any) {
    return Promise.reject(error.response?.data);
  }
};

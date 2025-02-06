import axios, { AxiosResponse } from "axios";
import {
  LoginResponseType,
  LoginType,
  ResponseType,
} from "../../../types/types.type";

export const loginService = async (
  values: LoginType
): Promise<ResponseType<LoginResponseType>> => {
  try {
    const res: AxiosResponse = await axios.post(
      "http://localhost:8080/api/auth/login",
      values,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

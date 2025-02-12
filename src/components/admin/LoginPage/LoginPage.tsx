import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import {
  LoginResponseType,
  LoginType,
  ResponseType,
} from "../../../types/types.type";
import {
  decryptPassword,
  encryptPassword,
  getCookie,
  setCookie,
} from "../../../utils/currencyUtils";
import useNotification from "../../../hooks/useNotification";
import {
  checkAccountService,
  loginService,
} from "../../../services/admin/loginPage/loginPage.service";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

type Props = {
  isPage: "login" | "forgotSendMail" | "sendCode" | "forgotPassword";
  setIsPage: React.Dispatch<
    React.SetStateAction<
      "login" | "forgotSendMail" | "sendCode" | "forgotPassword"
    >
  >;
};

const initialValues: LoginType = {
  email: "",
  password: "",
};

const LoginPage = (props: Props) => {
  const navigate = useNavigate();
  const [isRememberPassword, setIsRememberPassword] = useState<boolean>(false);
  const { setContentNotification } = useNotification();

  const handleLogin = async (values: LoginType) => {
    try {
      const login: ResponseType<LoginResponseType> = await loginService(values);

      switch (login.statusCode) {
        case 200:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Đăng nhập thành công.",
            type: "success",
          });
          setCookie("accessToken", login.content.token || "", 1);
          navigate("/admin");
          break;
        default:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Đăng nhập không thành công.",
            type: "error",
          });
          break;
      }
    } catch (error: any) {
      switch (error?.statusCode) {
        case 404:
          setContentNotification({
            message: "Đăng nhập!",
            description:
              "Thông tin người dùng không tồn tại hoặc không chính xác.",
            type: "error",
          });
          break;
        case 401:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Mật khẩu không chính xác.",
            type: "error",
          });
          break;
        default:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Đăng nhập không thành công.",
            type: "error",
          });
          break;
      }
    }
  };

  const checkAccount = async (values: LoginType) => {
    try {
      const login: ResponseType<LoginResponseType> = await checkAccountService(
        values
      );

      switch (login.statusCode) {
        case 200:
          handleLogin(values);
          break;
        default:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Đăng nhập không thành công.",
            type: "error",
          });
          break;
      }
    } catch (error: any) {
      switch (error?.statusCode) {
        case 400:
          setContentNotification({
            message: "Đăng nhập!",
            description:
              "Thông tin người dùng không tồn tại hoặc không chính xác.",
            type: "error",
          });
          break;
        case 401:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Người dùng không có quyền truy cập.",
            type: "error",
          });
          break;
        default:
          setContentNotification({
            message: "Đăng nhập!",
            description: "Đăng nhập không thành công.",
            type: "error",
          });
          break;
      }
    }
  };

  const formLogin = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng"),
      password: Yup.string().required("Password không được để trống"),
    }),
    onSubmit: (values) => {
      if (isRememberPassword) {
        const decMail = encryptPassword(values.email);
        const decPass = encryptPassword(values.password);

        setCookie("A_c", decMail, 15);
        setCookie("P_w", decPass, 15);
      }

      checkAccount(values);
    },
  });

  const getInfoLogin = () => {
    const email = getCookie("A_c");
    const password = getCookie("P_w");

    if (email && password) {
      formLogin.setFieldValue("email", decryptPassword(email));
      formLogin.setFieldValue("password", decryptPassword(password));
    }
  };

  useEffect(() => {
    props.isPage === "login" && getInfoLogin();
  }, []);

  return (
    <Form
      layout="vertical"
      onSubmitCapture={formLogin.handleSubmit}
      style={{ width: "100%" }}
    >
      <Form.Item
        validateStatus={
          formLogin.touched.email && formLogin.errors.email ? "error" : ""
        }
        help={formLogin.touched.email && formLogin.errors.email}
      >
        <Input
          allowClear
          size="large"
          name="email"
          placeholder="Nhập email"
          value={formLogin.values.email}
          onChange={formLogin.handleChange}
          onBlur={formLogin.handleBlur}
        />
      </Form.Item>
      <Form.Item
        validateStatus={
          formLogin.touched.password && formLogin.errors.password ? "error" : ""
        }
        help={formLogin.touched.password && formLogin.errors.password}
      >
        <Input.Password
          allowClear
          size="large"
          name="password"
          placeholder="Nhập mật khẩu"
          value={formLogin.values.password}
          onChange={formLogin.handleChange}
          onBlur={formLogin.handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <div className="flex items-center justify-between">
          <Checkbox
            checked={isRememberPassword}
            onChange={() => setIsRememberPassword(!isRememberPassword)}
          >
            Nhớ mật khẩu
          </Checkbox>
          <p
            onClick={() => props.setIsPage("forgotSendMail")}
            className="hover:opacity-70 hover:underline transition-all duration-500 ease-in-out cursor-pointer"
          >
            Quên mật khẩu?
          </p>
        </div>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          htmlType="submit"
        >
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;

import { getIn, useFormik } from "formik";
import * as Yup from "yup";
import {
  LoginResponseType,
  LoginType,
  ResponseType,
} from "../../types/types.type";
import { Button, Checkbox, ConfigProvider, Form, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/admin/loginPage/loginPage.service";
import {
  decryptPassword,
  encryptPassword,
  getCookie,
  setCookie,
} from "../../utils/currencyUtils";
import { useEffect, useState } from "react";
import useCheckLogin from "../../hooks/useCheckLogin";
import useNotification from "../../hooks/useNotification";

const initialValues: LoginType = {
  email: "",
  password: "",
};

const LoginPageAdmin = () => {
  const navigate = useNavigate();
  const [isRememberPassword, setIsRememberPassword] = useState<boolean>(false);
  const { checkIsLogin, isLogin } = useCheckLogin();
  const { setContentNotification } = useNotification();

  const handleLogin = async (values: LoginType) => {
    try {
      const login: ResponseType<LoginResponseType> = await loginService(values);

      switch (login.statusCode) {
        case 200:
          setContentNotification({
            message: "Đăng nhập",
            description: "Đăng nhập thành công!",
            type: "success",
          });
          setCookie("accessToken", login.content.token || "", 1);
          navigate("/admin");
          break;
        default:
          setContentNotification({
            message: "Đăng nhập",
            description: "Đăng nhập không thành công!",
            type: "error",
          });
          break;
      }
    } catch (error: any) {
      switch (error?.statusCode) {
        case 404:
          setContentNotification({
            message: "Đăng nhập",
            description:
              "Thông tin người dùng không tồn tại hoặc không chính xác!",
            type: "error",
          });
          break;
        case 401:
          setContentNotification({
            message: "Đăng nhập",
            description: "Mật khẩu không chính xác.",
            type: "error",
          });
          break;
        default:
          setContentNotification({
            message: "Đăng nhập",
            description: "Đăng nhập không thành công!",
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

      handleLogin(values);
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
    checkIsLogin();
    getInfoLogin();
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

              <Form
                layout="vertical"
                onSubmitCapture={formLogin.handleSubmit}
                style={{ width: "100%" }}
              >
                <Form.Item
                  validateStatus={
                    formLogin.touched.email && formLogin.errors.email
                      ? "error"
                      : ""
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
                    formLogin.touched.password && formLogin.errors.password
                      ? "error"
                      : ""
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
                  <Checkbox
                    checked={isRememberPassword}
                    onChange={() => setIsRememberPassword(!isRememberPassword)}
                  >
                    Nhớ mật khẩu
                  </Checkbox>
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
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </ConfigProvider>
  );
};

export default LoginPageAdmin;

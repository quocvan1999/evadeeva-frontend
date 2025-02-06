import { useFormik } from "formik";
import * as Yup from "yup";
import {
  LoginResponseType,
  LoginType,
  ResponseType,
} from "../../types/types.type";
import { Button, ConfigProvider, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/admin/loginPage/loginPage.service";
import { setCookie } from "../../utils/currencyUtils";

const initialValues: LoginType = {
  email: "",
  password: "",
};

const LoginPageAdmin = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: LoginType) => {
    const login: ResponseType<LoginResponseType> = await loginService(values);

    switch (login.statusCode) {
      case 200:
        setCookie("accessToken", login.content.token || "", 1);
        navigate("/admin");
        break;
      default:
        break;
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
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
      }}
    >
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
    </ConfigProvider>
  );
};

export default LoginPageAdmin;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input } from "antd";
import useNotification from "../../../hooks/useNotification";
import {
  ForgotPasswordType,
  ForotPasswordResponseType,
  ResponseType,
} from "../../../types/types.type";
import { ForgotpasswordService } from "../../../services/admin/loginPage/loginPage.service";

type Props = {
  isPage: "login" | "forgotSendMail" | "sendCode" | "forgotPassword";
  setIsPage: React.Dispatch<
    React.SetStateAction<
      "login" | "forgotSendMail" | "sendCode" | "forgotPassword"
    >
  >;
};

const initialValues: { newPassword: string; confirmPassword: string } = {
  newPassword: "",
  confirmPassword: "",
};

const ForgotPassword = (props: Props) => {
  const { setContentNotification } = useNotification();

  const handleForgotPassword = async (newPassword: string) => {
    try {
      const email: string = localStorage.getItem("r_p_m") || "";

      const newValue: ForgotPasswordType = {
        email: email,
        password: newPassword,
      };

      const forgot: ResponseType<ForotPasswordResponseType> =
        await ForgotpasswordService(newValue);

      switch (forgot.statusCode) {
        case 200:
          setContentNotification({
            message: "Đổi mật khẩu!",
            description: forgot.content.message || "",
            type: "success",
          });

          setTimeout(() => {
            props.setIsPage("login");
            localStorage.removeItem("r_p_m");
          }, 500);
          break;
        default:
          setContentNotification({
            message: "Đổi mật khẩu!",
            description: forgot.content.message || "",
            type: "error",
          });
          break;
      }
    } catch (error: any) {
      setContentNotification({
        message: "Đổi mật khẩu!",
        description: error?.content.error || "Đổi mật khẩu không thành công.",
        type: "error",
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Vui lòng nhập mật khẩu mới"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng nhập lại mật khẩu mới"),
    }),
    onSubmit: (value) => {
      handleForgotPassword(value.newPassword);
    },
  });
  return (
    <Form
      layout="vertical"
      onSubmitCapture={formik.handleSubmit}
      style={{ width: "100%" }}
    >
      <Form.Item
        validateStatus={
          formik.touched.newPassword && formik.errors.newPassword ? "error" : ""
        }
        help={formik.touched.newPassword && formik.errors.newPassword}
      >
        <Input.Password
          allowClear
          size="large"
          name="newPassword"
          placeholder="Nhập mật khẩu mới"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        validateStatus={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? "error"
            : ""
        }
        help={formik.touched.confirmPassword && formik.errors.confirmPassword}
      >
        <Input.Password
          allowClear
          size="large"
          name="confirmPassword"
          placeholder="Nhập xác nhận mật khẩu mới"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          htmlType="submit"
        >
          Đổi mật khẩu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotPassword;

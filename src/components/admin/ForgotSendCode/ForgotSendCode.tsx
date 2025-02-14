import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useNotification from "../../../hooks/useNotification";
import { Button, Form, Input } from "antd";
import {
  CheckCodeResponseType,
  CheckCodeType,
  ResponseType,
} from "../../../types/types.type";
import { checkCodeService } from "../../../services/admin/loginPage/loginPage.service";

type Props = {
  isPage: "login" | "forgotSendMail" | "sendCode" | "forgotPassword";
  setIsPage: React.Dispatch<
    React.SetStateAction<
      "login" | "forgotSendMail" | "sendCode" | "forgotPassword"
    >
  >;
};

const initialValues: { code: string } = {
  code: "",
};

const ForgotSendCode = (props: Props) => {
  const { setContentNotification } = useNotification();

  const handleForgotSendCode = async (value: string) => {
    try {
      const email: string = localStorage.getItem("otp_m") || "";

      const newValue: CheckCodeType = {
        otp: value,
        email: email,
      };

      const checkCode: ResponseType<CheckCodeResponseType> =
        await checkCodeService(newValue);

      switch (checkCode.statusCode) {
        case 200:
          setContentNotification({
            message: "Nhập OTP!",
            description: checkCode.content.message || "",
            type: "success",
          });
          break;
        default:
          setContentNotification({
            message: "Nhập OTP!",
            description: checkCode.content.message || "",
            type: "error",
          });
          break;
      }
    } catch (error: any) {
      setContentNotification({
        message: "Nhập OTP!",
        description: error?.content.error || "Xác thực OTP không thành công.",
        type: "error",
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      code: Yup.string()
        .length(6, "OTP phải có 6 ký tự")
        .required("Vui lòng nhập OTP"),
    }),
    onSubmit: (value) => {
      handleForgotSendCode(value.code);
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^[0-9]$/.test(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <Form layout="vertical" onFinish={formik.handleSubmit}>
      <Form.Item
        label="Nhập OTP"
        validateStatus={
          formik.touched.code && formik.errors.code ? "error" : ""
        }
        help={formik.touched.code && formik.errors.code}
      >
        <Input.OTP
          size="large"
          length={6}
          value={formik.values.code}
          onChange={(value) => formik.setFieldValue("code", value)}
          onInput={(values) => {
            formik.setFieldValue("code", values.join(""));
            formik.setFieldTouched("code", true);
          }}
          onBlur={() => formik.setFieldTouched("code", true)}
          onKeyDown={handleKeyDown}
        />
      </Form.Item>
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        style={{ width: "100%" }}
      >
        Xác nhận
      </Button>
    </Form>
  );
};

export default ForgotSendCode;

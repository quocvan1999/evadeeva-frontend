import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useNotification from "../../../hooks/useNotification";
import { Button, Form, Input } from "antd";
import {
  CheckCodeResponseType,
  CheckCodeType,
  GetCodeResponseType,
  ResponseType,
} from "../../../types/types.type";
import {
  checkCodeService,
  getCodeService,
} from "../../../services/admin/loginPage/loginPage.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

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
  const [isCountDown, setIsCountDown] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 0,
    seconds: 0,
  });

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
          setTimeout(() => {
            props.setIsPage("forgotPassword");
            localStorage.removeItem("otp_m");
          }, 500);
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

  const onReloadOTP = async () => {
    const getMail = localStorage.getItem("otp_m");

    if (!getMail) {
      setContentNotification({
        message: "Quên mật khẩu!",
        description: "Lấy mã xác thực không thành công.",
        type: "error",
      });
    }

    try {
      if (getMail) {
        const getCode: ResponseType<GetCodeResponseType> = await getCodeService(
          {
            email: getMail,
          }
        );

        switch (getCode.statusCode) {
          case 200:
            setContentNotification({
              message: "Quên mật khẩu!",
              description: getCode.content.message || "",
              type: "success",
            });
            setIsCountDown(true);
            break;
          default:
            setContentNotification({
              message: "Quên mật khẩu!",
              description: getCode.content.message || "",
              type: "error",
            });
            setIsCountDown(false);
            break;
        }
      }
    } catch (error: any) {
      setContentNotification({
        message: "Quên mật khẩu!",
        description:
          error?.content.error || "Lấy mã xác thực không thành công.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    setIsCountDown(true);
  }, []);

  useEffect(() => {
    if (isCountDown) {
      const targetDate = new Date(new Date().getTime() + 0.1 * 60 * 1000);

      const interval = setInterval(() => {
        const now = new Date();
        const distance = targetDate.getTime() - now.getTime();

        if (distance <= 0) {
          clearInterval(interval);
          setIsCountDown(false);
          setTimeLeft({ minutes: 0, seconds: 0 });
          return;
        }

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ minutes, seconds });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isCountDown]);

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
      <Form.Item>
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 py-2 ${
              !isCountDown && "text-gray-400"
            }`}
          >
            <p>Lấy lại mã OTP sau:</p>
            <p className="flex items-center gap-2">
              {timeLeft.minutes}:{timeLeft.seconds}
              {!isCountDown && (
                <FontAwesomeIcon
                  icon={faRotateRight}
                  className="text-black cursor-pointer"
                  onClick={() => onReloadOTP()}
                />
              )}
            </p>
          </div>
          <p
            className="hover:opacity-70 hover:text-gray-500 hover:underline transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => props.setIsPage("login")}
          >
            Trở về trang đăng nhập.
          </p>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ForgotSendCode;

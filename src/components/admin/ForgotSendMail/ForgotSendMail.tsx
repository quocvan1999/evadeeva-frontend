import { useFormik } from "formik";
import * as Yup from "yup";
import useNotification from "../../../hooks/useNotification";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { GetCodeResponseType, ResponseType } from "../../../types/types.type";
import { getCodeService } from "../../../services/admin/loginPage/loginPage.service";

type Props = {
  isPage: "login" | "forgotSendMail" | "sendCode" | "forgotPassword";
  setIsPage: React.Dispatch<
    React.SetStateAction<
      "login" | "forgotSendMail" | "sendCode" | "forgotPassword"
    >
  >;
};

const initialValues: { email: string } = {
  email: "",
};

const ForgotSendMail = (props: Props) => {
  const navigate = useNavigate();
  const { setContentNotification } = useNotification();

  const handleForgotSendMail = async (values: { email: string }) => {
    try {
      const getCode: ResponseType<GetCodeResponseType> = await getCodeService(
        values
      );

      switch (getCode.statusCode) {
        case 200:
          setContentNotification({
            message: "Quên mật khẩu!",
            description:
              "Lấy mã xác thực thành công, kiểm tra email để nhận mã.",
            type: "success",
          });
          break;
        default:
          setContentNotification({
            message: "Quên mật khẩu!",
            description: "Lấy mã xác thực không thành công.",
            type: "error",
          });
          break;
      }
    } catch (error: any) {
      switch (error?.statusCode) {
        case 400:
          setContentNotification({
            message: "Quên mật khẩu!",
            description:
              "Người dùng không tồn tại hoặc thông tin không chính xác.",
            type: "error",
          });
          break;
        case 404:
          setContentNotification({
            message: "Quên mật khẩu!",
            description: "Lấy mã xác thực không thành công.",
            type: "error",
          });
          break;
        default:
          setContentNotification({
            message: "Quên mật khẩu!",
            description: "Lấy mã xác thực không thành công.",
            type: "error",
          });
          break;
      }
    }
  };

  const formForgotSendMail = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng"),
    }),
    onSubmit: (values) => {
      handleForgotSendMail(values);
    },
  });

  return (
    <Form
      layout="vertical"
      onSubmitCapture={formForgotSendMail.handleSubmit}
      style={{ width: "100%" }}
    >
      <Form.Item
        validateStatus={
          formForgotSendMail.touched.email && formForgotSendMail.errors.email
            ? "error"
            : ""
        }
        help={
          formForgotSendMail.touched.email && formForgotSendMail.errors.email
        }
      >
        <Input
          allowClear
          size="large"
          name="email"
          placeholder="Nhập email để đặt lại mật khẩu"
          value={formForgotSendMail.values.email}
          onChange={formForgotSendMail.handleChange}
          onBlur={formForgotSendMail.handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          style={{ width: "100%" }}
          size="large"
          htmlType="submit"
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotSendMail;

import { Spin } from "antd";

const LoadingPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default LoadingPage;

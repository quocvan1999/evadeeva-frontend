import { Outlet } from "react-router-dom";

type Props = {};

const MainAdmin = (props: Props) => {
  return (
    <div className="w-full h-[100vh]">
      <Outlet />
    </div>
  );
};

export default MainAdmin;

import { Outlet } from "react-router-dom";
import Header from "../../components/client/Header/Header";

const MainClient = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainClient;

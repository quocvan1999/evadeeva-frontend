import { Outlet } from "react-router-dom";
import Header from "../../components/client/Header/Header";
import Footer from "../../components/client/Footer/Footer";

const MainClient = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainClient;

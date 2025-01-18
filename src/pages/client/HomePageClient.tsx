import Caroucel from "../../components/client/Caroucel/Caroucel";
import FeaturedCategories from "../../components/client/Featured-Categories/FeaturedCategories";
import SaleContainer from "../../components/client/Sale-Container/SaleContainer";

const HomePageClient = () => {
  return (
    <div className="w-full">
      <Caroucel />
      <FeaturedCategories/>
      <SaleContainer/>
    </div>
  );
};

export default HomePageClient;

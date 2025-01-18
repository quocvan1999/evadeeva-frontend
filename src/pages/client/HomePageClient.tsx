import AboutUs from "../../components/client/About-Us/AboutUs";
import Caroucel from "../../components/client/Caroucel/Caroucel";
import FeaturedCategories from "../../components/client/Featured-Categories/FeaturedCategories";
import ProductTabs from "../../components/client/Product-Tabs/ProductTabs";
import SaleContainer from "../../components/client/Sale-Container/SaleContainer";

const HomePageClient = () => {
  const tabs1 = [
    {
      id: 0,
      title: "Hàng mới về",
      data: [
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 0,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 0,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 0,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 0,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 0,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
      ],
    },
    {
      id: 1,
      title: "EOSS 70% ALL",
      data: [
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
      ],
    },
    {
      id: 2,
      title: "Sản Phẩm Khác",
      data: [
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
        {
          name: "Áo khoác kiểu, 24AJKC007X",
          price: 799500,
          original_price: 1599000,
          discount: 50,
          image: "/public/data/dam.webp",
          hoverImage:
            "/public/data/24adke072f_9bdab4b56c094f57bc7da6fc153875c5_master.webp",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Caroucel />
      <FeaturedCategories />
      <SaleContainer />
      <ProductTabs tabsData={tabs1} />
      <AboutUs/>
    </div>
  );
};

export default HomePageClient;

import { useState } from "react";
import CardProduct from "../Card-Product/CardProduct";

type Props = {
  tabsData: {
    id: number;
    title: string;
    data: {
      name: string;
      price: number;
      original_price: number;
      discount: number;
      image: string;
      hoverImage: string;
    }[];
  }[];
};

const ProductTabs = (props: Props) => {
  const [tabIsActive, setTabIsActive] = useState<number>(0);
  const itemsPerPage: number = 5;
  const gap: number = 5;

  return (
    <div className="w-[1280px] mx-auto px-2 py-10">
      <div className="w-full flex items-center justify-center gap-5">
        {props.tabsData.map((item, index) => (
          <button
            key={index}
            className={`relative text-2xl font-normal py-3 transition-all duration-500 ease-in-out text-gray-600 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 ${
              tabIsActive === item.id && "!text-black before:scale-x-100"
            }`}
            onClick={() => setTabIsActive(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="w-full pt-5">
        {props.tabsData.map(
          (tabData, index) =>
            tabData.id === tabIsActive && (
              <>
                <div
                  key={index}
                  className={`flex flex-wrap items-start justify-start gap-${gap}`}
                >
                  {tabData.data.map((item, _) => (
                    <CardProduct
                      key={index}
                      gap={gap}
                      itemsPerPage={itemsPerPage}
                      item={item}
                      type="nomal"
                    />
                  ))}
                </div>
                <div className="w-full flex items-center justify-center mt-10">
                  <button className="uppercase bg-white border text-[14px] font-[500] py-3 px-4 transition-all duration-500 ease-in-out hover:bg-black hover:text-white border-black rounded-[5px]">
                    Xem tất cả{" "}
                    <span className="font-bold">{tabData.title}</span>
                  </button>
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default ProductTabs;

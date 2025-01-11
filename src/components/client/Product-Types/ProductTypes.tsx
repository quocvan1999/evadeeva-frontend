type Props = {
  showProdctTypes: boolean;
  setShowProductTypes: React.Dispatch<React.SetStateAction<boolean>>;
};

const data = [
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
  { title: "Đầm", img: "/public/data/dam.webp" },
];

const ProductTypes = (props: Props) => {
  return (
    <div
      onMouseEnter={() => props.setShowProductTypes(true)}
      onMouseLeave={() => props.setShowProductTypes(false)}
      className={`absolute overflow-y-scroll z-10 left-0 right-0 w-full h-[80vh] transition-all duration-500 ease-in-out py-4 border-t-2 bg-white shadow-lg ${
        props.showProdctTypes
          ? "flex z-50 translate-y-6 opacity-100"
          : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[1024px] mx-auto flex flex-wrap gap-3">
        {data.map((item, index) => (
          <div key={index} className="w-[calc((100%-36px)/4)] cursor-pointer">
            <img
              src={item.img}
              alt={`img-${index}`}
              className="w-full h-auto"
            />
            <p className="font-bold text-center py-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTypes;

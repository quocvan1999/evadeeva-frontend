type Props = {
  showProdctTypes: boolean;
  setShowProductTypes: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductTypes = (props: Props) => {
  return (
    <div
      onMouseEnter={() => props.setShowProductTypes(true)}
      onMouseLeave={() => props.setShowProductTypes(false)}
      className={`absolute left-0 right-0 w-full h-[80vh] transition-all duration-500 ease-in-out py-4 border-t-2 bg-white shadow-lg ${
        props.showProdctTypes
          ? "flex z-50 translate-y-6 opacity-100"
          : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[1024px] mx-auto flex gap-3">
        <div className="w-[calc((100%-12px)/4)] cursor-pointer">
          <img
            src="/public/data/dam.webp"
            alt="img"
            className="w-full h-auto"
          />
          <p className="font-bold text-center py-2">Đầm</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;

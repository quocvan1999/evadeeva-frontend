const Services = () => {
  return (
    <div className="border-t py-6">
      <div className="max-w-[1280px] px-2 mx-auto flex items-start justify-between gap-6 text-[15px]">
        <div className="w-[calc((100%-72px)/4)] flex items-start justify-between">
          <div className="w-[20%]">
            <img
              src="/public/imgs/home_policy_icon_1.webp"
              alt="icon 1"
              className="w-[80%]"
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-medium mb-2">Miễn phí vận chuyển</h1>
            <p>Miễn phí đơn hàng từ 699.000đ</p>
          </div>
        </div>

        <div className="w-[calc((100%-72px)/4)] flex items-start justify-between">
          <div className="w-[20%]">
            <img
              src="/public/imgs/home_policy_icon_2.webp"
              alt="icon 1"
              className="w-[80%]"
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-medium mb-2">Miễn phí cước đổi hàng</h1>
            <p>Đổi trả hàng sau 7 ngày nếu không vừa ý</p>
          </div>
        </div>

        <div className="w-[calc((100%-72px)/4)] flex items-start justify-between">
          <div className="w-[20%]">
            <img
              src="/public/imgs/home_policy_icon_3.webp"
              alt="icon 1"
              className="w-[80%]"
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-medium mb-2">Tổng Đài Bán Hàng Miễn Phí</h1>
            <p>
              Gọi <span className="font-medium">1800.1732</span> để được tư vấn
            </p>
          </div>
        </div>

        <div className="w-[calc((100%-72px)/4)] flex items-start justify-between">
          <div className="w-[20%]">
            <img
              src="/public/imgs/home_policy_icon_4.webp"
              alt="icon 1"
              className="w-[80%]"
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-medium mb-2">Thanh toán đa dạng</h1>
            <p>Phương thức thanh toán đa dạng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

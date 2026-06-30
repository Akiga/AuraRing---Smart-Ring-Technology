import ring from "../assets/images/ring.webp";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-blue-500 font-semibold mb-3">
            SMART RING
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Aura Ring X
          </h1>

          <h2 className="text-gray-300 mt-5">
            Tương lai của chăm sóc sức khỏe thông minh
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Theo dõi nhịp tim, giấc ngủ, mức độ căng thẳng và các hoạt động hàng ngày của bạn với độ chính xác cao nhờ công nghệ AI. Thiết kế nhỏ gọn, thời trang và phù hợp với cuộc sống thường nhật.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-blue-600 px-8 py-4 rounded-xl text-white">
              Mua Ngay
            </button>

            <button className="border border-gray-500 px-8 py-4 rounded-xl text-white">
              Tìm Hiểu Thêm
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src={ring}
            alt="Aura Ring"
            className="w-[500px]"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;
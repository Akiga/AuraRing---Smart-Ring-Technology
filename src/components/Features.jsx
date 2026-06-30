import Reveal from "./Reveal";

const features = [
  {
    icon: "✨",
    title: "Thiết kế cao cấp",
    description:
      "Thiết kế tối giản, sang trọng với chất liệu cao cấp, phù hợp cho mọi phong cách.",
  },
  {
    icon: "⚡",
    title: "Công nghệ thông minh",
    description:
      "Theo dõi sức khỏe, hoạt động hằng ngày và mang đến trải nghiệm tiện lợi.",
  },
  {
    icon: "🔋",
    title: "Pin lâu dài",
    description:
      "Thời lượng pin tối ưu giúp bạn sử dụng liên tục mà không cần sạc thường xuyên.",
  },
];


const Features = () => {
  return (
    <section
      id="features"
      className="
        py-24
        bg-slate-950
        text-white
      "
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Tiêu đề */}
        <div className="text-center mb-16">

          <h2
            className="
              text-4xl
              font-bold
            "
          >
            Tính năng nổi bật
          </h2>


          <p
            className="
              mt-4
              text-slate-400
            "
          >
            Trải nghiệm công nghệ hiện đại trong một thiết kế nhỏ gọn
          </p>

        </div>



        {/* Cards */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {features.map((feature) => (

            <Reveal key={feature.title}>

            <div
              key={feature.title}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-8
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div
                className="
                  text-4xl
                  mb-5
                "
              >
                {feature.icon}
              </div>


              <h3
                className="
                  text-xl
                  font-semibold
                  mb-3
                "
              >
                {feature.title}
              </h3>


              <p
                className="
                  text-slate-400
                  leading-relaxed
                "
              >
                {feature.description}
              </p>


            </div>

            </Reveal>

          ))}

        </div>


      </div>

    </section>
  );
};


export default Features;
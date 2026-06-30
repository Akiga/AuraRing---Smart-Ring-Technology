const specs = [
  {
    title: "Chất liệu",
    value: "Titanium cao cấp",
  },
  {
    title: "Kích thước",
    value: "7 size tùy chọn",
  },
  {
    title: "Thời lượng pin",
    value: "Lên đến 7 ngày",
  },
  {
    title: "Chống nước",
    value: "5ATM",
  },
  {
    title: "Kết nối",
    value: "Bluetooth 5.2",
  },
  {
    title: "Tương thích",
    value: "iOS & Android",
  },
];


const Specs = () => {
  return (
    <section
      id="specs"
      className="
        py-24
        bg-slate-900
        text-white
      "
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-16">

          <h2
            className="
              text-4xl
              font-bold
            "
          >
            Thông số kỹ thuật
          </h2>


          <p
            className="
              mt-4
              text-slate-400
            "
          >
            Công nghệ mạnh mẽ bên trong thiết kế nhỏ gọn
          </p>

        </div>



        {/* Specs Grid */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          

          {specs.map((spec) => (

            <div
              key={spec.title}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-blue-500
                transition
                duration-300
              "
            >

              <h3
                className="
                  text-slate-400
                  text-sm
                  mb-2
                "
              >
                {spec.title}
              </h3>


              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {spec.value}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
};


export default Specs;
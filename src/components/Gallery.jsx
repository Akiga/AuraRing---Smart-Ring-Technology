import ring1 from "../assets/images/ring-1.webp";
import ring2 from "../assets/images/ring-2.webp";
import ring3 from "../assets/images/ring-3.webp";

const images = [
  {
    src: ring1,
    title: "Thiết kế sang trọng",
  },
  {
    src: ring2,
    title: "Công nghệ hiện đại",
  },
  {
    src: ring3,
    title: "Phong cách tối giản",
  },
];


const Gallery = () => {
  return (
    <section
      id="gallery"
      className="
        py-24
        bg-slate-950
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
            Thư viện sản phẩm
          </h2>


          <p
            className="
              mt-4
              text-slate-400
            "
          >
            Khám phá vẻ đẹp trong từng chi tiết của AuraRing
          </p>

        </div>



        {/* Gallery */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {images.map((image) => (

            <div
              key={image.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
              "
            >

              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="
                  w-full
                  h-80
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />


              <div
                className="
                  bg-slate-900
                  p-5
                "
              >

                <h3
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  {image.title}
                </h3>

              </div>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
};


export default Gallery;
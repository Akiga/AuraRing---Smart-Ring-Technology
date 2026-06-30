import ring from "../assets/images/ring.webp";
import Reveal from "./Reveal";
const Hero = () => {
  return (
    <section
  className="
    min-h-screen
    flex
    items-center
    bg-slate-950
    text-white
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      px-6
      grid
      md:grid-cols-2
      gap-10
      items-center
    "
  >


    {/* Text */}
    <Reveal>

      <div>

        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
          "
        >
          Công nghệ thông minh
          <br />

          <span className="text-blue-500">
            trong một chiếc nhẫn
          </span>

        </h1>


        <p
          className="
            mt-6
            text-slate-400
            text-lg
            max-w-xl
          "
        >
          AuraRing giúp theo dõi sức khỏe,
          hoạt động hằng ngày với thiết kế
          nhỏ gọn và sang trọng.
        </p>



        <div className="mt-8 flex gap-4">


          <a
            href="#subscribe"
            className="
              bg-blue-600
              hover:bg-blue-700
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            Mua ngay
          </a>


          <a
            href="#features"
            className="
              border
              border-slate-700
              px-6
              py-3
              rounded-xl
              hover:bg-slate-900
              transition
            "
          >
            Khám phá
          </a>


        </div>


      </div>


    </Reveal>



    {/* Image */}
    <Reveal>

      <div
        className="
          flex
          justify-center
        "
      >

        <img
          src={ring}
          alt="AuraRing"
          className="
            w-full
            max-w-md
            rounded-3xl
          "
        />


      </div>

    </Reveal>



  </div>

</section>
  );
};

export default Hero;
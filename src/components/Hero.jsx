import ring from "../assets/images/ring.webp";
import Reveal from "./Reveal";


const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        bg-slate-950
        text-white
      "
    >

      {/* Background glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/20
          blur-[120px]
          rounded-full
        "
      />


      <div
        className="
          relative
          z-10
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
                font-extrabold
                leading-tight
              "
            >

              Công nghệ thông minh

              <br />


              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  to-blue-600
                  bg-clip-text
                  text-transparent
                "
              >
                trong một chiếc nhẫn
              </span>


            </h1>



            <p
              className="
                mt-6
                text-slate-400
                text-lg
                max-w-xl
                leading-relaxed
              "
            >
              AuraRing giúp theo dõi sức khỏe,
              hoạt động hằng ngày với thiết kế
              nhỏ gọn, sang trọng và công nghệ
              hiện đại.
            </p>



            <div
              className="
                mt-8
                flex
                gap-4
              "
            >


              <a
                href="#subscribe"
                className="
                  bg-blue-600
                  hover:bg-blue-500
                  hover:scale-105
                  shadow-lg
                  shadow-blue-500/30
                  px-6
                  py-3
                  rounded-xl
                  transition
                  duration-300
                "
              >
                Mua ngay
              </a>



              <a
                href="#features"
                className="
                  border
                  border-slate-700
                  hover:bg-slate-900
                  px-6
                  py-3
                  rounded-xl
                  transition
                  duration-300
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
              loading="eager"
              className="
                w-full
                max-w-md
                rounded-3xl
                drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]
                hover:scale-105
                transition
                duration-500
              "
            />


          </div>


        </Reveal>



      </div>


    </section>
  );
};


export default Hero;
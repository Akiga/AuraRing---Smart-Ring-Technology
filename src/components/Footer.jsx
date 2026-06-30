const Footer = () => {
  return (
    <footer
      className="
        bg-slate-950
        border-t
        border-slate-800
        text-white
        py-10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >


        {/* Logo */}
        <div>

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Aura<span className="text-blue-500">Ring</span>
          </h2>


          <p
            className="
              text-slate-400
              mt-2
              text-sm
            "
          >
            Công nghệ thông minh trong tầm tay bạn.
          </p>

        </div>



        {/* Links */}
        <div
          className="
            flex
            gap-6
            text-slate-400
            text-sm
          "
        >

          <a
            href="#features"
            className="hover:text-blue-500 transition"
          >
            Tính năng
          </a>


          <a
            href="#specs"
            className="hover:text-blue-500 transition"
          >
            Thông số
          </a>


          <a
            href="#gallery"
            className="hover:text-blue-500 transition"
          >
            Thư viện
          </a>


          <a
            href="#subscribe"
            className="hover:text-blue-500 transition"
          >
            Liên hệ
          </a>


        </div>



        {/* Copyright */}
        <p
          className="
            text-slate-500
            text-sm
          "
        >
          © 2026 AuraRing. All rights reserved.
        </p>


      </div>


    </footer>
  );
};


export default Footer;
import { useState } from "react";
import { Menu, X } from "lucide-react";


const navItems = [
  {
    name: "Tính năng",
    href: "#features",
  },
  {
    name: "Thông số",
    href: "#specs",
  },
  {
    name: "Thư viện",
    href: "#gallery",
  },
  {
    name: "Liên hệ",
    href: "#subscribe",
  },
];


const Navbar = () => {

  const [open, setOpen] = useState(false);


  return (

    <header
      className="
        fixed
        top-0
        left-0
        w-full
        bg-slate-950/95
        backdrop-blur-xl
        border-b
        border-slate-800
        z-50
      "
    >


      <nav
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >


        {/* Logo */}

        <a
          href="#"
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Aura
          <span className="text-blue-500">
            Ring
          </span>
        </a>



        {/* Desktop Menu */}

        <ul
          className="
            hidden
            md:flex
            gap-10
          "
        >

          {navItems.map((item)=>(

            <li key={item.name}>

              <a
                href={item.href}
                className="
                  text-gray-300
                  hover:text-blue-500
                  transition
                  duration-300
                "
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>




        {/* Desktop Button */}

        <a
          href="#subscribe"
          className="
            hidden
            md:block
            bg-blue-600
            hover:bg-blue-500
            transition
            px-5
            py-2
            rounded-xl
            text-white
          "
        >
          Mua ngay
        </a>




        {/* Mobile Button */}

        <button
          className="
            md:hidden
            text-white
          "
          aria-label="Mở menu điều hướng"
          onClick={() => setOpen(!open)}
        >

          {open ? (
            <X size={28}/>
          ) : (
            <Menu size={28}/>
          )}

        </button>


      </nav>




      {/* Mobile Menu */}

      {open && (

        <div
          className="
            md:hidden
            bg-slate-950
            border-t
            border-slate-800
            px-6
            py-6
          "
        >

          <ul
            className="
              flex
              flex-col
              gap-5
            "
          >

            {navItems.map((item)=>(

              <li key={item.name}>

                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-gray-300
                    hover:text-blue-500
                    transition
                  "
                >
                  {item.name}
                </a>

              </li>

            ))}



            <li>

              <a
                href="#subscribe"
                className="
                  block
                  text-center
                  bg-blue-600
                  py-3
                  rounded-xl
                  text-white
                "
              >
                Mua ngay
              </a>

            </li>


          </ul>


        </div>

      )}


    </header>

  );
};


export default Navbar;
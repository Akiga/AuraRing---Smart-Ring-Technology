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
  return (
    <header
      className="
        fixed 
        top-0 
        left-0 
        w-full 
        bg-slate-950/80 
        backdrop-blur-lg 
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
          className="text-2xl font-bold text-white"
        >
          Aura<span className="text-blue-500">Ring</span>
        </a>


        {/* Menu */}
        <ul
          className="
            hidden 
            md:flex 
            gap-10
          "
        >

          {navItems.map((item) => (
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


        {/* Button */}
        <a
          href="#subscribe"
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            px-5
            py-2
            rounded-xl
            text-white
            cursor-pointer
          "
        >
          Mua ngay
        </a>


      </nav>

    </header>
  );
};


export default Navbar;
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home","about","seminar","talkshow","workshop","competition","faq"];

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 100;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTo = (id:string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
    className={`fixed w-full z-50 transition ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}
    >
    <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* LOGO */}
        <img
        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
        className="w-40"
        />

        {/* MENU */}
        <ul className="flex gap-8 font-medium">

          <li
            onClick={() => scrollTo("home")}
            className={`cursor-pointer ${
              active === "home" && "text-[#8b2c4a]"
            }`}
          >
            Beranda
          </li>

          <li
            onClick={() => scrollTo("about")}
            className={`cursor-pointer ${
              active === "about" && "text-[#8b2c4a]"
            }`}
          >
            About
          </li>

          <li
            onClick={() => scrollTo("seminar")}
            className={`cursor-pointer ${
              active === "seminar" && "text-[#8b2c4a]"
            }`}
          >
            Seminar
          </li>

          <li
            onClick={() => scrollTo("talkshow")}
            className={`cursor-pointer ${
              active === "talkshow" && "text-[#8b2c4a]"
            }`}
          >
            Talkshow
          </li>

          <li
            onClick={() => scrollTo("workshop")}
            className={`cursor-pointer ${
              active === "workshop" && "text-[#8b2c4a]"
            }`}
          >
            Workshop
          </li>

          <li
            onClick={() => scrollTo("competition")}
            className={`cursor-pointer ${
              active === "competition" && "text-[#8b2c4a]"
            }`}
          >
            Competition
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
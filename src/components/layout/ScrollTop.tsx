import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 
          bg-[#8b2c4a] text-white 
          w-12 h-12 rounded-full 
          shadow-lg 
          hover:scale-110 
          transition"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollTop;
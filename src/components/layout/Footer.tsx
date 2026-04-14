const Footer = () => {
  return (
    <footer className="bg-[#8b2c4a] text-white pt-16 pb-8">

      <div className="max-w-screen-xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-10">

          {/* LOGO */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              INVOFEST 2025
            </h2>

            <p className="text-white/80 leading-relaxed">
              Informatics Vocational Festival yang bertujuan untuk
              menginspirasi generasi muda dalam dunia teknologi
              dan inovasi digital.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Menu
            </h3>

            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white cursor-pointer">Beranda</li>
              <li className="hover:text-white cursor-pointer">Seminar</li>
              <li className="hover:text-white cursor-pointer">Competition</li>
              <li className="hover:text-white cursor-pointer">Workshop</li>
              <li className="hover:text-white cursor-pointer">Talkshow</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <p className="text-white/80 mb-2">
              Universitas Harkat Negeri
            </p>

            <p className="text-white/80 mb-2">
              invofest@gmail.com
            </p>

            <p className="text-white/80">
              +62 812 3456 7890
            </p>
          </div>

        </div>

        {/* LINE */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70">
          © 2025 INVOFEST. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;
const Talkshow = () => {
  return (
    <section className="bg-[#f5d9df] pt-0 pb-32 relative">

      {/* WAVE TOP */}
      <img
        src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
        className="w-full"
      />

      <div className="max-w-screen-xl mx-auto px-8 pt-20">

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">

          {/* TEXT */}
          <div data-aos="fade-right">

            <h1 className="text-5xl font-semibold text-[#8b2c4a]">
              IT Talkshow
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="150"
              className="text-lg text-gray-600 mt-4 max-w-xl"
            >
              Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-[#8b2c4a] text-white px-6 py-3 mt-6 rounded-lg"
            >
              DAFTAR IT TALKSHOW
            </button>

          </div>

          {/* IMAGE */}
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            className="w-[420px]"
          />

        </div>

      </div>

      {/* WAVE BOTTOM */}
      <img
        src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
        className="absolute bottom-0 left-0 w-full"
      />

    </section>
  );
};

export default Talkshow;
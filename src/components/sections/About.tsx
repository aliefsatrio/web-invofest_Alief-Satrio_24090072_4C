const About = () => {
  return (
    <section className="bg-[#f5d9df] pt-0 pb-32 relative">

      {/* WAVE TOP */}
      <img
        src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
        className="w-full"
      />

      <div className="max-w-screen-xl mx-auto px-8 pt-16 relative z-10">

        {/* TITLE */}
        <h2
          data-aos="fade-right"
          className="text-[42px] font-semibold text-[#8b2c4a] mb-6"
        >
          Tentang INVOFEST
        </h2>

        {/* DESC */}
        <p
          data-aos="fade-right"
          data-aos-delay="150"
          className="text-gray-600 text-lg leading-relaxed mb-16 max-w-3xl"
        >
          Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1 h-full bg-[#8b2c4a]" />
            <h3 className="text-lg font-semibold text-[#8b2c4a] mb-2">
              IT Seminar
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.
            </p>
            <button className="bg-[#8b2c4a] text-white px-4 py-2 rounded-lg text-sm">
              INFO SELENGKAPNYA
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1 h-full bg-[#8b2c4a]" />
            <h3 className="text-lg font-semibold text-[#8b2c4a] mb-2">
              IT Talkshow
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.
            </p>
            <button className="bg-[#8b2c4a] text-white px-4 py-2 rounded-lg text-sm">
              INFO SELENGKAPNYA
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1 h-full bg-[#8b2c4a]" />
            <h3 className="text-lg font-semibold text-[#8b2c4a] mb-2">
              IT Competition
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
            </p>
            <button className="bg-[#8b2c4a] text-white px-4 py-2 rounded-lg text-sm">
              INFO SELENGKAPNYA
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1 h-full bg-[#8b2c4a]" />
            <h3 className="text-lg font-semibold text-[#8b2c4a] mb-2">
              IT Workshop
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.
            </p>
            <button className="bg-[#8b2c4a] text-white px-4 py-2 rounded-lg text-sm">
              INFO SELENGKAPNYA
            </button>
          </div>

        </div>
      </div>

      {/* WAVE BOTTOM */}
      <img
        src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
        className="absolute bottom-0 left-0 w-full z-0"
      />

    </section>
  );
};

export default About;
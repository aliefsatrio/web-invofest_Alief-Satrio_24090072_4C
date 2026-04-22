import Collapse from "../ui/Collapse";

const FAQ = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* TITLE */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-700">
            Punya Pertanyaan? <span className="text-[#8b2c4a]">Disini</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Ada banyak informasi terkait INVOFEST
          </p>
        </div>

        {/* FAQ */}
        <div className="grid lg:grid-cols-2 gap-6">

          <div data-aos="fade-up">
            <Collapse
              title="Apa itu INVOFEST?"
              description="Invofest adalah festival tahunan teknologi untuk menginspirasi generasi muda."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <Collapse
              title="Kapan INVOFEST dilaksanakan?"
              description="INVOFEST dilaksanakan sesuai jadwal yang telah ditentukan panitia."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Collapse
              title="Apakah ada biaya pendaftaran?"
              description="Setiap event memiliki biaya pendaftaran berbeda."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <Collapse
              title="Bagaimana mengetahui pemenang?"
              description="Pemenang diumumkan melalui media sosial resmi INVOFEST."
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;
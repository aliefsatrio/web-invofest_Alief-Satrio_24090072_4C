const Sponsor = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-screen-xl mx-auto px-8">

        {/* TITLE */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-700">
            Our <span className="text-[#8b2c4a]">Sponsors</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Terima kasih kepada sponsor yang mendukung INVOFEST
          </p>
        </div>

        {/* LOGO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">

          <img
            data-aos="zoom-in"
            src="https://dummyimage.com/200x80/eee/aaa"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            src="https://dummyimage.com/200x80/eee/aaa"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src="https://dummyimage.com/200x80/eee/aaa"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            src="https://dummyimage.com/200x80/eee/aaa"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

          <img
            data-aos="zoom-in"
            data-aos-delay="400"
            src="https://dummyimage.com/200x80/eee/aaa"
            className="mx-auto opacity-70 hover:opacity-100 transition"
          />

        </div>

      </div>

    </section>
  );
};

export default Sponsor;
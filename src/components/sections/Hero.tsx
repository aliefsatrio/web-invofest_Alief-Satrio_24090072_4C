import Button from "../ui/Button";
const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16">

      <div className="max-w-screen-xl mx-auto px-8">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* TEXT */}
          <div>

            <img
              data-aos="fade-right"
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              className="w-[300px]"
            />

            <p
              data-aos="fade-right"
              data-aos-delay="150"
              className="text-gray-600 mt-4 max-w-xl bold-text"
            >
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.
            </p>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="flex gap-4 mt-6"
            >
              <Button title="INFO SELENGKAPNYA" />

              <button className="border border-[#8b2c4a] text-[#8b2c4a] px-6 py-3 rounded-lg">
                HUBUNGI PANITIA
              </button>
            </div>

          </div>

          {/* ROBOT */}
          <img
            data-aos="fade-left"
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            className="w-[420px]"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;
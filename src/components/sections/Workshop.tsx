import Button from "../Button";
import Image from "../Image";

const Workshop = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-screen-xl mx-auto px-8">

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">

          {/* TEXT */}
          <div data-aos="fade-right">

            <h1 className="text-5xl font-semibold text-[#8b2c4a]">
              IT Workshop
            </h1>

            <p 
              data-aos="fade-right"
              data-aos-delay="150"
              className="text-lg text-gray-600 mt-4 max-w-xl"
            >
              Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>

            <div data-aos="zoom-in" data-aos-delay="300">
              <Button title="DAFTAR IT WORKSHOP" />
            </div>

          </div>

          {/* IMAGE */}
          <div data-aos="fade-left" data-aos-delay="200">
            <Image imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Workshop;
import Button from "../Button";
import Image from "../Image";

const Seminar = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-screen-xl mx-auto px-8">

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">

          {/* TEXT */}
          <div data-aos="fade-right">

            <h1 className="text-5xl font-semibold text-[#8b2c4a]">
              IT Seminar
            </h1>

            <p 
              data-aos="fade-right"
              data-aos-delay="150"
              className="text-lg text-gray-600 mt-4 max-w-xl"
            >
              Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>

            <div data-aos="zoom-in" data-aos-delay="300">
              <Button title="DAFTAR IT SEMINAR" />
            </div>

          </div>

          {/* IMAGE */}
          <div data-aos="fade-left" data-aos-delay="200">
            <Image imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Seminar;
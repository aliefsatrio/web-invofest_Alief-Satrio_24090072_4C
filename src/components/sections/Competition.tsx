import Button from "../ui/Button";
import Image from "../ui/Image";

const Competition = () => {
  return (
    <section className="bg-[#f5d9df]">

      <img
        src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
        className="w-full -mb-1"
      />

      <div className="max-w-screen-xl mx-auto px-8 py-20">

        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-10">

          {/* TEXT */}
          <div data-aos="fade-left">

            <h1 className="text-5xl font-semibold text-[#8b2c4a]">
              IT Competition
            </h1>

            <p 
              data-aos="fade-left"
              data-aos-delay="150"
              className="text-lg text-gray-600 mt-4 max-w-xl"
            >
              "From Creation to Innovation" adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
            </p>

            <div data-aos="zoom-in" data-aos-delay="300">
              <Button title="DAFTAR IT COMPETITION" />
            </div>

          </div>

          {/* IMAGE */}
          <div data-aos="fade-right" data-aos-delay="200">
            <Image imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png" />
          </div>

        </div>

      </div>

      <img
        src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
        className="w-full -mt-1"
      />

    </section>
  );
};

export default Competition;
interface SectionProps {
  title: string
  description: string
  button: string
  image: string
  bg?: string
}

const Section = ({
  title,
  description,
  button,
  image,
  bg = "bg-white"
}: SectionProps) => {
  return (
    <section className={`${bg} py-32`}>
      <div className="max-w-300 mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center min-h-[85vh]">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-bold text-[#8b2c4a] mb-6">
              {title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <button className="bg-[#8b2c4a] hover:bg-[#74233d] text-white px-7 py-3 rounded-lg">
              {button}
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <img
              src={image}
              className="w-135"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section
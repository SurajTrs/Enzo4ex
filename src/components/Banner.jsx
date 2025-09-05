import React from "react";

const Banner = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
  image,
  reverse = false,
}) => {
  return (
    <section className="bg-[#0A192F] text-white py-16">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between px-6 md:px-12 lg:px-20`}
      >
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-lg">{description}</p>
          {buttonText && (
            <a href={buttonLink}>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
                {buttonText}
              </button>
            </a>
          )}
        </div>

        {/* Right Image */}
        {image && (
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-[90%] md:w-[80%] lg:w-[70%] object-contain transform rotate-2"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;

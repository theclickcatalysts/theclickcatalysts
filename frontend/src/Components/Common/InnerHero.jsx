import React from "react";

const InnerHero = ({
  subheading,
  heading,
  description,
  highlight,
  image,
  reverse = false,
}) => {
  return (
    <section className="w-full bg-gradient-to-r from-grSt to-grEnd text-white py-14 px-4 md:px-8 lg:px-24">
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12`}
      >
        <div className="flex-1 text-center lg:text-left space-y-6">
          {subheading && (
            <p className="text-sm uppercase tracking-widest text-white/80 font-medium">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight font-headingFont">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-base md:text-[18px] xl:text-xl text-white/90 leading-relaxed font-secondary">
              {highlight && (
                <span className="font-semibold text-white">{highlight}</span>
              )}{" "}
              {description}
            </p>
          )}
        </div>
        <div className="flex-1">
          {image && (
            <img
              src={image}
              alt="About section visual"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto drop-shadow-xl"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default InnerHero;

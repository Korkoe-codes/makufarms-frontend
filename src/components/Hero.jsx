// import { useState, useEffect } from "react";
import Images from "../assets/index";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="bg-teal-100 w-full m-auto overflow-hidden flex flex-col lg:flex-row items-center justify-center">
      {/* Slider */}
      <div className="lg:w-1/2 relative">
        <Slider autoslide={true}>
          {Images.map((image) => (
            <img
              src={image}
              key={image}
              className="object-cover"
            />
          ))}
        </Slider>

        {/* Mobile Content */}
        <div className="absolute top-0 left-0 w-full h-full flex lg:hidden text-white text-center flex-col items-center justify-center z-30 bg-black bg-opacity-5 backdrop-blur-sm">
          <h1 className="text-xl font-semibold px-4">
            Empowering Communities Through Sustainable Agriculture in Asutuare
          </h1>
          <h3 className="mt-2 px-4">
            Transforming agriculture to improve livelihoods and foster resilience
            in Ghana.
          </h3>
          <button className="border p-2 rounded mx-auto mt-4">Learn More</button>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:flex flex-col gap-5 text-center lg:w-1/2 lg:px-8">
        <h1 className="text-xl font-semibold px-4">
          Empowering Communities Through Sustainable Agriculture in Asutuare
        </h1>
        <h3 className="mt-2 px-4">
          Transforming agriculture to improve livelihoods and foster resilience
          in Ghana.
        </h3>
        <button className="border p-4 mx-auto bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
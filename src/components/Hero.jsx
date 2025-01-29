import HeroImages from "../assets/index";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className=" w-full m-auto overflow-hidden flex flex-col lg:flex-row items-center justify-center">
      {/* Slider */}
      <div className="lg:w-2/5 relative h-[300px] lg:h-[500px] w-full">
        <Slider autoslide={true}>
          {HeroImages.map((image) => (
            <img
              src={image}
              key={image}
              className="w-full lg h-full object-cover"
              alt="Slider Image"
            />
          ))}
        </Slider>

        {/* Mobile Content */}
        <div className="absolute top-0 left-0 w-full h-full flex lg:hidden text-white text-center flex-col items-center justify-center z-30 bg-black bg-opacity-5 backdrop-blur-[1.5px]">
          <h1 className="text-2xl font-bold px-4">
            Empowering Communities Through Sustainable Agriculture
          </h1>
          <h3 className="mt-2 px-4 text-base font-medium">
            Transforming agriculture to improve livelihoods and foster resilience
            in Ghana.
          </h3>
          <button className="px-3 py-2 bg-[#3B5A51]">Learn More</button>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:flex flex-col  gap-4 text-center lg:w-1/2 lg:px-10">
        <h1 className="text-4xl text-green-600 font-bold px-4">
          Empowering Communities Through Sustainable Agriculture
        </h1>
        <h3 className="mt-2 text-base font-medium px-4">
          Transforming agriculture to improve livelihoods and foster resilience
          in Ghana.
        </h3>
        <button className="px-3 py-2 font-medium hover:text-[#3B5A51] hover:bg-amber-300 mx-auto text-white bg-green-500 rounded-xl bg- bg-opacity-75  transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
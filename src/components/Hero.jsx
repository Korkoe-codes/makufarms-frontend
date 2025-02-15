import HeroImages from "../assets/index";
import Header from "./Header";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Slider autoslide={true}>
        {HeroImages.map((image) => (
          <img
            src={image}
            key={image}
            className="w-full h-full object-cover"
            alt="Slider Image"
          />
        ))}
      </Slider>



      <header className="absolute top-0 left-0 w-full hidden lg:flex justify-between items-center py-6 z-10">
        <Header />
      </header>


      <header className="absolute top-0 left-0 w-full  lg:hidden flex justify-normal  px-2 z-10">
        <Header/>
      </header>


        <div className="absolute lg:top-1/4 container top-1/3  p-0 lg:w-1/3 lg:flex h-screen lg:flex-col bottom-0 w-full md:w-2/3 lg:p-5 lg:left-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#E6E6E9] px-4">
            Empowering Communities Through Sustainable Agriculture
          </h1>

          <h3 className="mt-2 px-4 text-[#ffffff] text-pretty text-xl opacity-80  lg:w-1/2 font-medium">
            Transforming agriculture to improve livelihoods and foster resilience
            in Ghana.
          </h3>

          <div className="flex-row lg:space-x-3 space-x-2 px-4 pt-5">
          <a href="#contact" className="lg:p-5 lg:w-36 p-3 text-base text-green-400 hover:text-white transition-color duration-200 rounded-md bg-white hover:bg-[#0B132B]"> Contact Us</a>
            <a href="#about" className="lg:p-5 w-36 p-3 text-base text-white rounded-md bg-green-400 hover:bg-[#F9A635] transition-all hover:text-[#131515]"> Read more</a>
          </div>
        </div>
    </div>
  );
};

export default Hero;

import HeroImages from "../assets/index";
import Header from "./Header";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="flex-col flex w-full h-screen">
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


      <div  className="absolute w-full p-y-10 flex flex-col">
      <div className="2xl:w-1/2 leading-5 flex h-screen flex-col top-10  w-full">
        <h4 className="text-3xl lg:text-2xl xl:text-6xl 2xl:text-8xl font-bold text-[#E6E6E9]">
        Empowering Communities Through Sustainable Agriculture
          </h4>

          <h3 className="mt-2 text-[#ffffff] text-pretty md:text-2xl lg:text-3xl text-xl  opacity-80  lg:w-2/3 font-medium">
            Transforming agriculture to improve livelihoods and foster resilience
            in Ghana.
          </h3>

          <div className="flex-row lg:space-x-3 flex space-x-2 w-full pt-5">
          <a href="#footer" className="lg:p-5 xl:p-3 lg:w-fit p-3 text-lg text-[#0b132b] hover:text-white transition-color duration-200 rounded-xl bg-white hover:bg-[#0B132B]"> Contact Us</a>
          <a href="#about" className="lg:p-5 xl:p-3 w-fit flex items-center gap-2 p-3 text-lg text-white rounded-xl bg-green-600 hover:bg-[#F9A635] transition-all hover:text-[#131515]"> 
    Read more
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L1 11M11 1H2M11 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
</a>

          </div>
        </div>
      </div>


      <header className="absolute top-0 left-0 w-full px-5 lg:hidden flex justify-normal  z-10">
        <Header/>
      </header>


    </div>
  );
};

export default Hero;

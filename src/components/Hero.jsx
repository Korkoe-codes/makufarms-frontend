import { motion, useScroll } from "framer-motion";
import HeroImages from "../assets/index";
import Header from "./Header";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="flex-col flex  w-full h-screen">
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



      <header className="absolute lg:px-28 top-0 left-0 w-full hidden lg:flex justify-between items-center py-6 z-10">
        <Header />
      </header>


      <div  className="absolute top-80 left-0 w-full lg:flex justify-between items-center py-6 z-10">
      <div className="lg:px-28 mx-auto lg:mx-0 gap-10 leading-5 px-4 lg:flex h-screen lg:flex-col bottom-0 w-full lg:w-2/3">
        <h1 className="text-3xl lg:text-8xl font-bold text-[#E6E6E9]">
            Empowering Communities Through Sustainable Agriculture
          </h1>

          <h3 className="mt-2 text-[#ffffff] text-pretty md:text-2xl lg:text-3xl text-xl  opacity-80  lg:w-2/3 font-medium">
            Transforming agriculture to improve livelihoods and foster resilience
            in Ghana.
          </h3>

          <div className="flex-row lg:space-x-3 flex space-x-2 w-full pt-5">
          <a href="#contact" className="lg:p-5 lg:w-fit p-3 text-lg text-[#0b132b] hover:text-white transition-color duration-200 rounded-xl bg-white hover:bg-[#0B132B]"> Contact Us</a>
          <a href="#about" className="lg:p-5 w-fit flex items-center gap-2 p-3 text-lg text-white rounded-xl bg-green-600 hover:bg-[#F9A635] transition-all hover:text-[#131515]"> 
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

{/* 
        <div className="container absolute mx-auto p-0 lg:flex h-screen lg:flex-col bottom-0 w-full  ">
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
        </div> */}
    </div>
  );
};

export default Hero;

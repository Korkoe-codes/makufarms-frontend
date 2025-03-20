import HeroImages from "../assets/index";
import Header from "./Header";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="w-full h-screen flex lg:flex-row relative">
      {/* Header */}
      <div className="absolute w-full lg:py-10 lg:px-20 z-10">
        <Header />
      </div>

      {/* Hero Text Section */}
      <section className="flex flex-col justify-center items-start lg:w-full px-5 lg:px-20 -z-1">
        <h1 className="lg:text-2xl xl:text-5xl 2xl:text-6xl font-bold text-[#E6E6E9]">
          Empowering Communities Through Sustainable Agriculture
        </h1>

        <h3 className="mt-2 text-pretty md:text-2xl lg:text-3xl text-xl opacity-80 font-medium">
          Transforming agriculture to improve livelihoods and foster resilience in Ghana.
        </h3>

        <div className="flex flex-row space-x-2 lg:space-x-3 w-full pt-5">
          <a href="#contact" className="lg:p-5 xl:p-3 lg:w-fit p-3 text-lg text-[#0b132b] hover:text-white transition-color duration-200 rounded-xl bg-white hover:bg-[#0B132B]">
            Contact Us
          </a>
          <a href="#about" className="lg:p-5 xl:p-3 w-fit flex items-center gap-2 p-3 text-lg text-white rounded-xl bg-green-600 hover:bg-[#F9A635] transition-all hover:text-[#131515]">
            Read more
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L1 11M11 1H2M11 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Slider Section */}
      <aside className="lg:w-1/2 lg:h-full flex items-center justify-center">
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
      </aside>
    </div>
  );
};

export default Home;

import HeroImages from "../assets/index";
import Header from "./Header";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="w-full h-screen flex lg:flex-row relative">

      <header className="absolute top-0 w-full lg:py-10 py-5 px-10 lg:px-20 z-50">
        <Header />
      </header>

      <section className="flex flex-col justify-center lg:static absolute z-20 bottom-0 top-0 items-start lg:w-full px-10 lg:px-20 lg:z-40">
        <h1 className="lg:text-5xl text-2xl xl:text-6xl 2xl:text-7xl font-bold text-[#E6E6E9]">
          Empowering Communities Through Sustainable Agriculture
        </h1>

        <h3 className="mt-2 text-pretty md:text-3xl lg:text-4xl text-lg opacity-80 font-semibold">
          Transforming agriculture to improve livelihoods and foster resilience in Ghana.
        </h3>

        <div className="flex flex-row space-x-2 lg:space-x-3 w-full pt-5">
          <a href="#footer" className="lg:p-5 xl:p-3 lg:w-fit p-1.5 md:text-lg text-base text-[#0b132b] hover:text-white transition-color duration-200 rounded-xl bg-white hover:bg-[#0B132B]">
            Contact Us
          </a>
          <a href="#about" className="lg:p-5 xl:p-3 w-fit flex items-center gap-2 p-1.5 text-base text-white rounded-xl bg-green-600 md:text-lg hover:bg-[#F9A635] transition-all hover:text-[#131515]">
            Read more
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L1 11M11 1H2M11 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>


      <aside className="lg:w-1/2 lg:h-full h-screen w-full flex items-center justify-center">
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

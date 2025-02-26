import {aboutImage, founderImage, gifs} from "../assets/index"
import { Card } from "./Card"
import { motion } from "framer-motion"
import { sdgImages } from "../assets/index"
const About = () => {
  return (
    <div className="w-full flex flex-col gap-5 lg:px-0" id="about">
      

      <section className="flex flex-col lg:p-20 w-full  gap-5">


        <div className="w-full flex flex-col py-10 gap-10 lg:gap-6">
          <div className="flex flex-col lg:w-1/2 w-full lg:gap-4 m-auto items-center">
            <h1 className="lg:text-4xl text-lg text-center lg:font-bold">Empowering Agriculture, Enriching Lives</h1>
            <p className="lg:text-lg text-center text-sm lg:font-normal text-[#E25641]">
            At Maku Farms, we’re committed to transforming the agricultural landscape through innovative and sustainable practices. Our mission, vision, and goals are centered on empowering farmers, enhancing food security, and driving economic growth. Together, we’re cultivating a brighter future for agriculture and communities.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-evenly lg:gap-4 items-center gap-10 ">
          <div className="rounded-xl shadow-lg p-10 w-full lg:p-4  transform hover:scale-110 ease-in-out transition-all h-fit lg:min-h-[250px] lg:max-h-[300px] xl:h-[400px] lg:w-1/4 flex flex-col gap-1">
              <img src={gifs[0]} alt="" className="w-24 h-24 mx-auto" />
              <h2 className="lg:text-2xl text-xl font-semibold text-center lg:text-left">Our Mission</h2>
              <p className="lg:text-lg text-xs text-center lg:text-left font-medium">
              To revolutionize agriculture by constructing state-of-the-art greenhouses for vegetable production and developing a modern rice mill, ensuring high-quality, sustainable food production for local and international markets.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-10 w-full lg:p-4  transform hover:scale-110 ease-in-out transition-all h-fit lg:min-h-[250px] lg:max-h-[300px] xl:h-[400px] lg:w-1/4 flex flex-col gap-1">
              <img src={gifs[1]} alt="" className="w-20 h-20 mx-auto" />
              <h2 className="lg:text-2xl font-semibold">Our Vision</h2>
              <p className="lg:text-lg font-medium">
              To lead the way in sustainable farming by leveraging the fertile lands of the Kpong Irrigation Scheme, creating a model for eco-friendly agricultural practices that inspire and empower future generations.
              </p>
            </div>
            <div className="rounded-xl shadow-lg p-10 w-full lg:p-4  transform hover:scale-110 ease-in-out transition-all h-fit lg:min-h-[250px] lg:max-h-[300px] xl:h-[400px] lg:w-1/4 flex flex-col gap-1">
              <img src={gifs[2]} alt="" className="w-24 h-24 mx-auto" />
              <h2 className="lg:text-2xl font-semibold">Our Goals</h2>
              <p className="lg:text-lg font-medium">
              To continuously innovate and deliver efficient, sustainable agricultural solutions that maximize productivity, ensure food security, and drive economic growth for our communities.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full p-5 lg:space-y-4">
          <h1 className="font-bold text-xl md:text-4xl text-center lg:text-left">About the Project</h1>
          <p className="font-normal lg:text-lg text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo, id fugit maxime reiciendis assumenda in accusamus rem minima? Mollitia sapiente, natus illo ut repudiandae sunt ex nemo nihil culpa?</p>
        </div>


    <aside className="flex flex-col gap-5 justify-between lg:p-5 w-full">
        <Card image_path={aboutImage}  title={"Rice Processing & Milling"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius rerum. Accusamus repellendus dolor voluptatibus deserunt voluptatum, laudantium excepturi autem voluptatem corporis deleniti molestias inventore non in qui, similique hic libero esse praesentium, ad numquam sunt quaerat commodi corrupti! Sapiente, amet. Optio debitis, facilis tempora quod amet dicta consequuntur minima."/>
        <Card image_path={aboutImage}  title={"Where Tradition Meets Technology"} description="Maku Farms is where tradition meets technology. With a focus on sustainable practices, we’re building greenhouses to grow fresh, healthy vegetables and developing a rice mill to process locally grown rice. Situated on the Kpong Irrigation Scheme, our farm benefits from optimal growing conditions, ensuring high-quality produce and a brighter future for agriculture."/>
        <Card image_path={aboutImage}  title={"Building a Legacy of Food Security"} description="Discover the future of farming at Maku Farms. Our innovative approach combines greenhouse vegetable production with a state-of-the-art rice mill, all strategically located on the Kpong Irrigation Scheme. By prioritizing sustainability and efficiency, we’re not just farming—we’re building a legacy of food security and environmental stewardship."/>
        <Card image_path={aboutImage} title={"Growing a Greener Future"}  description="At Maku Farms, we’re not just growing crops—we’re cultivating a greener future. Our greenhouses are designed to maximize vegetable production year-round, while our upcoming rice mill will process high-quality rice for local and international markets. By leveraging the fertile lands of the Kpong Irrigation Scheme, we’re committed to promoting sustainable agriculture and empowering communities through innovation and efficiency."/>

    </aside>
      </section>

    {/* <SdgSlider /> */}


<section className="grid lg:grid-cols-3 mx-auto md:grid-cols-2 w-full gap-5 lg:gap-10">
  <div className="flex-col flex md:w-3/4 justify-center gap-2">
    <h1 className="lg:text-7xl md:text-left text-center md:text-5xl text-lg font-bold">Cultivating a Sustainable Future</h1>
    <p className="lg:text-2xl md:text-left text-center md:text-xl text-sm lg:font-semibold">Maku Farms is committed to advancing Sustainable Development Goals by promoting responsible farming practices that enhance food security, protect the environment, and uplift local communities. Through innovation and dedication, we aim to contribute to a healthier planet and a thriving agricultural ecosystem.</p>
  </div>

  <div className="lg:w-3/4">
    <img src={ sdgImages[0] } alt="" className="rounded-lg" />
  </div>
  <div className="lg:w-3/4">
    <img src={ sdgImages[1] } alt="" className="rounded-lg" />
  </div>
  <div className="lg:w-3/4">
    <img src={ sdgImages[2] } alt="" className="rounded-lg" />
  </div>
  <div className="lg:w-3/4">
    <img src={ sdgImages[3] } alt="" className="rounded-lg" />
  </div>
  <div className="lg:w-3/4">
    <img src={ sdgImages[4] } alt="" className="rounded-lg" />
  </div>


</section>

    <motion.aside
  initial={{ 
    opacity: 0
   }}


   whileInView={{ 
    opacity:1,
    scale: 1,
    transition:{
      duration: 3
    }

    }}
    viewport={{ 
      once:true,
      amount: 0.5
     }} 
     >


<div className="lg:flex w-full mx-auto lg:p-40 justify-between lg:static relative">
  <div className="w-fit"


>
<img src={founderImage} alt="" className="lg:w-[500px] object-cover lg:h-[500px] lg:rounded-ss-3xl" />
</div>
<div className="flex flex-col justify-center items-center lg:static backdrop-blur-md p-2 lg:w-1/2 lg:px-0 lg:text-slate-900 text-white bottom-0 absolute gap-2"> 
<h1 className="text-xl font-bold lg:text-4xl">About the Founder</h1>
<p className="text-justify text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptatem quam molestias voluptates officiis doloremque pariatur architecto nemo hic fugiat esse nisi necessitatibus qui adipisci, amet, perferendis illum cupiditate. Sed accusantium saepe ducimus velit voluptatum, fugit, atque dolore accusamus non impedit modi delectus, at cupiditate sunt beatae architecto laudantium nostrum.</p>
</div>
</div>

</motion.aside>
      
    </div>
  )
}

export default About

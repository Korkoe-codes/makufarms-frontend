import {aboutImage, founderImage, gifs} from "../assets/index"
import { Card } from "./Card"
import { motion } from "framer-motion"
import { sdgImages } from "../assets/index"
const About = () => {
  return (
    <div className="w-full flex flex-col gap-5 lg:px-0" id="about">
      

      <section className="flex flex-col w-full  gap-5">


        <div className="w-full flex flex-col py-10 gap-10 lg:gap-6">
          <div className="flex flex-col lg:w-3/4 2xl:w-1/2 w-full  lg:gap-4 m-auto items-center">
            <h1 className="lg:text-4xl text-lg text-center lg:font-bold">Empowering Agriculture, Enriching Lives</h1>
            <p className="lg:text-lg text-center text-sm lg:font-normal text-[#E25641]">
            At Maku Farms, we believe that agriculture is more than just growing crops—it’s about transforming lives. Nestled within the fertile lands of the Kpong Irrigation Scheme in Asutuare, Ghana, our farm is a beacon of innovation and opportunity. Through sustainable farming practices and community-driven initiatives, we are empowering young individuals and vulnerable groups to achieve financial independence and food security.
            Be part of the journey. Together, we grow.

            </p>
          </div>
          <div className="flex md:flex-row  md:flex-wrap lg:flex-nowrap w-full flex-col justify-between lg:gap-4 items-center gap-10  md:justify-evenly">


          <div className="rounded-xl  lg:h-[400px] md:h-[350px] xl:h-[450px] 2xl:h-[350px] 2xl:p-10 shadow-lg p-10 md:p-5 w-full lg:p-4 2xl:gap-4 md:w-1/3 transform justify-center hover:scale-110 ease-in-out transition-all h-fit lg:w-1/4 flex flex-col gap-1">
              <img src={gifs[0]} alt="" className="w-24 h-24 mx-auto" />
              <h2 className="lg:text-2xl 2xl:text-5xl text-xl font-semibold text-center lg:text-left">Our Mission</h2>
              <p className="lg:text-lg 2xl:text-2xl text-xs text-center lg:text-left font-medium">
              To revolutionize agriculture by constructing state-of-the-art greenhouses for vegetable production and developing a modern rice mill, ensuring high-quality, sustainable food production for local and international markets.
              </p>
            </div>
            <div className="rounded-xl lg:h-[400px] md:h-[350px] xl:h-[450px] 2xl:h-[350px] 2xl:p-10 shadow-lg p-10 md:p-5 w-full lg:p-4 2xl:gap-4 md:w-1/3 transform justify-center hover:scale-110 ease-in-out transition-all h-fit lg:w-1/4 flex flex-col gap-1">
              <img src={gifs[1]} alt="" className="w-20 h-20 mx-auto" />
              <h2 className="lg:text-2xl 2xl:text-5xl text-xl font-semibold text-center lg:text-left">Our Vision</h2>
              <p className="lg:text-lg 2xl:text-2xl text-xs text-center lg:text-left font-medium">
              To lead the way in sustainable farming by leveraging the fertile lands of the Kpong Irrigation Scheme, creating a model for eco-friendly agricultural practices that inspire and empower future generations.
              </p>
            </div>
            <div className="rounded-xl md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[350px] 2xl:p-10 shadow-lg p-10 md:p-5 w-full lg:p-4 2xl:gap-4 md:w-1/3 transform justify-center hover:scale-110 ease-in-out transition-all h-fit lg:w-1/4 flex flex-col gap-1">
              <img src={gifs[2]} alt="" className="w-24 h-24 mx-auto" />
              <h2 className="lg:text-2xl 2xl:text-5xl text-xl font-semibold text-center lg:text-left">Our Goals</h2>
              <p className="lg:text-lg 2xl:text-2xl text-xs text-center lg:text-left font-medium">
              To continuously innovate and deliver efficient, sustainable agricultural solutions that maximize productivity, ensure food security, and drive economic growth for our communities.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-2/3 2xl:w-3/5 w-full p-5 lg:space-y-4">
          <h1 className="font-bold text-xl md:text-4xl text-center lg:text-left">About the Project</h1>
          <p className="font-normal lg:text-lg text-xs text-left">Maku Farms is strategically located on the Kpong Irrigation Scheme, a fertile landscape renowned for its rice production and agricultural potential. Our vision is to create a thriving agribusiness that not only boosts local food production but also provides economic opportunities for young individuals and underserved communities.
          Through sustainable farming practices, we are reimagining agriculture—reducing waste, improving soil health, and ensuring long-term productivity. Whether it’s through crop rotation, water-efficient irrigation, or organic soil management, we are committed to a farming approach that nurtures both the land and the people who depend on it.</p>
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
  <div className="flex-col flex justify-center gap-2">
    <h1 className="2xl:text-7xl md:text-left text-center md:text-4xl xl:text-6xl text-lg font-bold">Cultivating a Sustainable Future</h1>
    <p className="lg:text-xl xl:text-lg md:text-left text-center  text-sm lg:font-medium">Maku Farms is committed to advancing Sustainable Development Goals by promoting responsible farming practices that enhance food security, protect the environment, and uplift local communities. Through innovation and dedication, we aim to contribute to a healthier planet and a thriving agricultural ecosystem.</p>
  </div>

  <div className="">
    <div className=" rounded-xl bg-[#EB1C2D] flex justify-center">
    <img src={ sdgImages[0] }  width={200} alt="" className="rounded-lg" />
    </div>
    
  </div>
  
  <div className="">
  <div className=" rounded-xl bg-[#D3A039] flex justify-center">
    <img src={ sdgImages[1] } width={200} alt="" className="rounded-lg" />
  </div>

  </div>
  
  <div className="">
  <div className=" rounded-xl bg-[#8F1838] flex justify-center">
    <img src={ sdgImages[2] } width={200} alt="" className="rounded-lg" />
  </div>

  </div>

  
  <div className="">
  <div className=" rounded-xl bg-[#CF8D2A] flex justify-center">
    <img src={ sdgImages[3] } width={200} alt="" className="rounded-lg" />
  </div>

  </div>

  <div className="">
  <div className=" rounded-xl bg-[#48773E] flex justify-center">
    <img src={ sdgImages[4] } width={200} alt="" className="rounded-lg" />
  </div>

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


<div className="lg:flex w-full mx-auto md:bg-gradient-to-br from-lime-100 via-white to-emerald-100  lg:p-40 justify-between lg:static relative">
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

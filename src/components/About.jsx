import { founderImgs, gifs} from "../assets/index"
import { Card } from "./Card"
import { AnimatePresence, motion } from "framer-motion"
import { sdgImages } from "../assets/index"
// import Carousel from "./Carousel"

import { aboutSlider } from "../assets";
import { useEffect, useState } from "react"
const About = () => {

  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection] = useState(1);




  useEffect(()=>{
    const interval =setInterval(()=>{
      setDirection(1);
      setCurrentImg((prev)=> (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="w-full md:gap-10 lg:gap-14 flex flex-col lg:px-28 px-10 md:px-16 xl:px-36 gap-10" id="about">
      

      <section className="flex flex-col w-full  gap-10 lg:gap-20">


        <div className="w-full flex flex-col gap-5 md:gap-10 lg:gap-16">
          <div className="flex flex-col lg:w-3/5 mx-auto text-center  lg:gap-10 gap-4">
            <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl xl:text-5xl lg:font-bold">Empowering Agriculture, Enriching Lives</h1>
            <p className="lg:text-lg text-sm lg:font-normal text-[#E25641]">
            At Maku Farms, we believe that agriculture is more than just growing crops—it’s about transforming lives. Nestled within the fertile lands of the Kpong Irrigation Scheme in Asutuare, Ghana, our farm is a beacon of innovation and opportunity. Through sustainable farming practices and community-driven initiatives, we are empowering young individuals and vulnerable groups to achieve financial independence and food security.
            Be part of the journey. Together, we grow.

            </p>
          </div>
          <div className="flex md:flex-row md:gap-10 md:justify-between  md:flex-wrap xl:flex-nowrap w-full flex-col lg:gap-20">


          <div className="rounded-xl md:w-2/5 lg:p-10 px-5 py-10  shadow-lg 2xl:gap-4 text-justify justify-center  flex flex-col gap-1">

            <div className="flex gap-4 items-center">
              <img src={gifs[0]} alt="" className="w-24 h-24" />
              
 
              <h2 className="text-xl lg:text-3xl xl:text-5xl font-medium text-center lg:text-left">Our Mission</h2>

            </div>
              <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-justify lg:text-left font-medium">
              To revolutionize agriculture by constructing state-of-the-art greenhouses for vegetable production and developing a modern rice mill, ensuring high-quality, sustainable food production for local and international markets.
              </p>
            </div>
            <div className="rounded-xl md:w-2/5 lg:p-10 px-5 py-10  shadow-lg 2xl:gap-4 text-justify justify-center  flex flex-col gap-1">
              <div className="flex gap-4 items-center">
              <img src={gifs[1]} alt="" className="w-20 h-20" />
              <h2 className="text-xl lg:text-3xl xl:text-5xl font-medium text-center lg:text-left">Our Vision</h2>

              </div>
              <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-justify lg:text-left font-medium">
              To lead the way in sustainable farming by leveraging the fertile lands of the Kpong Irrigation Scheme, creating a model for eco-friendly agricultural practices that inspire and empower future generations.
              </p>
            </div>
            <div className="rounded-xl md:w-2/5 lg:p-10 px-5 py-10  shadow-lg 2xl:gap-4 text-justify justify-center  flex flex-col gap-1">
              <div className="flex gap-4 items-center">
              <img src={gifs[2]} alt="" className="w-20 h-20" />
              <h2 className="text-xl lg:text-3xl xl:text-5xl font-medium text-center lg:text-left">Our Goals</h2>

              </div>
              <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-justify lg:text-left font-medium">
              To continuously innovate and deliver efficient, sustainable agricultural solutions that maximize productivity, ensure food security, and drive economic growth for our communities.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full">
          <h1 className="font-bold text-xl md:text-4xl text-center lg:text-left">About the Project</h1>
          <p className="font-normal lg:text-lg text-xs text-justify">
            Maku Farms is strategically located on the Kpong Irrigation Scheme, a fertile landscape renowned for its rice production and agricultural potential. Our vision is to create a thriving agribusiness that not only boosts local food production but also provides economic opportunities for young individuals and underserved communities.
          Through sustainable farming practices, we are reimagining agriculture—reducing waste, improving soil health, and ensuring long-term productivity. Whether it’s through crop rotation, water-efficient irrigation, or organic soil management, we are committed to a farming approach that nurtures both the land and the people who depend on it.</p>
        </div> */}


    <aside className="flex flex-col gap-10 w-full">
        <Card image_path={aboutSlider}  title={"Why Asutuare?"} description="Asutuare was chosen as the starting hub for its unique agricultural advantage, sitting on the Kpong Irrigation Scheme, one of Ghana’s most fertile farming areas. The region’s well-developed irrigation infrastructure makes it ideal for rice cultivation and sustainable agriculture. With a rich history in farming and a strong agricultural community, Asutuare provides the perfect environment to establish a model farm that can drive food security and economic growth.

"/>
        <Card image_path={aboutSlider}  title={"Securing the Land for Growth"} description="Maku Farms has successfully acquired a prime piece of land within the irrigation scheme, ensuring access to a reliable water source and the right conditions for high-yield farming. This land acquisition is a crucial step toward building a sustainable agribusiness that will serve as both a production site and a training ground for young farmers and entrepreneurs in the agricultural sector."/>
        <Card image_path={aboutSlider}  title={"Progress So Far"} description="Our journey is well underway, with significant milestones already achieved. The construction of the perimeter wall has been completed, securing the land and paving the way for infrastructure development. Soil testing and initial land preparations have been carried out to ensure optimal conditions for cultivation. These efforts mark the beginning of a structured, scalable agricultural project designed for long-term success."/>
        <Card image_path={aboutSlider} title={"The Vision for Full Utilization"}  description="The ultimate goal for Maku Farms is to establish a fully operational agricultural hub, integrating sustainable rice production, innovative farming practices, and agribusiness opportunities. Future plans include setting up modern storage facilities, processing units, and training programs to support the local farming community. Our vision is to create a self-sustaining ecosystem that enhances food production, generates employment, and promotes environmentally responsible farming."/>

    </aside>
      </section>

    {/* <SdgSlider /> */}


<section className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 w-full gap-10 lg:gap-10">
  <div className="flex-col flex justify-center gap-2">
    <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl text-center md:text-start font-medium">Cultivating a Sustainable Future</h1>
    <p className="text-xs md:text-sm lg:text-base xl:text-lg md:text-left text-center">Maku Farms is committed to advancing Sustainable Development Goals by promoting responsible farming practices that enhance food security, protect the environment, and uplift local communities. Through innovation and dedication, we aim to contribute to a healthier planet and a thriving agricultural ecosystem.</p>
  </div>

  <div className="">
    <div className=" rounded-xl bg-[#EB1C2D] xl:w-full xl:h-full flex justify-center">
    <img src={ sdgImages[0] }  width={200} alt="" className="rounded-lg object-cover xl:w-full" />
    </div>
    
  </div>
  
  <div className="">
  <div className=" rounded-xl bg-[#D3A039] xl:w-full xl:h-full flex justify-center">
    <img src={ sdgImages[1] } width={200} alt="" className="rounded-lg object-cover xl:w-full" />
  </div>

  </div>
  
  <div className="">
  <div className=" rounded-xl bg-[#8F1838] xl:w-full xl:h-full flex justify-center">
    <img src={ sdgImages[2] } width={200} alt="" className="rounded-lg object-cover xl:w-full" />
  </div>

  </div>

  
  <div className="">
  <div className=" rounded-xl bg-[#CF8D2A] xl:w-full xl:h-full flex justify-center">
    <img src={ sdgImages[3] } width={200} alt="" className="rounded-lg object-cover xl:w-full" />
  </div>

  </div>

  <div className="">
  <div className=" rounded-xl bg-[#48773E] xl:w-full xl:h-full flex justify-center">
    <img src={ sdgImages[4] } width={200} alt="" className="rounded-lg object-cover xl:w-full" />
  </div>

  </div>


</section>

    {/* <motion.aside
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
     > */}


<div className="w-full md:bg-gradient-to-br min-h-full md:p-10 md:rounded-2xl from-lime-100 via-white to-emerald-100 flex md:gap-10 lg:static relative">
  <div className="w-full md:w-1/3"


>
  <AnimatePresence mode="wait">
<motion.img 
  key={currentImg}
  initial={{ x: direction * 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -direction * 100, opacity: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
src={founderImgs[currentImg]} alt="" className=" object-cover rounded-xl min-h-full md:w-full md:mx-auto md:rounded-ss-3xl" />

  </AnimatePresence>
</div>
<div className="flex flex-col md:w-1/2 justify-center p-5 md:p-0 absolute items-start  md:static backdrop-blur-md  md:text-slate-900 text-white bottom-0 gap-2"> 
<h1 className="text-xl font-bold lg:text-4xl">About the Founder</h1>
<p className="text-justify text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptatem quam molestias voluptates officiis doloremque pariatur architecto nemo hic fugiat esse nisi necessitatibus qui adipisci, amet, perferendis illum cupiditate. Sed accusantium saepe ducimus velit voluptatum, fugit, atque dolore accusamus non impedit modi delectus, at cupiditate sunt beatae architecto laudantium nostrum.</p>
</div>
</div>

{/* </motion.aside> */}
      
    </div>
  )
}

export default About

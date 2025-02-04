import {aboutImage, aboutImage2, founderImage} from "../assets/index"
import { Card } from "./Card"
import SdgSlider from "./SdgSlider"
const About = () => {
  return (
    <div className="w-full flex flex-col gap-4 lg:px-0" id="about">
      
      <aside className="lg:flex w-3/4 m-auto justify-center lg:p-40 lg:gap-4 lg:static relative">

        <div className="lg:w-1/2 lg:static">
        <img src={founderImage} alt="" className="w-full rounded-ss-3xl" />
        </div>
        <div className="flex flex-col lg:w-1/2 justify-center items-center lg:static backdrop-blur-md p-2 lg:px-0 lg:text-slate-900 text-white bottom-0 absolute gap-2">
        <h1 className="text-xl font-bold ">About the Founder</h1>
        <p className="text-justify text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat magnam dolorem ullam aspernatur ex voluptas quia quasi exercitationem, odit accusamus nisi! Officia, et nihil? Adipisci ad a at excepturi?</p>
        </div>
      </aside>
      <section className="flex flex-wrap justify-evenly lg:flex-row gap-6">
        <div className="lg:w-1/3 w-full p-10 lg:space-y-4">
          <h1 className="font-bold text-2xl">About the Project</h1>
          <p className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo, id fugit maxime reiciendis assumenda in accusamus rem minima? Mollitia sapiente, natus illo ut repudiandae sunt ex nemo nihil culpa?</p>
        </div>

        <Card image_path={aboutImage} direction={'reverse'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage2} direction={'reverse'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage} direction={'normal'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage2} title={"Focus"} direction={'normal'} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage} direction={'reverse'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
      </section>

    <SdgSlider />
      
    </div>
  )
}

export default About

import {aboutImage2} from "../assets/index"
import { Card } from "./Card"
const About = () => {
  return (
    <div className="w-full flex flex-col gap-4 px-4 lg:px-0" id="about">
      <section className="flex flex-wrap justify-evenly lg:flex-row gap-6">
        <div className="lg:w-1/3 w-full py-6 lg:space-y-4">
          <h1 className="font-bold text-2xl">About the Project</h1>
          <p className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo, id fugit maxime reiciendis assumenda in accusamus rem minima? Mollitia sapiente, natus illo ut repudiandae sunt ex nemo nihil culpa?</p>
        </div>

        <Card image_path={aboutImage2} direction={'normal'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage2} direction={'reverse'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage2} direction={'normal'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage2} title={"Focus"} direction={'reverse'} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
        <Card image_path={aboutImage2} direction={'normal'} title={"Focus"} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, esse."/>
      </section>

      <aside className="">

      </aside>
      
    </div>
  )
}

export default About

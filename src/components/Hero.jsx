import { hero1 } from "../assets"

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col sm:py-16 py-6`} id="home">
        {/* <div className="flex-1 flex-col flex justify-center items-start xl:px-0 sm:px-16 px-6"> */}
            <div className="flex flex-row items-center justify-center m-auto py-2 px-4 rounded-xl">
                <div className="w-1/2">
                  <img src={hero1} alt="" className=""/>
                </div>
                <div className="flex w-1/2 flex-col items-center gap-y-4">
                  <h1 className="text-xl font-semibold">Empowering Communities Through Sustainable Agriculture in Asutuare</h1>
                  <h3 className="">Transforming agriculture to improve livelihoods and foster resilience in Asutuare, Ghana.</h3>
                  <button className="border p-4 mx-auto">Learn More</button>
                </div>
            </div>
        {/* </div> */}
    </section>
  )
}

export default Hero

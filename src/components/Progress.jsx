import { progressImgs } from "../assets/index"
const Progress = () => {
  return (
    <div className="w-full flex flex-col lg:px-28 px-10 md:px-16 xl:px-36 gap-10" id="progress">
        <h2 className="text-xl lg:text-3xl xl:text-5xl font-medium text-left lg:text-left">Where we are now.</h2>
      <div className="grid gap-10 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justifyt-evenly">
        {/* Image 1 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden">
          <img
            src={progressImgs[0]}
            alt="Placeholder 1"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias fugit nam fugiat totam, dolorem blanditiis magnam voluptatem at cumque?</span>
          </div>
        </div>
        {/* Image 4 */}
        <div className=" relative group aspect-square rounded-lg overflow-hidden">
          <img
            src={progressImgs[3]}
            alt="Placeholder 4"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias fugit nam fugiat totam, dolorem blanditiis magnam voluptatem at cumque?</span>
          </div>
        </div>
                {/* Image 3 */}
                <div className="sm:col-span-1 relative group aspect-square rounded-lg overflow-hidden">
          <img
            src={progressImgs[2]}
            alt="Placeholder 3"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias fugit nam fugiat totam, dolorem blanditiis magnam voluptatem at cumque?</span>
          </div>
        </div>
        {/* Image 6 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden">
          <img
            src={progressImgs[5]}
            alt="Placeholder 6"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias fugit nam fugiat totam, dolorem blanditiis magnam voluptatem at cumque?</span>
          </div>
        </div>
        {/* Image 2 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden">
          <img
            src={progressImgs[1]}
            alt="Placeholder 2"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias fugit nam fugiat totam, dolorem blanditiis magnam voluptatem at cumque?</span>
          </div>
        </div>
        {/* Image 7 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden">
          <img
            src={progressImgs[6]}
            alt="Placeholder 7"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto molestias fugit nam fugiat totam, dolorem blanditiis magnam voluptatem at cumque?</span>
          </div>
        </div>








        </div>
        </div>
  )
}

export default Progress

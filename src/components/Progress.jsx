import { progressImgs } from "../assets/index"
const Progress = () => {
  return (
    <div className="container mx-auto p-4" id="progress">
        <h1 className="text-3xl font-bold m-4">Where we are now.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image 1 */}
        <div className="sm:col-span-1">
          <img
            src={progressImgs[0]}
            alt="Placeholder 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Image 4 */}
        <div className="sm:col-span-1 lg:col-span-2">
          <img
            src={progressImgs[3]}
            alt="Placeholder 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
                {/* Image 3 */}
                <div className="sm:col-span-1 lg:col-span-2">
          <img
            src={progressImgs[2]}
            alt="Placeholder 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Image 6 */}
        <div className="sm:col-span-1">
          <img
            src={progressImgs[5]}
            alt="Placeholder 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="sm:col-span-1">
          <img
            src={progressImgs[1]}
            alt="Placeholder 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Image 7 */}
        <div className="sm:col-span-1 lg:col-span-2">
          <img
            src={progressImgs[6]}
            alt="Placeholder 7"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 5
        <div className="sm:col-span-1">
          <img
            src={progressImgs[4]}
            alt="Placeholder 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>   */}






        </div>
        </div>
  )
}

export default Progress

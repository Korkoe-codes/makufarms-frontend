import { progressImgs } from "../assets/index";

const Progress = () => {
  return (
    <div
      className="w-full flex flex-col lg:px-28 px-10 md:px-16 xl:px-36 gap-10"
      id="progress"
    >
      <h2 className="text-xl lg:text-3xl xl:text-5xl font-medium text-left lg:text-left">
        Where we are now.
      </h2>
      <div className="grid gap-10 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {/* Image 1 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
          <img
            src={progressImgs[0]}
            alt="Progress milestone 1"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base line-clamp-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              molestias fugit nam fugiat totam, dolorem blanditiis magnam
              voluptatem at cumque?
            </span>
          </div>
        </div>
        {/* Image 4 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
          <img
            src={progressImgs[3]}
            alt="Progress milestone 4"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base line-clamp-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              molestias fugit nam fugiat totam, dolorem blanditiis magnam
              voluptatem at cumque?
            </span>
          </div>
        </div>
        {/* Image 3 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
          <img
            src={progressImgs[2]}
            alt="Progress milestone 3"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base line-clamp-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              molestias fugit nam fugiat totam, dolorem blanditiis magnam
              voluptatem at cumque?
            </span>
          </div>
        </div>
        {/* Image 6 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
          <img
            src={progressImgs[5]}
            alt="Progress milestone 6"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base line-clamp-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              molestias fugit nam fugiat totam, dolorem blanditiis magnam
              voluptatem at cumque?
            </span>
          </div>
        </div>
        {/* Image 2 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
          <img
            src={progressImgs[1]}
            alt="Progress milestone 2"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base line-clamp-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              molestias fugit nam fugiat totam, dolorem blanditiis magnam
              voluptatem at cumque?
            </span>
          </div>
        </div>
        {/* Image 7 */}
        <div className="relative group aspect-square rounded-lg overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
          <img
            src={progressImgs[6]}
            alt="Progress milestone 7"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base line-clamp-3 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              molestias fugit nam fugiat totam, dolorem blanditiis magnam
              voluptatem at cumque?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
import { useState, useEffect } from "react";
import { sdgImages } from '../assets/index';

const SdgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sdgImages.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <section className="flex flex-col gap-4 justify-between">
        <div className="w-full p-5">
          <h1 className="font-bold text-xl lg:text-4xl">Sustainable Development Goals</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo, id fugit maxime reiciendis assumenda in accusamus rem minima? </p>
        </div>
        <div className="w-fit flex overflow-hidden">
          <div 
            className="flex transition-transform w-fit duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sdgImages.map((image, index) => (
              <img 
                src={image} 
                key={index} 
                alt={`SDG ${index + 1}`} 
                className="w-1/2 mx-"
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SdgSlider;
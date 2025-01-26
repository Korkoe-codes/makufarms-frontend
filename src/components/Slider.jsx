import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Slider = ({ children: Images, autoslide = false, autoSlideInterval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((currentImageIndex) => (currentImageIndex === Images.length - 1 ? 0 : currentImageIndex + 1));
  };

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoSlideInterval || 4000);
    return () => clearInterval(slideInterval);
  }, [autoslide, autoSlideInterval]);

  return (
    <div className="overflow-hidden lg:rounded-[35%_65%_49%_51%_/_73%_23%_77%_27%] relative w-full h-full">
      {Images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {image}
        </div>
      ))}
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and is required
  autoslide: PropTypes.bool, // Validate that autoslide is a boolean
  autoSlideInterval: PropTypes.number, // Validate that autoSlideInterval is a number
};

export default Slider;
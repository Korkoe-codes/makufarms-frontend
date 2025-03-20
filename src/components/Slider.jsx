import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Slider = ({ children: Images, autoslide = false, autoSlideInterval = 4000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((index) => (index === Images.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoslide, autoSlideInterval]);

  return (
    <div className="relative lg:static w-full h-screen overflow-hidden">
      {Images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${
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
  children: PropTypes.node.isRequired,
  autoslide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

export default Slider;
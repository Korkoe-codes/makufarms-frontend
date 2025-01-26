import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Slider = ({ children: Images, autoslide = false, autoSlideInterval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((currentImageIndex) => (currentImageIndex === Images.length - 1 ? 0 : currentImageIndex + 1));
  };

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoSlideInterval || 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex transition-transform ease-in duration-500" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {Images}
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and is required
  autoslide: PropTypes.bool, // Validate that autoslide is a boolean
  autoSlideInterval: PropTypes.number, // Validate that autoSlideInterval is a number
};

export default Slider;
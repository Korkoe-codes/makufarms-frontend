import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types"; 

const ProgressCard = ({ 
  image, 
  altText = "Image", // Default parameter instead of defaultProps
  description, 
  // index = 0  // Default parameter instead of defaultProps
}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const cardRef = useRef(null);
  
  const toggleDescription = (event) => {
    event.stopPropagation();
    setIsDescriptionVisible(prev => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDescriptionVisible && cardRef.current && !cardRef.current.contains(event.target)) {
        setIsDescriptionVisible(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isDescriptionVisible]);

  return (
    <div ref={cardRef} className="relative group rounded-lg overflow-hidden w-full">
      <div className="aspect-square w-full">
        <img
          src={image}
          alt={altText}
          className="w-full lg:h-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-center justify-center p-4">
        <span className="text-white font-bold text-center">
          {description}
        </span>
      </div>
      
      <button 
        onClick={toggleDescription}
        className="absolute bottom-4 right-4 bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md lg:hidden z-10"
      >
        {isDescriptionVisible ? 'Hide' : 'Details'}
      </button>
      
      {isDescriptionVisible && (
        <div 
          className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 lg:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-white font-bold text-center mb-4">
            {description}
          </span>
        </div>
      )}
    </div>
  );
};

// Prop types validation remains the same
ProgressCard.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
  description: PropTypes.string.isRequired,
  index: PropTypes.number
};

// Remove the defaultProps definition completely

export default ProgressCard;
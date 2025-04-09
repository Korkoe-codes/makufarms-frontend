import PropTypes from 'prop-types';
import Carousel from './Carousel';

export const Card = ({ image_path, title, description }) => {
  // Check if image_path is an array (for carousel) or a single string
  const isImageArray = Array.isArray(image_path);

  return (
    <div className='flex flex-col lg:gap-10 w-full'>      
      <div className="max-w-7xlmx-auto">
      <div className=" h-94  overflow-hidden">
        {isImageArray ? (
          <Carousel>
            {image_path.map((photo, index) => (
              <img 
                key={index}
                src={photo} 
                alt={`Slide ${index + 1}`} 
                className="w-full rounded-xl h-full object-cover" 
              />
            ))}
          </Carousel>
        ) : (
          <img 
            src={image_path} 
            alt={title} 
            className="w-full rounded-xl h-full object-cover" 
          />
        )}
        </div>
      </div>

      <div className="w-full">
        <hr className=''/>
        <h1 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-medium text-center md:text-left py-4">{title}</h1>
        <p className="text-xs text-justify md:text-left md:text-sm lg:text-lg xl:text-xl">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image_path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
import PropTypes from 'prop-types';
import Carousel from './Carousel';

export const Card = ({ image_path, title, description }) => {
  // Check if image_path is an array (for carousel) or a single string
  const isImageArray = Array.isArray(image_path);

  return (
    <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>      
      <div className="xl:w-1/3 w-full md:w-1/2">
        {isImageArray ? (
          <Carousel>
            {image_path.map((photo, index) => (
              <img 
                key={index}
                src={photo} 
                alt={`Slide ${index + 1}`} 
                className="w-full rounded-xl h-96 object-cover" 
              />
            ))}
          </Carousel>
        ) : (
          <img 
            src={image_path} 
            alt={title} 
            className="w-full rounded-xl h-96 object-cover" 
          />
        )}
      </div>

      <div className="md:w-2/3 w-full">
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
import PropTypes from 'prop-types';
export const Card = ({ image_path, title, description }) => {

    // const isReverse = direction === 'reverse' ? 'lg:flex-row-reverse lg:flex-row flex-col flex text-right w-full items-center lg:w-1/3 gap-2 shadow-sm bg-teal-50 rounded-lg p-10' : 'lg:flex-row flex-col flex w-full lg:w-1/3 gap-2 items-center shadow-sm bg-teal-50 rounded-lg p-10';


  return (
    <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>      
      <div className="xl:w-1/3 w-full md:w-1/2">
        <img src={image_path} alt="" className="w-full rounded-xl h-96 object-cover" />
      </div>

      <div className="md:w-2/3 w-full">
      <hr className=''/>
        <h1 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-medium text-center md:text-left py-4">{title}</h1>
        {/* <h3 className="">{date}</h3> */}
        <p className="text-xs text-justify md:text-left md:text-sm lg:text-lg xl:text-xl">{description}</p>

      </div>
    </div>
  )
}


Card.propTypes = {
    image_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // lgDirection:PropTypes.oneOf(['reverse', 'normal']).isRequired,
  };
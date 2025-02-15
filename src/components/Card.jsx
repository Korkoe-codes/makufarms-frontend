import PropTypes from 'prop-types';
export const Card = ({ image_path, title, description }) => {

    // const isReverse = direction === 'reverse' ? 'lg:flex-row-reverse lg:flex-row flex-col flex text-right w-full items-center lg:w-1/3 gap-2 shadow-sm bg-teal-50 rounded-lg p-10' : 'lg:flex-row flex-col flex w-full lg:w-1/3 gap-2 items-center shadow-sm bg-teal-50 rounded-lg p-10';


  return (
    <div className='lg:flex-row flex-col flex w-full gap-2 justify-between bg-teal-50 rounded-xl  p-10'>
      <div className="lg:w-1/4">
        <img src={image_path} alt="" className="rounded-lg" />
      </div>
      <div className="flex flex-col lg:w-1/2 py-10  lg:items-end` text-right justify-center gap-2 lg:gap-2">
        <h1 className="font-semibold lg:text-3xl text-right">{title}</h1>
        {/* <h3 className="">{date}</h3> */}
        <p className="text-xs lg:text-base font-normal lg:text-right">{description}</p>

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
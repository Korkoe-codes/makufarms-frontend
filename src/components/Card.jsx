import PropTypes from 'prop-types';
export const Card = ({ image_path, title, description,direction }) => {

    const isReverse = direction === 'reverse' ? 'flex-row-reverse lg:flex-row flex text-right w-full lg:w-1/3 gap-2 shadow-sm bg-teal-50 rounded-lg p-4' : 'flex-row lg:flex-row-reserve flex w-full lg:w-1/3 gap-2 shadow-sm bg-teal-50 rounded-lg p-4';


  return (
    <div className={isReverse}>
      <div className="w-1/2">
        <img src={image_path} alt="" className="rounded-lg" />
      </div>
      <div className="flex flex-col w-1/2  lg:items-center justify-center gap-2 lg:gap-4">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-sm lg:text-base font-normal lg:text-center">{description}</p>
      </div>
    </div>
  )
}


Card.propTypes = {
    image_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    direction:PropTypes.oneOf(['reverse', 'normal']).isRequired,
    // lgDirection:PropTypes.oneOf(['reverse', 'normal']).isRequired,
  };
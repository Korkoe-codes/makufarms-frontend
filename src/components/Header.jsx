import logos from '../assets/logos/index';
import { navigationLinks } from '../constants';
import { useState } from 'react';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => !prevState); // Toggle the state properly
  };

  return (
    <nav className='w-full flex bg-black/50 container mx-auto rounded-full mt-3 lg:w-full lg:justify-center justify-between p-2 shadow-xl  items-center'>
      <div className="flex gap-3 items-center">
      <div className=" bg-white rounded-full p-1">
      <img src={logos[2]} className='lg:w-14 lg:h-14 w-11 h-11 p-1' alt="" />

      </div>
        <h3 className="lg:text-2xl lg:font-bold text-xl text-white font-medium">Maku Farms</h3>
      </div>

      {/* Desktop Navigation */}
      <ul className='list-none sm:flex z-10 md:hidden lg:flex hidden justify-end items-center lg:px-6 flex-1 '>
        {navigationLinks.map((nav, index) => (
          <li
            className={`font-normal cursor-pointer ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            key={nav.id}
          >
            <a
              href={`#${nav.url}`}
              className="hover:font-semibold underline-offset-8 text-white/80 lg:text-xl hover:text-[#F9A635] text-semibold text-lg transition duration-200"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle Button */}
      <button
        className="flex flex-col px-4 items-end lg:hidden"
        onClick={toggleNavigation}
      >
        {!openNavigation ? (
          <div className="flex flex-col w-7 h-6 items-center gap-y-2">
            <span className="w-full h-full rounded-lg bg-white"></span>
            <span className="w-2/3 h-full rounded-lg bg-white"></span>
            <span className="w-full h-full rounded-lg bg-white"></span>
          </div>
        ) : (
          <div className="flex flex-col gap-y-1">
            <span className="absolute w-7 h-1 transform rotate-45 bg-white rounded-lg"></span>
            <span className="w-7 h-1 transform -rotate-45  bg-white rounded-lg"></span>
          </div>
        )}
      </button>

      {/* Mobile Dropdown Navigation */}
      <div
        className={`${openNavigation ? 'block' : 'hidden'} w-4/5 mx-10 mt-3 py-4 top-20 right-0 absolute bg-white shadow-lg rounded-lg z-40`}
      >
        <ul className='list-none flex flex-col justify-end items-left flex-1'>
          {navigationLinks.map((nav, index) => (
            <li
              className={`font-normal cursor-pointer w-full px-4 ${index === navigationLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              key={nav.id}
            >
              <a
                href={`#${nav.url}`}
                className="decoration-2 hover:underline w-full underline-offset-8 text-[#0b132b] hover:text-yellow-500  text-semibold md:text-lg transition duration-300"
                onClick={toggleNavigation}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
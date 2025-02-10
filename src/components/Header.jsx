import logos from '../assets/logos/index';
import { navigationLinks } from '../constants';
import { useState } from 'react';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => !prevState); // Toggle the state properly
  };

  return (
    <nav className='w-full flex bg-[#E6E6E9] container mx-auto rounded-lg mt-3 lg:px-64 lg:w-full justify-between shadow-xl items-center'>
      <img src={logos[2]} className='w-16' alt="" />

      {/* Desktop Navigation */}
      <ul className='list-none sm:flex z-10 md:hidden lg:flex hidden justify-end items-center lg:px-6 flex-1 '>
        {navigationLinks.map((nav, index) => (
          <li
            className={`font-normal cursor-pointer ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            key={nav.id}
          >
            <a
              href={`#${nav.url}`}
              className="decoration-2 hover:underline underline-offset-8 text-green-600 hover:text-yellow-500 text-semibold text-lg transition duration-200"
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
          <div className="flex flex-col items-center gap-y-2">
            <span className="w-10 h-1 rounded-lg bg-slate-600"></span>
            <span className="w-8 h-1 rounded-lg bg-slate-600"></span>
            <span className="w-10 h-1 rounded-lg bg-slate-600"></span>
          </div>
        ) : (
          <div className="flex flex-col gap-y-1">
            <span className="w-10 h-1 transform rotate-45 bg-slate-600 rounded-lg"></span>
            <span className="w-10 h-1 transform -rotate-45 bg-slate-600 rounded-lg"></span>
          </div>
        )}
      </button>

      {/* Mobile Dropdown Navigation */}
      <div
        className={`${openNavigation ? 'block' : 'hidden'} min-w-full mt-3 py-4 top-20 right-0 absolute bg-white shadow-lg rounded-lg z-40`}
      >
        <ul className='list-none flex flex-col justify-end items-left w-full flex-1'>
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
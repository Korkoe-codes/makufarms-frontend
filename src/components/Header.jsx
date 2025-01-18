import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { navigationLinks } from '../constants';
import { useState } from 'react';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => !prevState); // Toggle the state properly
  };

  const handleClick = () => {
    setOpenNavigation(false); // Close the menu when a link is clicked
  };

  const pathName = useLocation();

  return (
    <div
      className={`fixed top-0 left-0 w-full text-slate-600 z-50 border-b border-slate-200 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-white' : 'bg-white backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between px-4 lg:px-7 xl:px-10 max-lg:py-4">
        <a href="/" className="flex xl:mr-8 items-center flex-row lg:items-center">
          <img src={Logo} alt="logo" width={80} height={20} />
          <h3 className="text-lg font-semibold text-slate-600">Maku Farms Ghana</h3>
        </a>
        <button
          className="flex flex-col items-center lg:hidden"
          onClick={toggleNavigation} // Toggle menu on button click
        >
          {/* Hamburger Icon */}
          {!openNavigation ? (
            <div className="flex flex-col gap-y-2">
              <span className="w-10 h-1 rounded-lg bg-slate-600"></span>
              <span className="w-8 h-1 rounded-lg bg-slate-600"></span>
              <span className="w-10 h-1 rounded-lg bg-slate-600"></span>
            </div>
          ) : (
            // X Icon
            <div className="flex flex-col gap-y-1">
              <span className="w-10 h-1 transform rotate-45 bg-slate-600 rounded-lg"></span>
              <span className="w-10 h-1 transform -rotate-45 bg-slate-600 rounded-lg"></span>
            </div>
          )}
        </button>
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-4 left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto`}
        >
          <div className="relative z-2 flex-col items-center justify-center m-auto lg:flex-row ">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={handleClick} // Close the menu on link click
                className={`block py-2 px-4 lg:px-5 lg:py-3 text-lg font-semibold text-slate-600 hover:text-yellow-500 decoration-2 hover:underline underline-offset-8 transition duration-200 ${
                  link.url === pathName.pathname ? 'text-yellow-500' : ''
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

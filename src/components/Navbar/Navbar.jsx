import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { BsJustify, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 py-2 flex justify-between items-center h-[86px] text-blue-custom bg-white shadow-sm`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <div className="w-max text-xl flex items-center font-bold mr-2">
            <img
              src={data.logo.url}
              alt={data.logo.alt}
              className="w-[128px] sm:hidden lg:block sm:w-[140px] cursor-pointer hover:animate-rotate-x hover:animate-duration-[1000ms] hover:animate-ease-linear"
            />
            <img
              src={data['logo-color'].url}
              alt={data['logo-color'].alt}
              className="w-[64px] hidden sm:block lg:hidden cursor-pointer hover:animate-rotate-x hover:animate-duration-[1000ms] hover:animate-ease-linear"
            />
          </div>
        </a>
        <div className="w-full xl:w-2/3 hidden sm:flex items-center justify-around px-4 gap-4 xl:gap-6 font-semibold lg:font-normal">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-85}
              className="hover:text-light-blue-custom cursor-pointer"
            >
              <p
                className="text-md sm:text-[12px] lg:text-[16px] w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
          <a
            href={data['section-header'].blog.href}
            target="_blank"
            className="text-md sm:text-[12px] lg:text-[16px] w-max hover:text-light-blue-custom cursor-pointer"
          >
            {data['section-header'].blog.text}
          </a>
          <a
            href={`mailto:${data.contact}?subject=Contact`}
            className="hidden md:block text-md sm:text-[12px] lg:text-[16px]"
          >
            <div className="w-full flex justify-center">
              <button type="submit" className="orange-button min-w-max">
                {data['section-header'].button.text}
              </button>
            </div>
          </a>
          <a
            href={`mailto:${data.contact}?subject=Contact`}
            className="md:hidden text-md sm:text-[12px]"
          >
            <div className="w-full flex justify-center">
              <button type="submit">
                {data['section-header'].button.text}
              </button>
            </div>
          </a>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;

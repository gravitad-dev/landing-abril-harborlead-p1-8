import { Link } from 'react-scroll';
import data from '../../data.json';
import PropTypes from 'prop-types';

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex fadeIn' : 'hidden'
      } text-blue-custom w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
      style={{ background: 'rgba(0,0,0,0.3)' }}
    >
      <ul
        className={`fixed left-0 top-0 px-4 py-5 h-screen w-max min-w-[250px] flex flex-col gap-4 items-start text-blue-custom bg-white shadow-md shadow-black/10`}
      >
        <div className="flex flex-col items-left justify-between gap-12 mt-6">
          <a href="/">
            <div className="w-full gap-4 text-xl flex items-center justify-center font-bold active:animate-rotate-x animate-delay-[2000ms]">
              <img
                src={data.logo.url}
                alt={data.logo.alt}
                className="h-[48px] cursor-pointer"
              />
            </div>
            <hr className="mt-6"></hr>
          </a>
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="flex items-center gap-4 hover:text-light-blue-custom cursor-pointer"
              smooth={true}
              duration={700}
              spy={false}
              offset={-80}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-[26px] h-[26px]"
              />
              <p className="font-bold">{item.text}</p>
            </Link>
          ))}
          <a
            href={`mailto:${data.contact}?subject=Contact`}
            className="flex items-center gap-4 hover:text-light-blue-custom cursor-pointer"
          >
            <img
              src={data['section-header'].button.icon}
              alt={data['section-header'].button.text}
              className="w-[26px] h-[26px]"
            />
            <p className="font-bold">{data['section-header'].button.text}</p>
          </a>
          <a
            href={data['section-header'].blog.href}
            target="_blank"
            className="flex items-center gap-4 text-md font-bold sm:text-[12px] lg:text-[16px] w-max hover:text-light-blue-custom cursor-pointer"
          >
            <img
              src={data['section-header'].blog.icon}
              alt={data['section-header'].blog.alt}
              className="w-[26px] h-[26px]"
            />
            {data['section-header'].blog.text}
          </a>
        </div>
      </ul>
    </div>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuMobile;

import { useState } from 'react';
import data from '../../data.json';
import { Link } from 'react-scroll';

function LastSection() {
  const lastSection = data['section-seven'];
  const links = data['section-header'].navbar;
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue.trim() === '') {
      setIsValidEmail(true);
      setEmailError('');
    } else {
      validateEmail(inputValue);
    }
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);
    setIsValidEmail(isValid);
    setEmailError(isValid ? '' : data['section-seven'].suscribe.error);
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:${data.contact}?subject=Contact&body=Email contact: ${email}`;
      setEmail('');
    } else {
      alert(emailError || data['section-seven'].suscribe.error);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className=""
        style={{
          backgroundImage: `url(${lastSection.bg})`,
          backgroundSize: 'cover',
          width: '100%',
          height: 'auto',
        }}
      >
        <div className="flex flex-col text-center justify-end py-20 space-y-10">
          <div className="w-3/4 sm:w-4/5 mx-auto text-md sm:text-xl xl:text-2xl text-white font-bold">
            <p style={{ textShadow: '1px 1px 2px black' }}>
              {data['section-seven'].title}
            </p>
          </div>
          <div className="w-full mx-auto">
            <button className="shadow bg-white px-20 py-2  mx-auto text-light-blue-custom rounded-md active:shadow-none">
              {data['section-seven'].button}
            </button>
          </div>
        </div>
      </div>
      <div className="xl:px-[8vw] flex bg-light-blue-custom h-[200px] sm:h-[150px] text-xl sm:text-xl lg:text-base 2xl:text-xl max-w-[100vw] px-4 justify-between items-center relative">
        <div className="hidden lg:flex items-center w-1/2 gap-4 mr-auto ml-4">
          {links.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-80}
              className="cursor-pointer"
            >
              <p
                className="text-white hover:text-blue-custom text-md sm:text-[12px] lg:text-[14px] 2xl:text-xl w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col text-center mx-auto">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center text-center">
            <p
              className="text-white text-md hidden md:flex mr-4"
              style={{ whiteSpace: 'nowrap' }}
            >
              {data['section-seven'].suscribe.text}
            </p>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full md:w-1/2 xl:w-full bg-transparent text-white py-2 px-5 border-solid border sm:border-r-0 sm:rounded-r-none border-white placeholder-white rounded-md"
              placeholder={data['section-seven'].suscribe.placeholder}
            />
            <button
              className="text-light-blue-custom bg-white py-2 px-5 border border-white rounded-md sm:rounded-l-none"
              onClick={handleButtonClick}
            >
              {data['section-seven'].suscribe.button}
            </button>
          </div>
          <div className="flex relative mx-auto w-full">
            {emailError && (
              <p
                style={{
                  textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.5)',
                  left: 0,
                  right: 0,
                  margin: 'auto',
                }}
                className="absolute pt-2 text-orange-custom text-sm"
              >
                {emailError}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LastSection;

import data from '../data.json';
import Layout from '../components/ui/Layout';

function Footer() {
  return (
    <footer className="py-8 px-8 bg-[#20202D] overflow-hidden">
      <Layout>
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between text-[#F6F6F6]">
          <div>
            <p className="text-xs">{data['section-footer'].copy}</p>
          </div>
          <a href="#">
            <img
              src={data['logo-white'].url}
              alt={data['logo-white'].alt}
              className="cursor-pointer hover:animate-rotate-x hover:animate-duration-[1000ms] hover:animate-ease-linear w-40"
            />
          </a>
          <div className="flex items-center">
            <a href={data.bolg.url} target="_blank" className="ml-auto">
              <div className="text-center hover:animate-rotate-x hover:animate-duration-[1000ms] hover:animate-ease-linear cursor-pointer flex items-center gap-1 justify-center w-full">
                <img
                  width={32}
                  height={32}
                  src={data.bolg.icon}
                  alt={`${data.bolg.title} icon`}
                />
                <div className="flex flex-col text-left justify-center">
                  <p className="text-md md:text-lg font-bold">
                    {data.bolg.title}
                  </p>
                  <h6 className="hidden lg:flex text-[12px] -mt-1 text-gray_default">
                    {data.bolg.text}
                  </h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;

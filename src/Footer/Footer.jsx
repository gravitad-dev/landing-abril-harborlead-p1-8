import data from "../data.json";
import Layout from "../components/ui/Layout";
import SocialButtons from "../components/SocialButtons";

function Footer() {
  return (
    <footer className="py-8 px-8 bg-[#20202D] overflow-hidden">
      <Layout>
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between text-[#F6F6F6]">
          <div>
            <p className="text-xs">{data["section-footer"].copy}</p>
          </div>
          <a href="#">
            <img
              src={data["logo-white"].url}
              alt={data["logo-white"].alt}
              className="cursor-pointer w-40"
            />
          </a>
          <div className="flex items-center">
            <a href={data.bolg.url} target="_blank" className="ml-auto">
              <div className="text-center  cursor-pointer flex items-center gap-1 justify-center w-full">
                <SocialButtons />
              </div>
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;

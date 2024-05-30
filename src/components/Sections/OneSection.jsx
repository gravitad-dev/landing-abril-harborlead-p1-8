import data from '../../data.json';
import Layout from '../ui/Layout';

function OneSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${data['section-two'].bg})`,
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <Layout>
          <div className="py-12 flex flex-col md:flex-row space-y-0 items-center justify-center my-auto w-full">
            <div className="flex flex-col items-center justify-center mx-auto p-8 md:w-2/3">
              <h2 className="w-full sm:py-4 text-xl text-center md:text-end lg:text-3xl 2xl:text-4xl text-light-blue-custom font-bold">
                {data['section-two'].title}
              </h2>
              <p className="text-gray-custom text-md 2xl:text-xl font-semibold text-center md:text-end">
                {data['section-two'].paragraph}
              </p>
            </div>
            <section
              id="services"
              className="mb-12 w-full justify-center items-center mt-10 px-4"
            >
              <div className="flex justify-center items-center grid-cols-3">
                <img
                  src={data['section-two'].img1}
                  alt={data['section-two'].alt1}
                  className="h-[50vw] sm:h-[30vw] max-h-[400px] xl:max-h-[500px] rounded-full hover:animate-once hover:animate-spin"
                />
                <div className="flex flex-col gap-2">
                  <img
                    src={data['section-two'].img2}
                    alt={data['section-two'].alt2}
                    className="h-[30vw] sm:h-[20vw] max-h-[300px] rounded-full hover:animate-once hover:animate-reverse hover:animate-spin"
                  />
                  <img
                    src={data['section-two'].img3}
                    alt={data['section-two'].alt3}
                    className="h-[30vw] sm:h-[20vw] max-h-[300px] rounded-full hover:animate-once hover:animate-reverse  hover:animate-spin"
                  />
                </div>
              </div>
            </section>
          </div>

          <Layout>
            <div className="flex flex-col justify-center text-center">
              <div className="lg:w-1/5 justify-center mx-auto text-xl lg:text-2xl 2xl:text-3xl font-bold mb-8">
                <section id="whyus">
                  <p className="text-light-blue-custom">
                    {data['section-three'].title}
                  </p>
                </section>

                <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>
              </div>
              <div className="grid sm:grid-cols-3 gap-8 px-4">
                <div className="w-full">
                  <div
                    className="rounded-full p-4"
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(33, 123, 244, 0.08)',
                    }}
                  >
                    <img
                      className="mx-auto"
                      src={data['section-three'].Card1.icon}
                      alt={data['section-three'].Card1['icon-alt']}
                    />
                  </div>
                  <p className="text-light-blue-custom text-lg font-semibold mt-2">
                    {data['section-three'].Card1.title}
                  </p>
                  <p className="text-gray-custom text-md mt-4 text-center mx-auto px-4 font-semibold">
                    {data['section-three'].Card1.paragraph}
                  </p>
                </div>
                <div className="w-full">
                  <div
                    className="rounded-full p-4"
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(33, 123, 244, 0.08)',
                    }}
                  >
                    <img
                      className="mx-auto"
                      src={data['section-three'].Card2.icon}
                      alt={data['section-three'].Card2['icon-alt']}
                    />
                  </div>
                  <p className="text-light-blue-custom text-lg font-semibold mt-2">
                    {data['section-three'].Card2.title}
                  </p>
                  <p className="text-gray-custom text-md mt-4 text-center mx-auto px-4 font-semibold">
                    {data['section-three'].Card2.paragraph}
                  </p>
                </div>
                <div className="w-full">
                  <div
                    className="rounded-full p-4"
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(33, 123, 244, 0.08)',
                    }}
                  >
                    <img
                      className="mx-auto"
                      src={data['section-three'].Card3.icon}
                      alt={data['section-three'].Card3['icon-alt']}
                    />
                  </div>
                  <p className="text-light-blue-custom text-lg font-semibold mt-2">
                    {data['section-three'].Card3.title}
                  </p>
                  <p className="text-gray-custom text-md mt-4 text-center mx-auto px-4 font-semibold">
                    {data['section-three'].Card3.paragraph}
                  </p>
                </div>
              </div>
            </div>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
export default OneSection;

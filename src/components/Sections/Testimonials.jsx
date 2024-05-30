import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';
import Layout from '../ui/Layout';

const Testimonials = () => {
  const testimonials = data['section-six'].testimonials;
  const title = data['section-six'].title;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials">
      <div className="px-4 pt-8 pb-8">
        <Layout>
          <div className="flex flex-col text-center w-[98%]">
            <div className="flex flex-col w-full text-xl lg:text-2xl 2xl:text-3xl font-bold mb-14">
              <p className="text-light-blue-custom mx-auto">{title}</p>
              <hr className="bg-light-blue-custom mt-6 h-2 lg:h-3 w-28 mx-auto rounded-xl mb-4"></hr>
            </div>
            <Slider {...settings} className="px-6 w-[95%] mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="space-y-2 h-[24rem] max-h-[300px]"
                >
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="h-16 mx-auto rounded-full -mb-8"
                  />
                  <div className="flex flex-col text-left px-2 py-6 rounded-lg mx-2 bg-white">
                    <div className="flex gap-1">
                      <span
                        style={{
                          fontFamily: 'Catamaran',
                          fontSize: '3rem',
                        }}
                        className="text-gray-custom"
                      >
                        &quot;
                      </span>
                      <p className="text-left text-gray-custom text-[12px] mt-4">
                        {testimonial.paragraph}
                      </p>
                    </div>

                    <p className="text-center mt-4 text-light-blue-custom font-semibold text-[14px] truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-center text-gray-custom text-[12px] truncate">
                      {testimonial.rol}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Layout>
      </div>
    </section>
  );
};

export default Testimonials;

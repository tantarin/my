import { content } from "../Content";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import first from '../images/1.jpg';
import second from '../images/2.jpg';
import third from '../images/3.jpg';
import Carousel from "./Carousel.jsx";

const slides = [
    first,
    third,
    second
]

const Services = () => {
  const { services } = content;
  return (

    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div>
          {/*{services.service_content.map((content, i) => (*/}
          {/*  <div*/}
          {/*    key={i}*/}
          {/*    data-aos="fade-up"*/}
          {/*    data-aos-delay={i * 600}*/}
          {/*    className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm*/}
          {/*    hover:!blur-none"*/}
          {/*  >*/}
          {/*    <img src={content.logo} alt="..." className="mx-auto" />*/}
          {/*    <h6 className="my-3">{content.title}</h6>*/}
          {/*    <p className="leading-7">{content.para}</p>*/}
          {/*  </div>*/}
          {/*))}*/}

            <Carousel autoSlide={false} >
                {slides.map((slide, index) => (
                    <img className={'max-w-md shadow-2xl .hover:scale-110 rounded-lg'} key={index} src={slide} alt={`Slide ` + slide} />
                ))}
            </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Services;

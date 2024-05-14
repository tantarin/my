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
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div>
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

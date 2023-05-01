import React from 'react';
import "./Testimonials.css";
import Image1 from '../../assets/avatar-1.svg';
import Image3 from '../../assets/avatar-3.svg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: Image1,
    title: "Rakesh Rana",
    subtitle: "Product designer at Dribble",
    comment:
      "He is a GOD for me. I would like to thank GOD for sending a genius like him on Earth I am blessed that i have got a chance to work with him 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className="testimonials__container grid"
       modules={[ Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{ clickable: true }}>
        {data.map(({id, image, title, subtitle, comment}) => {
          return(
            <SwiperSlide className="testimonial__item">
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonias__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
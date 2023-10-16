import React from 'react'
import './testimonial.css'
import { BiSolidQuoteLeft,BiSolidQuoteRight} from 'react-icons/bi';
import {BsQuote} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonial = () => {
    return (
        <section id='testimonial'>
            
            <h2>Testimonial</h2>
            <hr/>
            <div className='testimonials_container'>
            <Swiper
                            modules={[Pagination, Autoplay,A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

<SwiperSlide>
                <article className='testimonial'>
                    <div className='client_avtar'>
                        <img src='./images/mukesh.jpeg' alt='mukesh' />
                        {/* <MdFormatQuote className='quote'/> */}
                        <h5 className='client_name'>Mukesh Sinha</h5>
                        <small className='client_review'>
                            <p> <BiSolidQuoteLeft className='quote'/> I can't recommend "Ujjwal Ghosh "enough. They're a true professional with a keen eye for design. Not only did they meet our design requirements, but they also exceeded our expectations. Their expertise in HTML, CSS, and JavaScript is evident in the seamless user experience they created. We're thrilled with the results! <BiSolidQuoteRight className='quote'/></p> 
                        </small>
                    </div>
                </article>
                </SwiperSlide>
                <SwiperSlide>
                <article className='testimonial'>
                    <div className='client_avtar'>
                        <img src='./images/soham.jpeg' alt='mukesh' />
                        {/* <MdFormatQuote className='quote'/> */}
                        <h5 className='client_name'>Soham Chowdhury</h5>
                        <small className='client_review'>
                            <p> <BiSolidQuoteLeft className='quote'/>We were fortunate to have "Ujjwal Ghosh" on our team. Their contributions transformed our website, making it not only visually appealing but also highly functional. Their ability to optimize for various devices ensured a flawless experience for our users. We're excited to continue working with them! <BiSolidQuoteRight className='quote'/></p> 
                        </small>
                    </div>
                </article>
                </SwiperSlide>
                <SwiperSlide>
                <article className='testimonial'>
                    <div className='client_avtar'>
                        <img src='./images/rudra.jpeg' alt='mukesh' />
                        {/* <MdFormatQuote className='quote'/> */}
                        <h5 className='client_name'>Rudra Karmakar</h5>
                        <small className='client_review'>
                            <p> <BiSolidQuoteLeft className='quote'/> Working with "Ujjwal Ghosh" was an absolute game-changer for our project. Their attention to detail and creativity brought our website to life. They have an exceptional ability to turn concepts into visually stunning, user-friendly interfaces. We were beyond impressed with the end result! <BiSolidQuoteRight className='quote'/></p> 
                        </small>
                    </div>
                </article>
                </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Testimonial;
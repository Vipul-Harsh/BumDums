import React from 'react';
import Slider from 'react-slick';
import { TestimonialsData } from '../data/testimonials';
const Testimonial = () => {
    const settingsTestimonial = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        ,
    };
    return (
        <section className="testimonial testimonial2 padding-bottom-120 padding-top-110">
            <div className="container">
                <div className="testi-shapes">
                    <span className="ts-1">
                        <img src="/assets/images/shapes/triple.png" alt="" />
                    </span>
                    <span className="ts-2 item-bounce">
                        <img src="/assets/images/shapes/35.png" alt="" />
                    </span>
                    <span className="ts-3 item-animateTwo">
                        <img src="/assets/images/shapes/26.png" alt="" />
                    </span>
                </div>
                <div className="common-title-area text-center padding-bottom-50 wow fadeInUp">
                    <h3>testimonial</h3>
                    <h2>
                        client <span>feedback</span>
                    </h2>
                </div>
                <div className="testimonial-active">
                    <Slider {...settingsTestimonial}>
                        {TestimonialsData.map(testimonial => {
                            const starIcons = [];
                            for (let i = 0; i < testimonial?.stars; i++) {
                                starIcons.push(
                                    <span key={i}>
                                        <i className="fas fa-star" />
                                    </span>
                                );
                            }
                            return <>
                                <div className="single-testimonial">
                                    <div className="testi-top">
                                        <div className="tin-shapes">
                                            <span className="tsin-1">
                                                <img src="/assets/images/shapes/33.png" alt="" />
                                            </span>
                                        </div>
                                        
                                        <div className="testi-meta">
                                            <h6>{testimonial.name}</h6>
                                            <p>{testimonial.role}</p>
                                            <div className="testi-rating">
                                                {starIcons.map(star =>
                                                    <>
                                                        <span>
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {testimonial.description}
                                    </p>
                                </div>
                            </>
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
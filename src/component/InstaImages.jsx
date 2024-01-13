import React from 'react'
import Slider from 'react-slick';
const InstaImages = () => {

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
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
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="ins-gallery-area padding-top-120">
            <div className="container">
                <div className="common-title-area text-center padding-bottom-60 wow fadeInUp">
                    <h3>Bum dums</h3>
                    <h2>
                        Ambiance & <span> Interiors </span>
                    </h2>
                </div>
                <div className="ins-gallery-active">
                    <Slider {...settings2}>
                        <div className="single-inst-item">
                            <a href="#">
                                {" "}
                                <img src="/assets/images/img/inst1.jpg" alt="" />{" "}
                            </a>
                            <span className="ins-icon">
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="/assets/images/img/inst2.jpg" alt="" />{" "}
                            </a>
                            <span className="ins-icon">
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="/assets/images/img/inst3.jpg" alt="" />{" "}
                            </a>
                            <span className="ins-icon">
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="/assets/images/img/inst4.jpg" alt="" />{" "}
                            </a>
                            <span className="ins-icon">
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </span>
                        </div>
                        <div className="single-inst-item">
                            <a href="#">
                                <img src="/assets/images/img/inst5.jpg" alt="" />{" "}
                            </a>
                            <span className="ins-icon">
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </span>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default InstaImages
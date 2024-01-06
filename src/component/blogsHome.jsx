import React from 'react'
import Slider from 'react-slick';
import { BlogsData } from '../data/blogs';
import { Link } from 'react-router-dom';
const BlogsHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        style: { gap: '10px' },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    };
    return (
        <section className="blog-area padding-top-110 ">
            <div className="blog-shapes">
                <span className="bs-1">
                    <img src="/assets/images/img/37.png" alt="" />
                </span>
            </div>
            <div className="container">
                <div className="common-title-area text-center padding-bottom-60 wow fadeInUp">
                    <h3>Bum dums</h3>
                    <h2>
                        blog &amp; <span> news </span>
                    </h2>
                </div>
                <div className="blog-slider-active">
                    <Slider {...settings}>
                        {BlogsData.map(blog =>
                            <>
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-single.html">
                                            <img src={blog?.image} alt="" />
                                        </a>
                                        <div className="b-badge">
                                            <span className="date">
                                                <a href="#">{""+new Date(blog?.date)?.getDate()}</a>
                                            </span>
                                            <br />
                                            <span className="month">
                                                <a href="#">{""+new Date(blog?.date)?.toLocaleDateString("en-US", {month:'short'})}</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="blog-meta d-flex justify-content-between">
                                        <span>
                                            <a href="#">
                                                <i className="fas fa-tags" /> {blog?.category}
                                            </a>
                                        </span>
                                        {/* <span>
                                            <a href="#">
                                                <i className="fas fa-user-circle" /> milone hridoy
                                            </a>
                                        </span> */}
                                    </div>
                                    <h4>
                                        <Link to={"/blog/"+blog?.slug}>{blog?.title}</Link>
                                    </h4>
                                </div>
                            </>)}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default BlogsHome
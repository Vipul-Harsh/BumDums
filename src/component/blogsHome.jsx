import React from 'react'
import Slider from 'react-slick';
const BlogsHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        style: { gap: '10px' }
    };
  return (
    <section className="blog-area padding-top-110 padding-bottom-120">
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
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-single.html">
                            <img src="/assets/images/blog/b-1.jpg" alt="" />
                        </a>
                        <div className="b-badge">
                            <span className="date">
                                <a href="#">02</a>
                            </span>
                            <br />
                            <span className="month">
                                <a href="#">dec</a>
                            </span>
                        </div>
                    </div>
                    <div className="blog-meta d-flex justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fas fa-tags" /> chicken burger
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fas fa-user-circle" /> milone hridoy
                            </a>
                        </span>
                    </div>
                    <h4>
                        <a href="blog-single.html">Game day Burger with Homemade</a>
                    </h4>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-single.html">
                            <img src="/assets/images/blog/b-2.jpg" alt="" />
                        </a>
                        <div className="b-badge">
                            <span className="date">
                                <a href="#">02</a>
                            </span>
                            <br />
                            <span className="month">
                                <a href="#">dec</a>
                            </span>
                        </div>
                    </div>
                    <div className="blog-meta d-flex justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fas fa-tags" /> pizza
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fas fa-user-circle" /> milone hridoy
                            </a>
                        </span>
                    </div>
                    <h4>
                        <a href="blog-single.html">Delicious pizza with on a wooden</a>
                    </h4>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-single.html">
                            <img src="/assets/images/blog/b-3.jpg" alt="" />
                        </a>
                        <div className="b-badge">
                            <span className="date">
                                <a href="#">02</a>
                            </span>
                            <br />
                            <span className="month">
                                <a href="#">dec</a>
                            </span>
                        </div>
                    </div>
                    <div className="blog-meta d-flex justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fas fa-tags" /> chicken burger
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fas fa-user-circle" /> milone hridoy
                            </a>
                        </span>
                    </div>
                    <h4>
                        <a href="blog-single.html">Game day Burger with Homemade</a>
                    </h4>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-single.html">
                            <img src="/assets/images/blog/b-1.jpg" alt="" />
                        </a>
                        <div className="b-badge">
                            <span className="date">
                                <a href="#">02</a>
                            </span>
                            <br />
                            <span className="month">
                                <a href="#">dec</a>
                            </span>
                        </div>
                    </div>
                    <div className="blog-meta d-flex justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fas fa-tags" /> chicken burger
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fas fa-user-circle" /> milone hridoy
                            </a>
                        </span>
                    </div>
                    <h4>
                        <a href="blog-single.html">Game day Burger with Homemade</a>
                    </h4>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-single.html">
                            <img src="/assets/images/blog/b-2.jpg" alt="" />
                        </a>
                        <div className="b-badge">
                            <span className="date">
                                <a href="#">02</a>
                            </span>
                            <br />
                            <span className="month">
                                <a href="#">dec</a>
                            </span>
                        </div>
                    </div>
                    <div className="blog-meta d-flex justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fas fa-tags" /> pizza
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fas fa-user-circle" /> milone hridoy
                            </a>
                        </span>
                    </div>
                    <h4>
                        <a href="blog-single.html">Delicious pizza with on a wooden</a>
                    </h4>
                </div>
                <div className="single-blog">
                    <div className="blog-img">
                        <a href="blog-single.html">
                            <img src="/assets/images/blog/b-3.jpg" alt="" />
                        </a>
                        <div className="b-badge">
                            <span className="date">
                                <a href="#">02</a>
                            </span>
                            <br />
                            <span className="month">
                                <a href="#">dec</a>
                            </span>
                        </div>
                    </div>
                    <div className="blog-meta d-flex justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fas fa-tags" /> chicken burger
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fas fa-user-circle" /> milone hridoy
                            </a>
                        </span>
                    </div>
                    <h4>
                        <a href="blog-single.html">Game day Burger with Homemade</a>
                    </h4>
                </div>
            </Slider>
        </div>
    </div>
</section>
  )
}

export default BlogsHome
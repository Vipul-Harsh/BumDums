import React from 'react'

const Contact = () => {
    return (
        <>
            {/* breadcrumb-area */}
            <div className="banner-area breadcrumb-area padding-top-120 padding-bottom-90">
                <div className="bread-shapes">
                    <span className="b-shape-1 item-bounce">
                        <img src="/assets/images/img/5.png" alt="" />
                    </span>
                    <span className="b-shape-2">
                        <img src="/assets/images/img/6.png" alt="" />
                    </span>
                    <span className="b-shape-3">
                        <img src="/assets/images/img/7.png" alt="" />
                    </span>
                    <span className="b-shape-4">
                        <img src="/assets/images/img/9.png" alt="" />
                    </span>
                    <span className="b-shape-5">
                        <img src="/assets/images/shapes/18.png" alt="" />
                    </span>
                    <span className="b-shape-6 item-animateOne">
                        <img src="/assets/images/img/7.png" alt="" />
                    </span>
                </div>
                <div className="container padding-top-120">
                    <div className="row justify-content-center">
                        <nav aria-label="breadcrumb">
                            <h2 className="page-title">contact</h2>
                            <ol className="breadcrumb text-center">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {" "}
                                    contact us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* contact-form-area */}
            <section className="about-area about-area2 writeto-us padding-top-120 padding-bottom-60">
                <div className="form-shapes">
                    <span className="fs1 item-animateOne">
                        <img src="/assets/images/shapes/1.png" alt="" />
                    </span>
                    <span className="fs2 item-bounce">
                        <img src="/assets/images/shapes/12.png" alt="" />
                    </span>
                    <span className="fs3">
                        <img src="/assets/images/shapes/13.png" alt="" />
                    </span>
                    <span className="fs4 item-bounce">
                        <img src="/assets/images/shapes/26.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12  wow fadeInUp">
                            <div className="about-left">
                                <div className="about-l-shapes">
                                    <span className="als-1">
                                        <img src="/assets/images/shapes/2.png" alt="" />
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                        <div className="about-gallery-1">
                                            <img src="/assets/images/gallery/1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                                        <div className="about-gallery-2">
                                            <img src="/assets/images/gallery/2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="about-gallery-3">
                                            <img src="/assets/images/gallery/3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-5 d-flex align-items-stretch ">
                                        <div className="about-gallery-5 text-center">
                                            <img src="/assets/images/gallery/5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeInUp">
                            <div className="contact-form-area">
                                <h3>
                                    write <span>to us</span>
                                </h3>
                                <form action="#">
                                    <input type="text" placeholder="your name:" />
                                    <input type="email" placeholder="email" />
                                    <input type="url" placeholder="website" />
                                    <textarea placeholder="write your text" defaultValue={""} />
                                    <button type="submit" className="btn">
                                        send a message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* info-area */}
            <div className="info-area padding-bottom-120">
                <div className="info-shapes">
                    <span className="info-s-1">
                        <img src="/assets/images/shapes/7.png" alt="" />
                    </span>
                    <span className="info-s-2">
                        <img src="/assets/images/img/32.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-info d-flex flex-sm-row flex-md-column flex-lg-row justify-content-around align-items-center">
                                <div className="info-img">
                                    <img src="/assets/images/icons/c1.png" alt="" />
                                </div>
                                <div className="info-content text-center text-lg-left">
                                    <h5>Phone Us 24/7</h5>
                                    <p>123-5879406</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-info d-flex flex-sm-row flex-md-column flex-lg-row  justify-content-around align-items-center">
                                <div className="info-img">
                                    <img src="/assets/images/icons/c2.png" alt="" />
                                </div>
                                <div className="info-content text-center text-lg-left">
                                    <h5>Get Direction</h5>
                                    <p>Sector:7, Road:27, House:18, Uttara, Dhaka, 1230 Dhaka.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-info d-flex flex-sm-row flex-md-column flex-lg-row  justify-content-around align-items-center">
                                <div className="info-img">
                                    <img src="/assets/images/icons/c3.png" alt="" />
                                </div>
                                <div className="info-content text-center text-lg-left">
                                    <h5>Opening Hours</h5>
                                    <p>Everyday 11.00 PM - 11.00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* map area */}
            <div className="map-area padding-bottom-120 wow fadeInUp">
                <div className="map-shapes">
                    <div className="ms-1">
                        <img src="/assets/images/shapes/16.png" alt="" />
                    </div>
                </div>
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4148247742232!2d90.39747015024156!3d23.874904684452307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43bc25ec0ad%3A0x92541def35db7c01!2sSoftTech-IT%20Institute!5e0!3m2!1sen!2sbd!4v1611143717399!5m2!1sen!2sbd"
                        width={1190}
                        height={400}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex={0}
                    />
                </div>
            </div>
        </>

    )
}

export default Contact
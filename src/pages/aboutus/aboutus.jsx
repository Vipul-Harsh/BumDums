import { Link } from "react-router-dom"
import InstaImages from "../../component/InstaImages"
import Testimonial from "../../component/Testimonial"
import BlogsHome from "../../component/blogsHome"

const Aboutus = () => {
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
                            <h2 className="page-title">about us</h2>
                            <ol className="breadcrumb text-center">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    about us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* food-items countdown */}
            <div className="foods-counter">
                <div className="container">
                    <div className="row foods-wrapper">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food text-center">
                                <img src="/assets/images/icons/3.png" alt="" />
                                <span className="items counter">2000</span>
                                <p>food item</p>
                                <span className="g-s-4">
                                    <img src="/assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="/assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food orange text-center">
                                <img src="/assets/images/icons/f-2.png" alt="" />
                                <span className="items counter">500</span>
                                <p> burger food item</p>
                                <span className="g-s-4">
                                    <img src="/assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="/assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food text-center">
                                <img src="/assets/images/icons/f-3.png" alt="" />
                                <span className="items counter">1000</span>
                                <p> soft drinks item</p>
                                <span className="g-s-4">
                                    <img src="/assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="/assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food orange text-center">
                                <img src="/assets/images/icons/f-4.png" alt="" />
                                <span className="items counter">600</span>
                                <p>Delicious Fast Food</p>
                                <span className="g-s-4">
                                    <img src="/assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="/assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us */}
            <section className="about-area about-area2 padding-top-120 padding-bottom-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12  wow fadeInLeft">
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
                                            <img src="/assets/images/gallery/4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12  wow fadeInRight">
                            <div className="about-right">
                                <div className="about-r-shapes">
                                    <span className="as-1">
                                        <img src="/assets/images/shapes/1.png" alt="" />
                                    </span>
                                </div>
                                <h2>
                                    The Story about Food khan, only for
                                    <span>hungry people.</span>
                                </h2>
                                <p>
                                    Food is a restaurant, bar and coffee roastery located on a busy
                                    corner site in Farringdon's Exmouth Market. With glazed.
                                </p>
                                <div className="history-tab">
                                    <ul className="nav" id="historyTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <div
                                                className="nav-link active"
                                                id="history-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#history-tab-pane"
                                                role="tab"
                                                aria-controls="history-tab-pane"
                                                aria-selected="true"
                                            >
                                                history
                                            </div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <div
                                                className="nav-link"
                                                id="journey-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#journey-tab-pane"
                                                role="tab"
                                                aria-controls="journey-tab-pane"
                                                aria-selected="false"
                                            >
                                                journey
                                            </div>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <div
                                                className="nav-link"
                                                id="experience-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#experience-tab-pane"
                                                role="tab"
                                                aria-controls="experience-tab-pane"
                                                aria-selected="false"
                                            >
                                                experience
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="historyTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="history-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="history-tab"
                                            tabIndex={0}
                                        >
                                            <div className="his-content">
                                                <p>
                                                    FoodKhan is Bangladeshi’s own fast food restaurants chain
                                                    offering Burgers, French fries, Milkshakes, Smoothies and
                                                    so much more.
                                                </p>
                                                <div className="sig-wrapper d-flex flex-wrap justify-content-around align-items-center">
                                                    <div className="sig-img d-flex align-items-center">
                                                        <img src="/assets/images/icons/sig.png" alt="" />
                                                        <span>head of chef</span>
                                                    </div>
                                                    <a href="food-page.html" className="btn">
                                                        all items
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="journey-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="journey-tab"
                                            tabIndex={0}
                                        >
                                            <div className="his-content">
                                                <p>
                                                    FoodKhan is Bangladeshi’s own fast food restaurants chain
                                                    offering Burgers, French fries, Milkshakes, Smoothies and
                                                    so much more. We are known for our delicious taste,
                                                    superior quality
                                                </p>
                                                <div className="sig-wrapper d-flex flex-wrap justify-content-around align-items-center">
                                                    <div className="sig-img d-flex align-items-center">
                                                        <img src="/assets/images/icons/sig.png" alt="" />
                                                        <span>head of chef</span>
                                                    </div>
                                                    <a href="food-page.html" className="btn">
                                                        all items
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="experience-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="experience-tab"
                                            tabIndex={0}
                                        >
                                            <div className="his-content">
                                                <p>
                                                    Food Khan is a restaurant, bar and coffee roasters located
                                                    on a busy corner site in Farrington's Exmouth Market.
                                                </p>
                                                <div className="sig-wrapper d-flex flex-wrap justify-content-around align-items-center">
                                                    <div className="sig-img d-flex align-items-center">
                                                        <img src="/assets/images/icons/sig.png" alt="" />
                                                        <span>head of chef</span>
                                                    </div>
                                                    <a href="food-page.html" className="btn">
                                                        all items
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* delicious food */}
            <section className="delicious-area padding-top-120 padding-bottom-120">
                <div className="container">
                    <div className="deli-shapes">
                        <span className="ds-1">
                            <img src="/assets/images/shapes/transparent1.png" alt="" />
                        </span>
                        <span className="ds-2 item-animateOne">
                            <img src="/assets/images/shapes/27.png" alt="" />
                        </span>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6  wow fadeInLeft">
                            <div className="delicious-left">
                                <h2>
                                    Fresh taste at a great price, only for
                                    <span>Delicious Food lover.</span>
                                </h2>
                                <a
                                    className="play-btn1 item-ripple popup-youtube"
                                    href="https://www.youtube.com/watch?v=9xwazD5SyVg"
                                >
                                    <i className="fas fa-play" />
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=9xwazD5SyVg"
                                    className=" popup-youtube intro"
                                >
                                    {" "}
                                    intro video
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block  wow fadeInRight">
                            <div className="delicious-right">
                                <img src="/assets/images/gallery/1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*team area */}
            {/* <section className="team-area padding-bottom-110 padding-top-110 wow fadeInUp">
                <div className="team-area-shapes">
                    <span className="ts-1">
                        <img src="/assets/images/shapes/pizza-s1.png" alt="" />
                    </span>
                    <span className="ts-2">
                        <img src="/assets/images/shapes/brr.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="common-title-area text-center padding-bottom-50">
                        <h3>team membar</h3>
                        <h2>
                            professional <span>chef</span>
                        </h2>
                    </div>
                    <div className="team-slider-active">
                        <div className="single-team text-center">
                            <div className="s-t-img">
                                <img src="/assets/images/team/t1.png" alt="" />
                            </div>
                            <div className="t-content">
                                <h5>Mathij Sen Deo</h5>
                                <p>It is a long established fact that a reader BBQ food Chicken.</p>
                            </div>
                            <div className="t-social-b">
                                <span className="follow">follow :</span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="single-team text-center">
                            <div className="s-t-img">
                                <img src="/assets/images/team/t2.png" alt="" />
                            </div>
                            <div className="t-content">
                                <h5>Malina Weissa</h5>
                                <p>It is a long established fact that a reader BBQ food Chicken.</p>
                            </div>
                            <div className="t-social-b">
                                <span className="follow">follow :</span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="single-team text-center">
                            <div className="s-t-img">
                                <img src="/assets/images/team/t3.png" alt="" />
                            </div>
                            <div className="t-content">
                                <h5>Tonmoy Khan</h5>
                                <p>It is a long established fact that a reader BBQ food Chicken.</p>
                            </div>
                            <div className="t-social-b">
                                <span className="follow">follow :</span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="single-team text-center">
                            <div className="s-t-img">
                                <img src="/assets/images/team/t4.png" alt="" />
                            </div>
                            <div className="t-content">
                                <h5>Mathja Semo</h5>
                                <p>It is a long established fact that a reader BBQ food Chicken.</p>
                            </div>
                            <div className="t-social-b">
                                <span className="follow">follow :</span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="single-team text-center">
                            <div className="s-t-img">
                                <img src="/assets/images/team/t1.png" alt="" />
                            </div>
                            <div className="t-content">
                                <h5>Mathij Sen Deo</h5>
                                <p>It is a long established fact that a reader BBQ food Chicken.</p>
                            </div>
                            <div className="t-social-b">
                                <span className="follow">follow :</span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </span>
                                <span className="t-social">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* testimonial */}
            <Testimonial />
            {/* slider-gallery-img */}
            <InstaImages />
            {/* blog-area */}
            <BlogsHome />
        </>

    )
}

export default Aboutus

const Aboutus = () => {
    return (
        <>
            {/* Preloader Starts */}
            <div className="preloader" id="preloader">
                <div className="preloader-inner">
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
            </div>
            {/* header */}
            <header>
                {/* header-top */}
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap justify-content-between">
                                <div className="contact-box">
                                    <span>
                                        {" "}
                                        <a href="#">
                                            <i className="fas fa-phone-square-alt" /> 123-58794069
                                        </a>{" "}
                                    </span>
                                    <span>
                                        {" "}
                                        <a href="#">
                                            <i className="fas fa-envelope-open-text" />{" "}
                                            supportfoodkhan@.com
                                        </a>
                                    </span>
                                </div>
                                <div className="social-box">
                                    <span>
                                        <a href="#">
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-bottom */}
                <div className="header-bottom margin-top-20">
                    <div className="container position-relative">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                                <div className="logo">
                                    <a href="index.html">
                                        {" "}
                                        <img src="assets/images/logo/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul className="main-menu">
                                        <li>
                                            <a href="#">
                                                home{" "}
                                                <span>
                                                    <i className="fas fa-angle-down" />
                                                </span>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="index.html">home-1</a>
                                                </li>
                                                <li>
                                                    <a href="homepage2.html">home-2</a>
                                                </li>
                                                <li>
                                                    <a href="homepage3.html">home-3</a>
                                                </li>
                                                <li>
                                                    <a href="homepage4.html">home-4</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">about us</a>
                                        </li>
                                        <li>
                                            <a href="menu.html">menu</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                blog{" "}
                                                <span>
                                                    <i className="fas fa-angle-down" />
                                                </span>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="blog.html">blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">single blog</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                pages{" "}
                                                <span>
                                                    <i className="fas fa-angle-down" />
                                                </span>
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="checkout.html">checkout page</a>
                                                </li>
                                                <li>
                                                    <a href="single-dish.html">single dish page</a>
                                                </li>
                                                <li>
                                                    <a href="food-page.html">food page</a>
                                                </li>
                                                <li>
                                                    <a href="food-page2.html">food page 2</a>
                                                </li>
                                                <li>
                                                    <a href="shopping-cart.html">shopping cart page</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">wishlist page</a>
                                                </li>
                                                <li>
                                                    <a href="profile.html">profile page</a>
                                                </li>
                                                <li>
                                                    <a href="single-food.html">single food page</a>
                                                </li>
                                                <li>
                                                    <a href="gallery.html">gallery page</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login page</a>
                                                </li>
                                                <li>
                                                    <a href="signup.html">signup page</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404 page</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">contact us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-md-9 col-8">
                                <div className="customer-area">
                                    <span>
                                        <a href="wishlist.html">
                                            <i className="fas fa-heart" />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="profile.html">
                                            <i className="fas fa-user" />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="shopping-cart.html">
                                            <i className="fas fa-shopping-basket" />
                                        </a>
                                    </span>
                                    <a href="#" className="btn">
                                        login
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* mobile-menu */}
                        <div className="mobile-menu" />
                    </div>
                </div>
            </header>
            {/* breadcrumb-area */}
            <div className="banner-area breadcrumb-area padding-top-120 padding-bottom-90">
                <div className="bread-shapes">
                    <span className="b-shape-1 item-bounce">
                        <img src="assets/images/img/5.png" alt="" />
                    </span>
                    <span className="b-shape-2">
                        <img src="assets/images/img/6.png" alt="" />
                    </span>
                    <span className="b-shape-3">
                        <img src="assets/images/img/7.png" alt="" />
                    </span>
                    <span className="b-shape-4">
                        <img src="assets/images/img/9.png" alt="" />
                    </span>
                    <span className="b-shape-5">
                        <img src="assets/images/shapes/18.png" alt="" />
                    </span>
                    <span className="b-shape-6 item-animateOne">
                        <img src="assets/images/img/7.png" alt="" />
                    </span>
                </div>
                <div className="container padding-top-120">
                    <div className="row justify-content-center">
                        <nav aria-label="breadcrumb">
                            <h2 className="page-title">about us</h2>
                            <ol className="breadcrumb text-center">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
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
                                <img src="assets/images/icons/3.png" alt="" />
                                <span className="items counter">2000</span>
                                <p>food item</p>
                                <span className="g-s-4">
                                    <img src="assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food orange text-center">
                                <img src="assets/images/icons/f-2.png" alt="" />
                                <span className="items counter">500</span>
                                <p> burger food item</p>
                                <span className="g-s-4">
                                    <img src="assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food text-center">
                                <img src="assets/images/icons/f-3.png" alt="" />
                                <span className="items counter">1000</span>
                                <p> soft drinks item</p>
                                <span className="g-s-4">
                                    <img src="assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="assets/images/shapes/14.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-food orange text-center">
                                <img src="assets/images/icons/f-4.png" alt="" />
                                <span className="items counter">600</span>
                                <p>Delicious Fast Food</p>
                                <span className="g-s-4">
                                    <img src="assets/images/shapes/10.png" alt="" />
                                </span>
                                <span className="g-s-5">
                                    <img src="assets/images/shapes/14.png" alt="" />
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
                                        <img src="assets/images/shapes/2.png" alt="" />
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-end justify-content-end margin-bottom-20">
                                        <div className="about-gallery-1">
                                            <img src="assets/images/gallery/1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-8 margin-bottom-20">
                                        <div className="about-gallery-2">
                                            <img src="assets/images/gallery/2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="about-gallery-3">
                                            <img src="assets/images/gallery/3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-5 d-flex align-items-stretch ">
                                        <div className="about-gallery-5 text-center">
                                            <img src="assets/images/gallery/4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12  wow fadeInRight">
                            <div className="about-right">
                                <div className="about-r-shapes">
                                    <span className="as-1">
                                        <img src="assets/images/shapes/1.png" alt="" />
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
                                                        <img src="assets/images/icons/sig.png" alt="" />
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
                                                        <img src="assets/images/icons/sig.png" alt="" />
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
                                                        <img src="assets/images/icons/sig.png" alt="" />
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
                            <img src="assets/images/shapes/transparent1.png" alt="" />
                        </span>
                        <span className="ds-2 item-animateOne">
                            <img src="assets/images/shapes/27.png" alt="" />
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
                                <img src="assets/images/gallery/1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*team area */}
            <section className="team-area padding-bottom-110 padding-top-110 wow fadeInUp">
                <div className="team-area-shapes">
                    <span className="ts-1">
                        <img src="assets/images/shapes/pizza-s1.png" alt="" />
                    </span>
                    <span className="ts-2">
                        <img src="assets/images/shapes/brr.png" alt="" />
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
                                <img src="assets/images/team/t1.png" alt="" />
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
                                <img src="assets/images/team/t2.png" alt="" />
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
                                <img src="assets/images/team/t3.png" alt="" />
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
                                <img src="assets/images/team/t4.png" alt="" />
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
                                <img src="assets/images/team/t1.png" alt="" />
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
            </section>
            {/* testimonial */}
            <section className="testimonial padding-bottom-120 padding-top-110 wow fadeInUp">
                <div className="container">
                    <div className="testi-shapes">
                        <span className="ts-1">
                            <img src="assets/images/img/31.png" alt="" />
                        </span>
                        <span className="ts-2">
                            <img src="assets/images/img/32.png" alt="" />
                        </span>
                        <span className="ts-3 item-animateTwo">
                            <img src="assets/images/shapes/7.png" alt="" />
                        </span>
                    </div>
                    <div className="common-title-area text-center padding-bottom-50">
                        <h3>testimonial</h3>
                        <h2>
                            client <span>feedback</span>
                        </h2>
                    </div>
                    <div className="testimonial-active">
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-1.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-2.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-1.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-2.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-1.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-2.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-1.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-top">
                                <div className="tin-shapes">
                                    <span className="tsin-1">
                                        <img src="assets/images/shapes/33.png" alt="" />
                                    </span>
                                </div>
                                <div className="testi-img">
                                    <img src="assets/images/testimonial/testi-2.png" alt="" />
                                </div>
                                <div className="testi-meta">
                                    <h6>Christ Deo</h6>
                                    <p>CEO A4Tech Ltd.</p>
                                    <div className="testi-rating">
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                        <span>
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Food Khan is a gret Restaurant from the University of Texas at
                                Austin has been researching the benefits of frequent testing and the
                                feedback leads to. He explains that in the history of the study.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* slider-gallery-img */}
            <div className="slider-gallery-img">
                <div className="container-fluid">
                    <div className="slider-gallery-active">
                        <div className="single-gallery-img">
                            <img src="assets/images/gallery/gm1.jpg" alt="" />
                            <a href="gallery.html">
                                <span>
                                    <i className="fas fa-image" />
                                </span>
                            </a>
                        </div>
                        <div className="single-gallery-img">
                            <img src="assets/images/gallery/gm2.jpg" alt="" />
                            <a href="gallery.html">
                                <span>
                                    <i className="fas fa-image" />
                                </span>
                            </a>
                        </div>
                        <div className="single-gallery-img">
                            <img src="assets/images/gallery/gm3.jpg" alt="" />
                            <a href="gallery.html">
                                <span>
                                    <i className="fas fa-image" />
                                </span>
                            </a>
                        </div>
                        <div className="single-gallery-img">
                            <img src="assets/images/gallery/gm4.jpg" alt="" />
                            <a href="gallery.html">
                                <span>
                                    <i className="fas fa-image" />
                                </span>
                            </a>
                        </div>
                        <div className="single-gallery-img">
                            <img src="assets/images/gallery/gm5.jpg" alt="" />
                            <a href="gallery.html">
                                <span>
                                    <i className="fas fa-image" />
                                </span>
                            </a>
                        </div>
                        <div className="single-gallery-img">
                            <img src="assets/images/gallery/gm6.jpg" alt="" />
                            <a href="gallery.html">
                                <span>
                                    <i className="fas fa-image" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog-area */}
            <section className="blog-area blog-area-about padding-top-110 padding-bottom-120 wow fadeInUp">
                <div className="container">
                    <div className="common-title-area text-center padding-bottom-60">
                        <h3>food khan</h3>
                        <h2>
                            blog &amp; <span>news</span>{" "}
                        </h2>
                    </div>
                    <div className="blog-slider-active">
                        <div className="single-blog">
                            <div className="blog-img">
                                <a href="blog-single.html">
                                    {" "}
                                    <img src="assets/images/blog/b-1.jpg" alt="" />
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
                                    {" "}
                                    <img src="assets/images/blog/b-2.jpg" alt="" />
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
                                    {" "}
                                    <img src="assets/images/blog/b-3.jpg" alt="" />
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
                                    {" "}
                                    <img src="assets/images/blog/b-1.jpg" alt="" />
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
                                    {" "}
                                    <img src="assets/images/blog/b-2.jpg" alt="" />
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
                                    {" "}
                                    <img src="assets/images/blog/b-3.jpg" alt="" />
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
                    </div>
                </div>
            </section>
            {/* footer area */}
            <footer className="padding-top-40 padding-bottom-40">
                <div className="fo-shapes">
                    <span className="fs-1">
                        <img src="assets/images/gallery/26.png" alt="" />
                    </span>
                    <span className="fs-2 item-animateTwo">
                        <img src="assets/images/shapes/25.png" alt="" />
                    </span>
                    <span className="fs-3 item-animateTwo">
                        <img src="assets/images/shapes/26.png" alt="" />
                    </span>
                    <span className="fs-4 item-animateOne">
                        <img src="assets/images/shapes/27.png" alt="" />
                    </span>
                    <span className="fs-5 item-bounce">
                        <img src="assets/images/shapes/3.png" alt="" />
                    </span>
                    <span className="fs-6">
                        <img src="assets/images/shapes/22.png" alt="" />
                    </span>
                    <span className="fs-7">
                        <img src="assets/images/shapes/30.png" alt="" />
                    </span>
                </div>
                <div className="footer-top d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center justify-content-between padding-bottom-25">
                            <div className="col-lg-3 col-md-3">
                                <div className="f-logo">
                                    <a href="index.html">
                                        {" "}
                                        <img src="assets/images/logo/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="f-title">
                                    <h4>
                                        Feel Hunger! Order Your<span> Like Food.</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <a href="shopping-cart.html" className="btn">
                                    order now
                                </a>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="footer-bottom padding-top-22 padding-bottom-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>address</h6>
                                    <p>570 8th Ave,New York, NY 10018 United States</p>
                                    <a href="#" className="f-link">
                                        view google map
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>book a table</h6>
                                    <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                                    <a href="#" className="f-link">
                                        make a call
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>opening hours</h6>
                                    <p>
                                        <span>monday-friday: 8am - 4pm</span>
                                        <br />
                                        <span>saturday: 9am - 5pm</span>
                                    </p>
                                    <a href="#" className="f-link">
                                        make a call
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20">
                                <div className="widget">
                                    <h6>newsletter</h6>
                                    <div className="newsletter d-flex">
                                        <form action="#">
                                            <input type="email" placeholder="enter your email" />{" "}
                                            <button type="submit">
                                                <i className="fas fa-paper-plane" />
                                            </button>
                                        </form>
                                    </div>
                                    <a href="#" className="f-link">
                                        subscribe now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area text-center">
                    <p>
                        Copyright © 2021 <a href="index.html">Khadyo</a>
                    </p>
                </div>
            </footer>
            {/* ToTop Button */}
            <button className="scrollup">
                <i className="fas fa-angle-up" />
            </button>
        </>

    )
}

export default Aboutus
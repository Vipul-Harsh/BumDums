import { Link } from "react-router-dom";
import InstaImages from "../../component/InstaImages";
import Testimonial from "../../component/Testimonial";
import BlogsHome from "../../component/blogsHome";
import { menu, menu_categories } from "../../data/menu"
import Slider from 'react-slick';
const Home = () => {



    return (
        <>
            {/* burger-promo-area */}
            <section className="delivery-area burger-promo-area padding-top-240 padding-bottom-135">
                <div className="del-shapes">
                    <span className="ds-1">
                        <img src="/assets/images/shapes/40.png" alt="" />
                    </span>
                    <span className="ds-2">
                        <img src="/assets/images/shapes/41.png" alt="" />
                    </span>
                    <span className="ds-33">
                        <img src="/assets/images/shapes/5.png" alt="" />
                    </span>
                    <span className="ds-4">
                        <img src="/assets/images/shapes/2.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-lg-6 col-md-12 margin-bottom-20">
                            <div className="delivery-left">
                                <div className="burger-shapes">
                                    <span className="bs1">
                                        <img src="/assets/images/shapes/capsicam.png" alt="" />
                                    </span>
                                    <span className="bs2">
                                        <img src="/assets/images/shapes/sauce.png" alt="" />
                                    </span>
                                    <span className="bs3">
                                        <img src="/assets/images/shapes/sale.png" alt="" />
                                    </span>
                                    <span className="bs4">
                                        <img src="/assets/images/shapes/redtpmatto.png" alt="" />
                                    </span>
                                    <span className="bs5">
                                        <img src="/assets/images/shapes/t-slice.png" alt="" />
                                    </span>
                                    <span className="bs6">
                                        <img src="/assets/images/shapes/113.png" alt="" />
                                    </span>
                                </div>
                                <img
                                    className="mp"
                                    src="/assets/images/menu-item/burger-promo.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="delivery-right">
                                <div className="common-title-area padding-bottom-40">
                                    <h3>Welcome to Bumdums</h3>
                                    <h1>
                                        A Culinary
                                        <br />
                                        <span>
                                            Oasis
                                        </span> in Tapukara
                                    </h1>
                                    <h5 className="margin-bottom-40 margin-top-40">
                                        Indulge in Veg Delights at the Best Restaurant in Tapukara
                                    </h5>
                                    <div className="order-box d-flex align-items-center">
                                        <Link to="/menu" className="btn">
                                            Explore Our Menu
                                        </Link>
                                        {/* <h5>
                                            price : <span>$10.50</span>
                                        </h5> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about us */}
            <section className="about-area padding-top-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 wow fadeInLeft">
                            <div className="about-left">
                                <div className="about-l-shapes">
                                    <span className="als-1">
                                        <img src="/assets/images/shapes/2.png" alt="" />
                                    </span>
                                </div>
                                <div className="row">
                                    <div
                                        className="
              col-lg-4 col-md-4 col-sm-4 col-4
              d-flex
              align-items-end
              justify-content-end
              margin-bottom-20
            "
                                    >
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
                                    <div
                                        className="
              col-lg-5 col-md-5 col-sm-5 col-5
              d-flex
              align-items-start
            "
                                    >
                                        <div className="about-gallery-4 text-center">
                                            <img className="mp" src="/assets/images/icons/3.png" alt="" />
                                            <div className="items counter">2000</div>
                                            <p>food item</p>
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
                        <div className="col-lg-6 col-md-12 offset-lg-1 wow fadeInRight">
                            <div className="about-right">
                                <div className="about-r-shapes">
                                    <span className="as-1 item-bounce">
                                        <img src="/assets/images/shapes/1.png" alt="" />
                                    </span>
                                </div>
                                <div className="common-title-area padding-bottom-30 wow fadeInLeft">
                                    <h3>Crafting Culinary Delights</h3>
                                    <h2>
                                        Discover a Modern Designed Haven for <span>
                                            Veg Connoisseurs
                                        </span>
                                    </h2>
                                </div>
                                <p>
                                    Bumdums isn't your average restaurant; it's a testament to our passion for crafting culinary delights.
                                </p>
                                <div className="garlic-burger-card">
                                    {/* <div className="garlic-burger-img">
                                        <img
                                            className="price-badge"
                                            src="/assets/images/icons/4.png"
                                            alt=""
                                        />
                                        <img src="/assets/images/icons/2.png" alt="" />
                                    </div> */}
                                    <div className="garlic-burger-content">
                                        <h5>Step into our modern-designed cafe,</h5>
                                        <p>
                                            where each corner tells a story of creativity and innovation. Our commitment to vegetarian cuisine shines through in every detail, creating an ambiance that's as delightful as our menu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* popular-dishes */}
            <section className="popular-dishes-area padding-top-110">
                <div className="pshapes">
                    <span className="ps-1 item-animateTwo">
                        <img src="/assets/images/shapes/11.png" alt="" />
                    </span>
                    <span className="ps-2 item-animateTwo">
                        <img src="/assets/images/shapes/12.png" alt="" />
                    </span>
                    <span className="ps-3 item-bounce">
                        <img src="/assets/images/shapes/13.png" alt="" />
                    </span>
                    <span className="ps-4 item-bounce">
                        <img src="/assets/images/shapes/14.png" alt="" />
                    </span>
                    <span className="ps-5">
                        <img src="/assets/images/shapes/15.png" alt="" />
                    </span>
                    <span className="ps-6">
                        <img src="/assets/images/shapes/16.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <nav
                        className="
                            popular-tab-nav
                            d-flex
                            flex-wrap
                            justify-content-between
                            align-items-center
                            "
                    >
                        <div className="common-title-area padding-bottom-30 wow fadeInLeft">
                            <h3>Bite into Perfection</h3>
                            <h2>
                                Signature  <span>Dishes</span> That<br />Tell a Tale of Flavor
                            </h2>
                        </div>
                        <ul
                            className="nav padding-bottom-30"
                            id="popularDishesTab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <div
                                    className="nav-link menu-text active"
                                    id="all-items-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#all-items-tab-pane"
                                    role="tab"
                                    aria-controls="all-items-tab-pane"
                                    aria-selected="true"
                                >
                                    all items
                                </div>
                            </li>
                            {menu_categories.map(category => <>
                                <li className="nav-item menu-text" role="presentation">
                                    <div
                                        className="nav-link"
                                        id={`${category}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#${category}-tab-pane`}
                                        role="tab"
                                        aria-controls={`${category}-tab-pane`}
                                        aria-selected="false"
                                    >
                                        {category}
                                    </div>
                                </li>
                            </>
                            )}
                        </ul>
                    </nav>
                    {/* main-content */}
                    <div className="tab-content" id="popularDishesTabContent">
                        {/* all items */}
                        <div
                            className="tab-pane fade show active"
                            id="all-items-tab-pane"
                            role="tabpanel"
                            aria-labelledby="all-items-tab"
                            tabIndex={0}
                        >
                            <div className="row">
                                {menu?.slice(0, 8)?.map(item => <>
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="single-dishes">
                                            <div className="dish-img">
                                                <img
                                                    src={item?.image.length > 0 ? item?.image : "/assets/images/menu-item/pd1.png"}
                                                    style={{ width: "inherit" }}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="dish-content">
                                                <h5>
                                                    <a href="single-dish.html">{item.name} </a>
                                                </h5>
                                                <p>
                                                    {item.description}
                                                </p>
                                                <span className="price">price : ₹{item.price}</span>
                                            </div>
                                            {item.tag && <span className="badge">{item.tag}</span>}
                                            {/* <div className="cart-opt">
                                                <span>
                                                    <a href="#">
                                                        <i className="fas fa-heart" />
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="shopping-cart.html">
                                                        <i className="fas fa-shopping-basket" />
                                                    </a>
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </>)}
                            </div>
                        </div>
                        {/* pizza */}
                        {menu_categories.map(category => <>
                            <div
                                className="tab-pane fade"
                                id={`${category}-tab-pane`}
                                role="tabpanel"
                                aria-labelledby={`${category}-tab`}
                                tabIndex={0}
                            >
                                <div className="row">
                                    {menu?.filter(item => item?.category === category)?.slice(0, 8)?.map(item => <>
                                        <div className="col-xl-3 col-lg-3 col-md-6">
                                            <div className="single-dishes">
                                                <div className="dish-img">
                                                    <img
                                                        src={item?.image.length > 0 ? item?.image : "/assets/images/menu-item/pd1.png"}
                                                        style={{ width: "inherit" }}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="dish-content">
                                                    <h5>
                                                        <a href="single-dish.html">{item.name} </a>
                                                    </h5>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                    <span className="price">price : ₹{item.price}</span>
                                                </div>
                                                {item.tag && <span className="badge">{item.tag}</span>}
                                                {/* <div className="cart-opt">
                                                <span>
                                                    <a href="#">
                                                        <i className="fas fa-heart" />
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="shopping-cart.html">
                                                        <i className="fas fa-shopping-basket" />
                                                    </a>
                                                </span>
                                            </div> */}
                                            </div>
                                        </div>
                                    </>)}
                                </div>
                            </div>
                        </>)}
                    </div>
                </div>
            </section>
            {/* banner-gallery */}
            <section className="banner-gallery padding-top-100 padding-bottom-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <div className="gallery-img-1">
                                        <h3>Buzzed Burger</h3>
                                        <p>Sale off 50% only this week</p>
                                        <a href="shopping-cart.html" className="btn">
                                            order now
                                        </a>
                                        <img src="/assets/images/gallery/24.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div
                                        className="
              gallery-img-2
              d-flex
              align-items-end
              justify-content-end
            "
                                    >
                                        <img src=" assets/images/gallery/26.png" alt="" />
                                        <img src="/assets/images/shapes/38.png" alt="" className="s11" />
                                        <span className="gprice-1">$15</span>
                                        <div className="gimg-content">
                                            <h5>Super Delicious Pizza</h5>
                                            <a href="shopping-cart.html">order now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row margin-top-30">
                                <div className="col-lg-4 col-md-4">
                                    <div className="gallery-img-3">
                                        <h5>Super Combo Burger</h5>
                                        <a href="shopping-cart.html">order now</a>
                                        <img src="/assets/images/gallery/23.png" alt="" />
                                        <img
                                            src="/assets/images/shapes/layer2.png"
                                            alt=""
                                            className="s12"
                                        />
                                        <img
                                            src="/assets/images/shapes/113.png"
                                            alt=""
                                            className="s13"
                                        />
                                        <span className="gprice-2">$15</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div
                                        className="
              gallery-img-2
              d-flex
              align-items-end
              justify-content-end
            "
                                    >
                                        <img src=" assets/images/gallery/26.png" alt="" />
                                        <img src="/assets/images/shapes/38.png" alt="" className="s11" />
                                        <span className="gprice-1">$15</span>
                                        <div className="gimg-content">
                                            <h5>Super Delicious Pizza</h5>
                                            <a href="shopping-cart.html">order now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="gallery-img-3">
                                        <h5>Super Combo Burger</h5>
                                        <a href="shopping-cart.html">order now</a>
                                        <img src="/assets/images/gallery/23.png" alt="" />
                                        <img
                                            src="/assets/images/shapes/layer2.png"
                                            alt=""
                                            className="s12"
                                        />
                                        <img
                                            src="/assets/images/shapes/113.png"
                                            alt=""
                                            className="s13"
                                        />
                                        <span className="gprice-2">$15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="gallery-img-4">
                                <h5>Super Combo Burger</h5>
                                <a href="shopping-cart.html" className="btn">
                                    order now
                                </a>
                                <img src="/assets/images/gallery/22.png" alt="" />
                                <img src="/assets/images/shapes/leaves.png" alt="" className="s14" />
                                <img
                                    src="/assets/images/shapes/transparent2.png"
                                    alt=""
                                    className="s15"
                                />
                                <span className="gprice-4">
                                    <img src="/assets/images/gallery/25.png" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* best quality */}
            <section className="best-quality padding-top-60">
                <div className="best-shapes d-none d-xl-block">
                    <span className="ds-1">
                        <img src="/assets/images/img/31.png" alt="" />
                    </span>
                    <span className="ds-2">
                        <img src="/assets/images/img/37.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="common-title-area text-center padding-50 wow fadeInUp">
                        <h3>Why Choose US?</h3>
                        <h2>
                            Best Quality{" "}
                            <span>
                                item
                                <br />
                                Ingredients
                            </span>{" "}
                        </h2>
                    </div>
                    <div className="row align-items-md-center align-items-lg-start">
                        <div className="col-lg-3 col-md-3 col-sm-12 text-center text-md-start margin-bottom-60 wow fadeInLeft">
                            <div className="ingredients margin-bottom-80">
                                <h5>Moist Sour Cream Bread</h5>
                                <p>Shrimp, Squid, Pineapple</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="/assets/images/shapes/bshape1.png"
                                    alt=""
                                    className="ind-shape1 d-none d-lg-block"
                                />
                            </div>
                            <div className="ingredients">
                                <h5>ground beef</h5>
                                <p>Mutton, Squid, Chicken</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="/assets/images/shapes/bshape1.png"
                                    alt=""
                                    className="ind-shape2 d-none d-lg-block"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 margin-bottom-60 wow fadeInUp">
                            <div className="ingredients-img">
                                <img src="/assets/images/img/dblburger.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 wow fadeInRight">
                            <div className="ingredients text-center text-md-right margin-bottom-80">
                                <h5>green Vegetable</h5>
                                <p>Tomato, Cucumber, Onion, Egg</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="/assets/images/shapes/bshape2.png"
                                    alt=""
                                    className="ind-shape3 d-none d-lg-block"
                                />
                            </div>
                            <div className="ingredients text-center text-md-right ">
                                <h5>artisen bunas</h5>
                                <p>Mutton, Squid, Chicken</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="/assets/images/shapes/bshape2.png"
                                    alt=""
                                    className="ind-shape4 d-none d-lg-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* softdrink promo */}
            <section className="softdrink-section padding-bottom-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="softdrink-left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 margin-bottom-30">
                                        <div className="drink-review margin-bottom-30">
                                            <div className="review-img">
                                                <img src="/assets/images/img/hticon1.png" alt="" />
                                            </div>
                                            <div className="drink-content">
                                                <div className="reviews">
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
                                                <h5>5 star rating</h5>
                                                <p>Our All Drink Prodcut Kegs of the moment!</p>
                                            </div>
                                        </div>
                                        <div className="s-gallery-1">
                                            <img src="/assets/images/img/htimg2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="s-gallery-2 margin-bottom-30">
                                            <img src="/assets/images/img/htimg1.jpg" alt="" />
                                        </div>
                                        <div className="s-gallery-3">
                                            <img
                                                className="g-shape"
                                                src="/assets/images/img/htshape10.png"
                                                alt=""
                                            />
                                            <h4>25 Years+</h4>
                                            <p>experience skills</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="softdrink-right">

                                <div className="common-title-area padding-50 wow fadeInUp">
                                    <h3>Relaxing Ambiance, Exceptional Taste</h3>
                                    <h2>
                                        More Than a Restaurant - It's a <span>
                                            Culinary Retreat
                                        </span>{" "}
                                    </h2>
                                </div>
                                <p>
                                    Beyond the plates, Bumdums offers a relaxing ambiance, creating the perfect setting for you to savor exceptional taste.
                                </p>
                                <div className="quote-box d-flex">
                                    {/* <span className="qq">
                                        <i className="fas fa-quote-right" />
                                    </span>
                                    <div className="qoute-img">
                                        <img src="/assets/images/img/h31.png" alt="" />
                                    </div> */}
                                    <div className="quote-content">
                                        <h5>Our chic interiors and warm atmosphere transform your dining experience into a memorable retreat.</h5>
                                        <p>Whether you're here for lunch, dinner, or a casual coffee, every visit to Bumdums is an escape into a world of flavors.</p>
                                    </div>
                                </div>
                                {/* <a href="shopping-cart.html" className="btn2">
                                    shop now
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="delivery-area delivery-area2 padding-top-115 padding-bottom-100">
                <div className="del-shapes">
                    <span className="ds-1">
                        <img src="/assets/images/shapes/14.png" alt="" />
                    </span>
                    <span className="ds-2">
                        <img src="/assets/images/shapes/15.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    {/* <div className="common-title margin-bottom-60 text-center wow fadeInUp">
                        <h4 className="margin-bottom-30">
                            Super Delicious Beef{" "}
                            <span>
                                Burger
                                <br />
                                $25.00
                            </span>{" "}
                        </h4>
                        <a href="shopping-cart.html" className="btn">
                            order now
                        </a>
                    </div> */}
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6 align-self-lg-center col-md-12 margin-bottom-20 wow fadeInLeft">
                            <div className="delivery-left2">
                                <img src="/assets/images/gallery/bike.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeInRight">
                            <div className="delivery-right">
                                <div className="common-title-area padding-bottom-40">
                                    <h3>Reserve a Table or Order Now</h3>
                                    <h2 className="margin-bottom-30">
                                        Your Culinary
                                        <span>
                                            Adventure
                                        </span>{" "}
                                        Awaits
                                    </h2>
                                    <p>
                                        <span>
                                            Reserve your table at the best restaurant in Tapukara or order online to savor the best of vegetarian cuisine.
                                        </span>
                                        At Bumdums, we're not just serving food; we're crafting moments that linger on your palate and in your memories.
                                    </p>
                                    <div className="order-box d-flex align-items-end">
                                        <span className="order-img">
                                            <img src="/assets/images/icons/1.png" alt="" />
                                        </span>
                                        <div className="order-content">
                                            <p>delivery order num.</p> <span>123-59794069</span>
                                        </div>
                                        <a href="shopping-cart.html" className="btn">
                                            call now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial */}
            <Testimonial />
            {/* blog-area */}
            <BlogsHome />

            {/* inst-slider */}
            <InstaImages />
        </>
    )
}

export default Home
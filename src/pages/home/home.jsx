

const Home = () => {
    return (
        <>
            {/* header */}
            <header>
                {/* header-bottom */}
                <div className="header-bottom home2-header-bottom margin-top-20">
                    <div className="container position-relative">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-6 margin-bottom-20">
                                <div className="logo">
                                    <a href="index.html">
                                        {" "}
                                        <img src="assets/images/logo/logo2.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul className="main-menu main-menu2">
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
                                            <a href="about.html">about</a>
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
                                            <a href="contact.html">contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-5 col-md-9 col-12">
                                <div className="customer-area2 d-flex align-items-center justify-content-between">
                                    <span className="position-relative">
                                        <a className="shopping" href="shopping-cart.html">
                                            <i className="fas fa-shopping-basket" />
                                        </a>
                                        <span className="shop-counter">1</span>
                                    </span>
                                    <span className="order-img d-none d-md-block">
                                        <img src="assets/images/icons/1.png" alt="" />
                                    </span>
                                    <div className="order-content">
                                        <span className="span-1">delivery order</span>{" "}
                                        <span className="span-2">123-59794069</span>
                                    </div>
                                    <a href="#" className="btn">
                                        login
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* mobile-menu */}
                        <div className="mobile-menu home2" />
                    </div>
                </div>
            </header>
            {/* burger-promo-area */}
            <section className="delivery-area burger-promo-area padding-top-240 padding-bottom-135">
                <div className="del-shapes">
                    <span className="ds-1">
                        <img src="assets/images/shapes/40.png" alt="" />
                    </span>
                    <span className="ds-2">
                        <img src="assets/images/shapes/41.png" alt="" />
                    </span>
                    <span className="ds-33">
                        <img src="assets/images/shapes/5.png" alt="" />
                    </span>
                    <span className="ds-4">
                        <img src="assets/images/shapes/2.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-lg-6 col-md-12 margin-bottom-20">
                            <div className="delivery-left">
                                <div className="burger-shapes">
                                    <span className="bs1">
                                        <img src="assets/images/shapes/capsicam.png" alt="" />
                                    </span>
                                    <span className="bs2">
                                        <img src="assets/images/shapes/sauce.png" alt="" />
                                    </span>
                                    <span className="bs3">
                                        <img src="assets/images/shapes/sale.png" alt="" />
                                    </span>
                                    <span className="bs4">
                                        <img src="assets/images/shapes/redtpmatto.png" alt="" />
                                    </span>
                                    <span className="bs5">
                                        <img src="assets/images/shapes/t-slice.png" alt="" />
                                    </span>
                                    <span className="bs6">
                                        <img src="assets/images/shapes/113.png" alt="" />
                                    </span>
                                </div>
                                <img
                                    className="mp"
                                    src="assets/images/menu-item/burger-promo.png"
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
                                        <a href="shopping-cart.html" className="btn">
                                            Explore Our Menu
                                        </a>
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
                                        <img src="assets/images/shapes/2.png" alt="" />
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
                                    <div
                                        className="
              col-lg-5 col-md-5 col-sm-5 col-5
              d-flex
              align-items-start
            "
                                    >
                                        <div className="about-gallery-4 text-center">
                                            <img className="mp" src="assets/images/icons/3.png" alt="" />
                                            <div className="items counter">2000</div>
                                            <p>food item</p>
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
                        <div className="col-lg-6 col-md-12 offset-lg-1 wow fadeInRight">
                            <div className="about-right">
                                <div className="about-r-shapes">
                                    <span className="as-1 item-bounce">
                                        <img src="assets/images/shapes/1.png" alt="" />
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
                                            src="assets/images/icons/4.png"
                                            alt=""
                                        />
                                        <img src="assets/images/icons/2.png" alt="" />
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
                        <img src="assets/images/shapes/11.png" alt="" />
                    </span>
                    <span className="ps-2 item-animateTwo">
                        <img src="assets/images/shapes/12.png" alt="" />
                    </span>
                    <span className="ps-3 item-bounce">
                        <img src="assets/images/shapes/13.png" alt="" />
                    </span>
                    <span className="ps-4 item-bounce">
                        <img src="assets/images/shapes/14.png" alt="" />
                    </span>
                    <span className="ps-5">
                        <img src="assets/images/shapes/15.png" alt="" />
                    </span>
                    <span className="ps-6">
                        <img src="assets/images/shapes/16.png" alt="" />
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
                            <li className="nav-item menu-text" role="presentation">
                                <div
                                    className="nav-link"
                                    id="pizza-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#pizza-tab-pane"
                                    role="tab"
                                    aria-controls="pizza-tab-pane"
                                    aria-selected="false"
                                >
                                    pizza
                                </div>
                            </li>
                            <li className="nav-item menu-text" role="presentation">
                                <div
                                    className="nav-link"
                                    id="burger-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#burger-tab-pane"
                                    role="tab"
                                    aria-controls="burger-tab-pane"
                                    aria-selected="false"
                                >
                                    burger
                                </div>
                            </li>
                            <li className="nav-item menu-text" role="presentation">
                                <div
                                    className="nav-link"
                                    id="chicken-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#chicken-tab-pane"
                                    role="tab"
                                    aria-controls="chicken-tab-pane"
                                    aria-selected="false"
                                >
                                    chicken
                                </div>
                            </li>
                            <li className="nav-item menu-text" role="presentation">
                                <div
                                    className="nav-link"
                                    id="drinks-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#drinks-tab-pane"
                                    role="tab"
                                    aria-controls="drinks-tab-pane"
                                    aria-selected="false"
                                >
                                    drinks
                                </div>
                            </li>
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
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd3.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price badge-color">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge badge-bg-color">new</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd4.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd6.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd7.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="badge-color price">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* pizza */}
                        <div
                            className="tab-pane fade"
                            id="pizza-tab-pane"
                            role="tabpanel"
                            aria-labelledby="pizza-tab"
                            tabIndex={0}
                        >
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Margherita </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Marinara </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price badge-color">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge badge-bg-color">new</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Frutti Di Mare </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Americana </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Pizza Al Pesto </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="badge-color price">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd5.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Americana </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* burger */}
                        <div
                            className="tab-pane fade"
                            id="burger-tab-pane"
                            role="tabpanel"
                            aria-labelledby="burger-tab"
                            tabIndex={0}
                        >
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price badge-color">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge badge-bg-color">new</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="badge-color price">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd1.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* chicken */}
                        <div
                            className="tab-pane fade"
                            id="chicken-tab-pane"
                            role="tabpanel"
                            aria-labelledby="chicken-tab"
                            tabIndex={0}
                        >
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price badge-color">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge badge-bg-color">new</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="badge-color price">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd8.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* drinks */}
                        <div
                            className="tab-pane fade"
                            id="drinks-tab-pane"
                            role="tabpanel"
                            aria-labelledby="drinks-tab"
                            tabIndex={0}
                        >
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price badge-color">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge badge-bg-color">new</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Garlic Burger </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">hot</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Vegetable Pizza </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chicken Fry </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="badge-color price">price :$15.00</span>
                                            <span className="rating">
                                                <i className="fas fa-star" /> 5star
                                            </span>
                                        </div>
                                        <span className="badge" />
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="single-dishes">
                                        <div className="dish-img">
                                            <img
                                                src="assets/images/menu-item/pd2.png"
                                                style={{ width: "inherit" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="dish-content">
                                            <h5>
                                                <a href="single-dish.html">Chickpea Soup </a>
                                            </h5>
                                            <p>
                                                It is a long established fact that a reader BBQ food
                                                Chicken.
                                            </p>
                                            <span className="price">price :$15.00</span>
                                        </div>
                                        <span className="badge">sale</span>
                                        <div className="cart-opt">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <img src="assets/images/gallery/24.png" alt="" />
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
                                        <img src="assets/images/shapes/38.png" alt="" className="s11" />
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
                                        <img src="assets/images/gallery/23.png" alt="" />
                                        <img
                                            src="assets/images/shapes/layer2.png"
                                            alt=""
                                            className="s12"
                                        />
                                        <img
                                            src="assets/images/shapes/113.png"
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
                                        <img src="assets/images/shapes/38.png" alt="" className="s11" />
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
                                        <img src="assets/images/gallery/23.png" alt="" />
                                        <img
                                            src="assets/images/shapes/layer2.png"
                                            alt=""
                                            className="s12"
                                        />
                                        <img
                                            src="assets/images/shapes/113.png"
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
                                <img src="assets/images/gallery/22.png" alt="" />
                                <img src="assets/images/shapes/leaves.png" alt="" className="s14" />
                                <img
                                    src="assets/images/shapes/transparent2.png"
                                    alt=""
                                    className="s15"
                                />
                                <span className="gprice-4">
                                    <img src="assets/images/gallery/25.png" alt="" />
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
                        <img src="assets/images/img/31.png" alt="" />
                    </span>
                    <span className="ds-2">
                        <img src="assets/images/img/37.png" alt="" />
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
                                    src="assets/images/shapes/bshape1.png"
                                    alt=""
                                    className="ind-shape1 d-none d-lg-block"
                                />
                            </div>
                            <div className="ingredients">
                                <h5>ground beef</h5>
                                <p>Mutton, Squid, Chicken</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="assets/images/shapes/bshape1.png"
                                    alt=""
                                    className="ind-shape2 d-none d-lg-block"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 margin-bottom-60 wow fadeInUp">
                            <div className="ingredients-img">
                                <img src="assets/images/img/dblburger.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 wow fadeInRight">
                            <div className="ingredients text-center text-md-right margin-bottom-80">
                                <h5>green Vegetable</h5>
                                <p>Tomato, Cucumber, Onion, Egg</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="assets/images/shapes/bshape2.png"
                                    alt=""
                                    className="ind-shape3 d-none d-lg-block"
                                />
                            </div>
                            <div className="ingredients text-center text-md-right ">
                                <h5>artisen bunas</h5>
                                <p>Mutton, Squid, Chicken</p>
                                <h6>Price: $5.00</h6>
                                <img
                                    src="assets/images/shapes/bshape2.png"
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
                                                <img src="assets/images/img/hticon1.png" alt="" />
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
                                            <img src="assets/images/img/htimg2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="s-gallery-2 margin-bottom-30">
                                            <img src="assets/images/img/htimg1.jpg" alt="" />
                                        </div>
                                        <div className="s-gallery-3">
                                            <img
                                                className="g-shape"
                                                src="assets/images/img/htshape10.png"
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
                                        <img src="assets/images/img/h31.png" alt="" />
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
                        <img src="assets/images/shapes/14.png" alt="" />
                    </span>
                    <span className="ds-2">
                        <img src="assets/images/shapes/15.png" alt="" />
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
                                <img src="assets/images/gallery/bike.png" alt="" />
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
                                            <img src="assets/images/icons/1.png" alt="" />
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
            {/* footer area */}
            <footer className="padding-top-120 padding-bottom-40 footer2">
                <div className="fo-shapes">
                    <span className="fs-1 item-animateTwo">
                        <img src="assets/images/shapes/capsicam.png" alt="" />
                    </span>
                    <span className="fss-2">
                        <img src="assets/images/shapes/fshape1.png" alt="" />
                    </span>
                    <span className="fss-3">
                        <img src="assets/images/shapes/41.png" alt="" />
                    </span>
                    <span className="fss-4 item-bounce">
                        <img src="assets/images/shapes/sauce.png" alt="" />
                    </span>
                    <span className="fss-5 item-bounce">
                        <img src="assets/images/shapes/scatter.png" alt="" />
                    </span>
                    <span className="fss-6 item-animateTwo">
                        <img src="assets/images/shapes/layer.png" alt="" />
                    </span>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-between padding-bottom-45">
                            <div className="col-lg-6 col-md-12">
                                <div className="f-title">
                                    <h4>
                                        Our Weekly <span> Newsletter.</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <form
                                    action="#"
                                    className="d-flex align-items-center justify-content-center justify-content-lg-between"
                                >
                                    <div className="form2">
                                        <span>
                                            <i className="fas fa-envelope-open-text" />
                                        </span>
                                        <input type="text" placeholder="Enter email Address" />
                                        <button className="btn bttn" type="submit">
                                            subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="footer-bottom padding-top-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20 text-center text-md-start">
                                <div className="widget margin-bottom-30">
                                    <h6>Titan Food Khan</h6>
                                    <p>570 8th Ave,New York, NY 10018 United States</p>
                                    <a href="#" className="f-link">
                                        View Google Map
                                    </a>
                                </div>
                                <div className="widget">
                                    <h6>+88 01835-397607</h6>
                                    <p>11.00 AM – 11.00 PM</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20 text-center text-md-start">
                                <div className="widget margin-bottom-30">
                                    <h6>Cardio Food Khan</h6>
                                    <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                                    <a href="#" className="f-link">
                                        View Google Map
                                    </a>
                                </div>
                                <div className="widget">
                                    <h6>+88 01835-397607</h6>
                                    <p>11.00 AM – 11.00 PM</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20 text-center text-md-start">
                                <div className="widget margin-bottom-30">
                                    <h6>Maldo Food Khan</h6>
                                    <p>
                                        <span>monday-friday: 8am - 4pm</span>
                                        <br />
                                        <span>saturday: 9am - 5pm</span>
                                    </p>
                                    <a href="#" className="f-link">
                                        View Google Map
                                    </a>
                                </div>
                                <div className="widget">
                                    <h6>+88 01835-397607</h6>
                                    <p>11.00 AM – 11.00 PM</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 margin-bottom-20 text-center text-md-start">
                                <div className="widget">
                                    <h6>Book Your Table</h6>
                                    <div className="newsletter newsletter-2">
                                        <form action="#">
                                            <select>
                                                <option value={4}> 4 people</option>
                                                <option value={6}>6 people</option>
                                                <option value={8}>8 people</option>
                                                <option value={10}>10 people</option>
                                            </select>
                                            <input type="date" />
                                            <select>
                                                <option value={4}> 7:30pm</option>
                                                <option value={6}>8:30pm</option>
                                                <option value={8}>9:30pm</option>
                                                <option value={10}>10:30pm</option>
                                            </select>
                                            <button type="submit" className="btn">
                                                find table
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 justify-content-self-center">
                                <div className="copyright-content">
                                    <div className="f-logo">
                                        <a href="index.html">
                                            {" "}
                                            <img src="assets/images/logo/logo2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="footer-nav text-center">
                                        <nav>
                                            <ul className="main-menu main-menu2">
                                                <li>
                                                    <a href="index.html">home</a>
                                                </li>
                                                <li>
                                                    <a href="menu.html">menu</a>
                                                </li>
                                                <li>
                                                    <a href="about.html">about us</a>
                                                </li>
                                                <li>
                                                    <a href="index.html">page</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">contact us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <p>
                                        Copyright © 2021 <a href="index.html">khadyo</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ToTop Button */}
            <button className="scrollup">
                <i className="fas fa-angle-up" />
            </button>
        </>
    )
}

export default Home
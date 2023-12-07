
const Navbar = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 d-flex flex-wrap justify-content-between">
                            <div className="contact-box">
                                <span>
                                    <a href="#">
                                        <i className="fas fa-phone-square-alt"></i> 123-58794069
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <i className="fas fa-envelope-open-text"></i>
                                        supportfoodkhan@.com
                                    </a>
                                </span>
                            </div>
                            <div className="social-box">
                                <span>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom margin-top-20">
                <div className="container position-relative">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                            <div className="logo">
                                <a href="index.html">
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
                                                <i className="fas fa-angle-down"></i>
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
                                                <i className="fas fa-angle-down"></i>
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
                                                <i className="fas fa-angle-down"></i>
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
                                        <i className="fas fa-heart"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="profile.html">
                                        <i className="fas fa-user"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="shopping-cart.html">
                                        <i className="fas fa-shopping-basket"></i>
                                    </a>
                                </span>
                                <a href="#" className="btn">
                                    login
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

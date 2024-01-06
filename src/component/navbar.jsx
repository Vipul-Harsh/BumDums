import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const pages = [
        {
            label: "HOME",
            link: "/"
        },
        {
            label: "about",
            link: "/about"
        },
        {
            label: "blog",
            link: "/blogs"
        },
        {
            label: "contact",
            link: "/contact"
        },
        {
            label: "HOME",
            link: ""
        }
    ]
    const location = useLocation()
    return (
        <header>
            {/* header-bottom */}
            <div className={`header-bottom home2-header-bottom margin-top-20 ${location.pathname !== '/' && 'notOnHome'}`}>
                <div className="container position-relative">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6 margin-bottom-20">
                            <div className="logo">
                                <a href="index.html">
                                    {" "}
                                    <img src="/assets/images/logo/logo2.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <nav id="mobile-menu">
                                <ul className="main-menu main-menu2">

                                    {pages.map((page) => (
                                        <>
                                            <li>
                                                <Link to={page?.link}>{page?.label}</Link>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-5 col-md-9 col-12">
                            <div className="customer-area2 d-flex align-items-center justify-content-end gap-5">
                                {/* <span className="position-relative">
                                        <a className="shopping" href="shopping-cart.html">
                                            <i className="fas fa-shopping-basket" />
                                        </a>
                                        <span className="shop-counter">1</span>
                                    </span> */}
                                <span className="order-img d-none d-md-block">
                                    <img src="/assets/images/icons/1.png" alt="" />
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
    );
};

export default Navbar;

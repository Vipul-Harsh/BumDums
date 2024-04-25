import { useState, useEffect } from "react";
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
            label: "our menu",
            link: "/menu"
        },
        {
            label: "blog",
            link: "/blogs"
        }
    ];

    const location = useLocation();
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isSticky ? "sticky" : ""}`}>
            <div className={`header-bottom home2-header-bottom margin-top-20 ${location.pathname !== '/' && 'notOnHome'}`}>
                <div className="container position-relative">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6 margin-bottom-20">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo2.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <nav id="mobile-menu">
                                <ul className="main-menu main-menu2 ">
                                    {pages.map((page) => (
                                        <li key={page.label}>
                                            <Link to={page.link} className={`linker ${isSticky ? "blue-dark" : ""}`}>{page.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-5 col-md-9 col-12">
                            <div className="customer-area2 navbar-area-right-side d-flex align-items-center justify-content-end " style={{ gap: "5px" }}>
                                <span className="order-img d-none d-md-block">
                                    <img src="/assets/images/icons/1.png" alt="" />
                                </span>
                                <div className="order-content">
                                    <span className={`span-1 ${isSticky ? "blue-dark" : ""}`}>delivery order</span>{" "}
                                    <span className="span-2">123-59794069</span>
                                </div>
                                <Link to="/contact" className="btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu home2 mean-container">
                        <div className="mean-bar">
                            <a
                                href="#nav"
                                className={`meanmenu-reveal ${mobileNavbar && 'meanClose'}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMobileNavbar(!mobileNavbar);
                                }}
                                style={{
                                    right: 0,
                                    left: "auto",
                                    textAlign: "center",
                                    textIndent: 0,
                                    fontSize: 18
                                }}
                            >
                                {!mobileNavbar ? <>
                                    <span />
                                    <span />
                                    <span />
                                </> : 'X'}
                            </a>
                            <nav className={`mean-nav ${mobileNavbar && 'show'}`}>
                                <ul className="main-menu main-menu2" style={{ display: mobileNavbar ? "flex" : 'none' }}>
                                    {pages.map(page =>
                                        <li key={page.label}>
                                            <Link
                                                to={page.link}
                                                onClick={() => {
                                                    setMobileNavbar(false);
                                                }}
                                                className={isSticky ? "blue-dark" : ""}
                                            >{page.label}</Link>
                                        </li>
                                    )}
                                    <li className="mean-last"
                                        onClick={() => {
                                            setMobileNavbar(false);
                                        }}
                                    >
                                        <Link to="/contact" className={isSticky ? "blue-dark" : ""}>contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

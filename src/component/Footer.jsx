import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>            {/* footer area */}
    <footer className="padding-top-120 padding-bottom-40 footer2">
        <div className="fo-shapes">
            <span className="fs-1 item-animateTwo">
                <img src="/assets/images/shapes/capsicam.png" alt="" />
            </span>
            <span className="fss-2">
                <img src="/assets/images/shapes/fshape1.png" alt="" />
            </span>
            <span className="fss-3">
                <img src="/assets/images/shapes/41.png" alt="" />
            </span>
            <span className="fss-4 item-bounce">
                <img src="/assets/images/shapes/sauce.png" alt="" />
            </span>
            <span className="fss-5 item-bounce">
                <img src="/assets/images/shapes/scatter.png" alt="" />
            </span>
            <span className="fss-6 item-animateTwo">
                <img src="/assets/images/shapes/layer.png" alt="" />
            </span>
        </div>
        {/* <div className="footer-top">
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
        </div> */}
        <div className="copyright-area text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 justify-content-self-center">
                        <div className="copyright-content">
                            <div className="f-logo">
                                <a href="/">
                                    {" "}
                                    <img src="/assets/images/logo/logo2.png" alt="" />
                                </a>
                            </div>
                            <div className="footer-nav text-center">
                                <nav>
                                    <ul className="main-menu main-menu2">
                                        <li>
                                            <Link to="/">home</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="menu.html">menu</Link>
                                        </li> */}
                                        <li>
                                            <Link to="/about">about us</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="index.html">page</Link>
                                        </li> */}
                                        <li>
                                            <Link to="/contact">contact us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <p>
                                Copyright © 2024 <a href="/">Rightlabs</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* ToTop Button */}
    <button className="scrollup" onClick={()=>{
        window.scrollTo(0,0);
    }}>
        <i className="fas fa-angle-up" />
    </button></>
  )
}

export default Footer
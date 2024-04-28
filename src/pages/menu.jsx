import React, { useState } from "react";
import { FullMenuData } from "../data/menu";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuData, setMenuData] = useState(FullMenuData);

  const TrimWord = (sentence) => {
    const titleText = sentence?.trim();
    const words = titleText?.split(" ");
    const beforeLastWord = words?.slice(0, -1)?.join(" ");
    const lastWord = words?.[words?.length - 1];
    return [beforeLastWord, lastWord];
  };
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
              <h2 className="page-title">Our Menu</h2>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <Link to="/menu">Home </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  our menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* food-items countdown */}
      <div className="foods-counter menus-area">
        <div className="container">
          <div className="row foods-wrapper menus-wrapper">
            <div className="col-lg-3 col-md-6">
              <div className="single-food single-menus">
                <img src="/assets/images/menu-item/menu2.png" alt="" />
                <h6>Super Fast Delivery</h6>
                <p>Free Delivery in you Location</p>
                <a
                  href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                  target="__blank"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food single-menus">
                <img src="/assets/images/menu-item/menu1.png" alt="" />
                <h6>100% Best Quality</h6>
                <p>We Provide Best Quality Food</p>
                <a
                  href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                  target="__blank"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food single-menus">
                <img src="/assets/images/menu-item/menu3.png" alt="" />
                <h6>Money Back Guarantee</h6>
                <p>100% Money Back Guarantee</p>
                <a
                  href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                  target="__blank"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-food single-menus">
                <img src="/assets/images/menu-item/menu4.png" alt="" />
                <h6>Delicious Food Menu</h6>
                <p>Food Khan Provide Best Food</p>
                <a
                  href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                  target="__blank"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chicken tab-area */}
      <section className="menu-area  pizza-area burger-area chicken-area padding-top-40">
        <div className="menu-i-shapes">
          <span className="bleft">
            <img src="/assets/images/menu-item/bleft.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="common-title-area text-center padding-40">
            <h3>{menuData?.section1.subtitle}</h3>
            <h2>
              {TrimWord(menuData?.section1.title)?.[0]}{" "}
              <span> {TrimWord(menuData?.section1.title)?.[1]}</span>{" "}
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                <ul className="nav" id="myTab" role="tablist" style={{display:"flex",justifyContent:'center'}}>
                  {/* menu-nav-1 */}
                  {menuData?.section1?.categories?.map((category, index) => (
                    <>
                      <li className="nav-item" role="presentation">
                        <div
                          className={`nav-link ${!index && "active"}`}
                          id={`nav-${category.name}-${index}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${category.name}-${index}`}
                          role="tab"
                          aria-controls={`${category.name}-${index}`}
                          aria-selected="true"
                        >
                          <div className="single-menu-nav pizza-single-menu-nav  text-center">
                            <div className="menu-img margin-bottom-10">
                              <img
                                src={
                                  category.image
                                }
                                alt=""
                              />
                            </div>
                            <h6>{category.name}</h6>
                            <span className="g-s-4">
                              <img src="/assets/images/shapes/10.png" alt="" />
                            </span>
                            <span className="g-s-5">
                              <img src="/assets/images/shapes/14.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* menu-items-wrapper */}
          <div className="tab-content" id="nav-tabContent">
            {/* menu-items-2 */}
            {menuData?.section1?.categories?.map((category, index) => (
              <>
                <div
                  key={`${category.name}-${index}`}
      className={`tab-pane fade ${!index && "show active"}`}
      id={`${category.name}-${index}`}
      role="tabpanel"
      aria-labelledby={`nav-${category.name}-${index}`}
                >
                  <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="row">
                          {menuData?.section1?.menu
                            ?.filter((item) => item.category === category.name)
                            ?.map((item) => (
                              <>
                                <div className="col-lg-6 col-md-6">
                                  <div className="single-menu-item d-flex justify-content-between">
                                    <div className="menu-img">
                                      <img
                                        src={
                                          item?.image
                                            ? item?.image
                                            : "/assets/images/menu-item/tc6.png"
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div className="menu-content">
                                      <h6>
                                        <a href="single-dish.html">
                                          {item?.name}
                                        </a>
                                      </h6>
                                      <p>{item?.description}</p>
                                      <span>price : ₹{item?.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ))}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="chicken-tab-content">
                          <h5>
                            Super <br />
                            Combo Burger
                          </h5>
                          <p></p>
                          <a
                            href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                            target="__blank"
                          >
                            Order Now
                          </a>
                          <span className="main-img">
                            <img
                              src="/assets/images/menu-item/chicken-banner.png"
                              alt=""
                            />
                          </span>
                          <span className="gprice-2">₹119</span>
                          <span className="gshape1">
                            <img src="/assets/images/shapes/38.png" alt="" />
                          </span>
                          <span className="gshape2">
                            <img src="/assets/images/shapes/39.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* burger tab-area */}
      <section className="menu-area  pizza-area burger-area padding-top-40">
        <div className="menu-i-shapes">
          <span className="brs">
            <img src="/assets/images/shapes/34.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="common-title-area text-center padding-40">
            <h3>{menuData?.section2.subtitle}</h3>
            <h2>
              {TrimWord(menuData?.section2.title)?.[0]}{" "}
              <span> {TrimWord(menuData?.section2.title)?.[1]}</span>{" "}
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                <ul className="nav" id="myTab" role="tablist" style={{display:"flex",justifyContent:'center'}}>
                  {/* menu-nav-1 */}
                  {menuData?.section2?.categories?.map((category, index) => (
                    <>
                      <li className="nav-item" role="presentation">
                        <div
                          className={`nav-link ${!index && "active"}`}
                          id={`nav-${category.name}-${index}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${category.name}-${index}`}
                          role="tab"
                          aria-controls={`${category.name}-${index}`}
                          aria-selected="true"
                        >
                          <div className="single-menu-nav pizza-single-menu-nav  text-center">
                            <div className="menu-img margin-bottom-10">
                              <img
                                src={
                                 category.image
                                }
                                alt=""
                              />
                            </div>
                            <h6>{category.name}</h6>
                            <span className="g-s-4">
                              <img src="/assets/images/shapes/10.png" alt="" />
                            </span>
                            <span className="g-s-5">
                              <img src="/assets/images/shapes/14.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* menu-items-wrapper */}
          <div className="tab-content" id="nav-tabContent1">
            {/* menu-items-1 */}
            {menuData?.section2?.categories?.map((category, index) => (
              <>
                <div
                  className={`tab-pane fade ${!index && "show active"}`}
                  id={`${category.name}-${index}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.name}-${index}`}
                >
                  <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                    <div className="row">
                      {menuData?.section2?.menu
                        ?.filter((item) => item.category === category.name)
                        ?.map((item) => (
                          <>
                            <div className="col-lg-4 col-md-4">
                              <div className="single-menu-item d-flex justify-content-between">
                                <div className="menu-img">
                                  <img
                                    src={
                                      item?.image
                                        ? item?.image
                                        : "/assets/images/menu-item/br2.png"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="menu-content">
                                  <h6>
                                    <a href="single-dish.html">{item?.name}</a>
                                  </h6>
                                  <p>{item?.description}</p>
                                  <span>price : ₹{item?.price}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* pizza banner */}
      <section className="banner-gallery pizza-banner padding-top-90 padding-bottom-30">
        <div className="pizza-shapes">
          <span className="ps1">
            <img src="/assets/images/shapes/35.png" alt="" />
          </span>
          <span className="ps2">
            <img src="/assets/images/shapes/26.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-12 margin-bottom-30 wow fadeInLeft">
                  <div className="gallery-img-1">
                    <h3 className="margin-bottom-10">Buzzed Burger</h3>
                    <p>Sale off 50% only this week</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                      target="__blank"
                      className="btn"
                    >
                      order now
                    </a>
                    <img src="/assets/images/gallery/24.png" alt="" />
                    <span className="gs">
                      <img src="/assets/images/shapes/bbr.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 wow fadeInRight">
                  <div className="gallery-img-1 gallery-img-01">
                    <h5 className="margin-bottom-10">
                     veggie Combo
                      <br />
                      Burger
                    </h5>
                    <p>Sale off 50% only this week</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=917690800051&text=Hello%2C%20I%20want%20to%20order%20"
                      target="__blank"
                      className="btn"
                    >
                      order now
                    </a>
                    <img src="/assets/images/menu-item/mg2.png" alt="" />
                    <span className="yellow">
                      <img src="/assets/images/shapes/37.png" alt="" />
                    </span>
                    <span className="gs1">
                      <img src="/assets/images/shapes/bbs.png" alt="" />
                    </span>
                    <span className="pbadge">
                      <img src="/assets/images/icons/pbadge.png" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pizza-tab-area */}
      <section className="menu-area  pizza-area">
        <div className="menu-i-shapes">
          <span className="mis-1">
            <img src="/assets/images/shapes/36.png" alt="" />
          </span>
          <span className="mis-2">
            <img src="/assets/images/shapes/6.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="common-title-area text-center padding-40">
            <h3>{menuData?.section3.subtitle}</h3>
            <h2>
              {TrimWord(menuData?.section3.title)?.[0]}{" "}
              <span> {TrimWord(menuData?.section3.title)?.[1]}</span>{" "}
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                <ul className="nav" id="pizzaTab2" role="tablist" style={{display:"flex",justifyContent:'center'}}>
                  {/* menu-nav-1 */}
                  {menuData?.section3?.categories?.map((category, index) => (
                    <>
                      <li className="nav-item" role="presentation">
                        <div
                          className={`nav-link ${!index && "active"}`}
                          id={`nav-${category.name}-${index}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${category.name}-${index}`}
                          role="tab"
                          aria-controls={`${category.name}-${index}`}
                          aria-selected="true"
                        >
                          <div className="single-menu-nav pizza-single-menu-nav  text-center">
                            <div className="menu-img margin-bottom-10">
                              <img
                                src={
                                  category.image
                                }
                                alt=""
                              />
                            </div>
                            <h6>{category.name}</h6>
                            <span className="g-s-4">
                              <img src="/assets/images/shapes/10.png" alt="" />
                            </span>
                            <span className="g-s-5">
                              <img src="/assets/images/shapes/14.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* menu-items-wrapper */}
          <div className="tab-content" id="nav-tabContent2">
            {/* menu-items-1 */}
            {menuData?.section3?.categories?.map((category, index) => (
              <>
                <div
                  className={`tab-pane fade ${!index && "show active"}`}
                  id={`${category.name}-${index}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.name}-${index}`}
                >
                  <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                    <div className="row">
                      {menuData?.section3?.menu
                        ?.filter((item) => item.category === category.name)
                        ?.map((item) => (
                          <>
                            <div className="col-lg-4 col-md-4">
                              <div className="single-menu-item d-flex justify-content-between">
                                <div className="menu-img">
                                  <img
                                    src={
                                      item?.image
                                        ? item?.image
                                        : "/assets/images/menu-item/piz1.png"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="menu-content">
                                  <h6>
                                    <a href="single-dish.html">{item?.name}</a>
                                  </h6>
                                  <p>{item?.description}</p>
                                  <span>price :₹{item?.price}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* pizza-tab-area2 */}
      <section className="menu-area  pizza-area">
        <div className="menu-i-shapes">
          <span className="mis-1">
            <img src="/assets/images/shapes/36.png" alt="" />
          </span>
          <span className="mis-2">
            <img src="/assets/images/shapes/6.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="common-title-area text-center padding-40">
            <h3>{menuData?.section5.subtitle}</h3>
            <h2>
              {TrimWord(menuData?.section5.title)?.[0]}{" "}
              <span> {TrimWord(menuData?.section5.title)?.[1]}</span>{" "}
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                <ul className="nav" id="pizzaTab2" role="tablist" style={{display:"flex",justifyContent:'center'}}>
                  {/* menu-nav-1 */}
                  {menuData?.section5?.categories?.map((category, index) => (
                    <>
                      <li className="nav-item" role="presentation">
                        <div
                          className={`nav-link ${!index && "active"}`}
                          id={`nav-${category.name}-${index}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${category.name}-${index}`}
                          role="tab"
                          aria-controls={`${category.name}-${index}`}
                          aria-selected="true"
                        >
                          <div className="single-menu-nav pizza-single-menu-nav  text-center">
                            <div className="menu-img margin-bottom-10">
                              <img
                                src={
                                  category.image
                                }
                                alt=""
                              />
                            </div>
                            <h6>{category.name}</h6>
                            <span className="g-s-4">
                              <img src="/assets/images/shapes/10.png" alt="" />
                            </span>
                            <span className="g-s-5">
                              <img src="/assets/images/shapes/14.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* menu-items-wrapper */}
          <div className="tab-content" id="nav-tabContent2">
            {/* menu-items-1 */}
            {menuData?.section5?.categories?.map((category, index) => (
              <>
                <div
                  className={`tab-pane fade ${!index && "show active"}`}
                  id={`${category.name}-${index}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.name}-${index}`}
                >
                  <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                    <div className="row">
                      {menuData?.section5?.menu
                        ?.filter((item) => item.category === category.name)
                        ?.map((item) => (
                          <>
                            <div className="col-lg-4 col-md-4">
                              <div className="single-menu-item d-flex justify-content-between">
                                <div className="menu-img">
                                  <img
                                    src={
                                      item?.image
                                        ? item?.image
                                        : "/assets/images/menu-item/piz1.png"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="menu-content">
                                  <h6>
                                    <a href="single-dish.html">{item?.name}</a>
                                  </h6>
                                  <p>{item?.description}</p>
                                  <span>price :₹{item?.price}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section className="menu-area  pizza-area">
        <div className="menu-i-shapes">
          <span className="mis-1">
            <img src="/assets/images/shapes/36.png" alt="" />
          </span>
          <span className="mis-2">
            <img src="/assets/images/shapes/6.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="common-title-area text-center padding-40">
            <h3>{menuData?.section4.subtitle}</h3>
            <h2>
              {TrimWord(menuData?.section4.title)?.[0]}{" "}
              <span> {TrimWord(menuData?.section4.title)?.[1]}</span>{" "}
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                <ul className="nav" id="pizzaTab2" role="tablist" style={{display:"flex",justifyContent:'center'}}>
                  {/* menu-nav-1 */}
                  {menuData?.section4?.categories?.map((category, index) => (
                    <>
                      <li className="nav-item" role="presentation">
                        <div
                          className={`nav-link ${!index && "active"}`}
                          id={`nav-${category.name}-${index}`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${category.name}-${index}`}
                          role="tab"
                          aria-controls={`${category.name}-${index}`}
                          aria-selected="true"
                        >
                          <div className="single-menu-nav pizza-single-menu-nav  text-center">
                            <div className="menu-img margin-bottom-10">
                              <img
                                src={
                                category.image
                                }
                                alt=""
                              />
                            </div>
                            <h6>{category.name}</h6>
                            <span className="g-s-4">
                              <img src="/assets/images/shapes/10.png" alt="" />
                            </span>
                            <span className="g-s-5">
                              <img src="/assets/images/shapes/14.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* menu-items-wrapper */}
          <div className="tab-content" id="nav-tabContent2">
            {/* menu-items-1 */}
            {menuData?.section4?.categories?.map((category, index) => (
              <>
                <div
                  className={`tab-pane fade ${!index && "show active"}`}
                  id={`${category.name}-${index}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${category.name}-${index}`}
                >
                  <div className="menu-items-wrapper pizza-items-wrapper  margin-top-50">
                    <div className="row">
                      {menuData?.section4?.menu
                        ?.filter((item) => item.category === category.name)
                        ?.map((item) => (
                          <>
                            <div className="col-lg-4 col-md-4">
                              <div className="single-menu-item d-flex justify-content-between">
                                <div className="menu-img">
                                  <img
                                    src={
                                      item?.image
                                        ? item?.image
                                        : "/assets/images/menu-item/piz1.png"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="menu-content">
                                  <h6>
                                    <a href="single-dish.html">{item?.name}</a>
                                  </h6>
                                  <p>{item?.description}</p>
                                  <span>price :₹{item?.price}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

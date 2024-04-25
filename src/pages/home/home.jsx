import { Link } from "react-router-dom";

import Testimonial from "../../component/Testimonial";
import BlogsHome from "../../component/blogsHome";
// import { menu, menu_categories } from "../../data/menu";
// import Slider from "react-slick";
const Home = () => {
  return (
    <>
      {/* burger-promo-area */}
      <section
        className="delivery-area burger-promo-area  padding-bottom-135"
        style={{ paddingTop: "170px", paddingBottom: "65px" }}
      >
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
                    Discover Delicious
                    <br />
                    <span>Veg Cuisine</span> in Tapukara
                  </h1>
                  <h5 className="margin-bottom-40 margin-top-40">
                    Savor the Finest Vegetarian Delights at Tapukara&apos;s Premier
                    Restaurant
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
                      <img
                        className="mp"
                        src="/assets/images/icons/3.png"
                        alt=""
                      />
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
                  <h3>Savor the Flavors of Innovation</h3>
                  <h2>
                    Find Your Ideal Spot for <span>Veggie Delights</span>
                  </h2>
                </div>
                {/* <p>
                                    Bumdums isn't your average restaurant; it's a testament to our passion for crafting culinary delights.
                                </p> */}
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
                    <h5 className="margin-bottom-20">
                      Welcome to Our Contemporary Cafe
                    </h5>
                    <p>
                      Step into our modern café, where every corner whispers
                      tales of creativity and innovation. We&apos;re passionate about
                      vegetarian cuisine, and it reflects in every aspect of our
                      establishment, from our decor to our menu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popular-dishes */}
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
                    <img
                      src="/assets/images/shapes/38.png"
                      alt=""
                      className="s11"
                    />
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
                    <img
                      src="/assets/images/shapes/38.png"
                      alt=""
                      className="s11"
                    />
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
                <img
                  src="/assets/images/shapes/leaves.png"
                  alt=""
                  className="s14"
                />
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
      <section className="menu-area home2-menu-area padding-bottom-10">
        <div className="menu-shapes">
          <span className="ds-1">
            <img src="/assets/images/shapes/34.png" alt="" />
          </span>
          <span className="ds-2 item-bounce">
            <img src="/assets/images/shapes/sm-tomatto.png" alt="" />
          </span>
          <span className="ds-3">
            <img src="/assets/images/shapes/donar.png" alt="" />
          </span>
          <span className="ds-4 item-bounce">
            <img src="/assets/images/shapes/triple.png" alt="" />
          </span>
          <span className="ds-5">
            <img src="/assets/images/shapes/scatter.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="common-title-area padding-50 wow fadeInLeft">
            <h3>Bite into Perfection</h3>
            <h2>
              Signature <span>Dishes</span> That
              <br />
              Tell a Tale of Flavor
            </h2>
          </div>
          {/* menu-nav-wrapper */}
          <div className="menu-nav-wrapper">
            <div className="container">
              <div className="row">
                {/* tab-nav-items */}
                <ul className="nav" id="nav-tab" role="tablist">
                  {/* menu-nav-1 */}
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link active"
                      id="pizza2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#pizza2-tab-pane"
                      role="tab"
                      aria-controls="pizza2-tab-pane"
                      aria-selected="true"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="/assets/images/menu-item/pizza.png"
                            alt=""
                          />
                        </div>
                        <h6>Starters</h6>
                        <span className="g-s-4">
                          <img src="/assets/images/shapes/10.png" alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src="/assets/images/shapes/14.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* menu-nav-2 */}
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="burger2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#burger2-tab-pane"
                      role="tab"
                      aria-controls="burger2-tab-pane"
                      aria-selected="false"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="/assets/images/menu-item/burger.png"
                            alt=""
                          />
                        </div>
                        <h6>Burgers & Pizzas</h6>
                        <span className="g-s-4">
                          <img src="/assets/images/shapes/10.png" alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src="/assets/images/shapes/14.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* menu-nav-3 */}
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="chicken2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#chicken2-tab-pane"
                      role="tab"
                      aria-controls="chicken2-tab-pane"
                      aria-selected="false"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="/assets/images/menu-item/chicken.png"
                            alt=""
                          />
                        </div>
                        <h6>Chinese</h6>
                        <span className="g-s-4">
                          <img src="/assets/images/shapes/10.png" alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src="/assets/images/shapes/14.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* menu-nav-4 */}
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="drinks2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#drinks2-tab-pane"
                      role="tab"
                      aria-controls="drinks2-tab-pane"
                      aria-selected="false"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="/assets/images/menu-item/drinks.png"
                            alt=""
                          />
                        </div>
                        <h6>Shakes & Mocktails</h6>
                        <span className="g-s-4">
                          <img src="/assets/images/shapes/10.png" alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src="/assets/images/shapes/14.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* menu-nav-5 */}
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="drinks3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#drinks3-tab-pane"
                      role="tab"
                      aria-controls="drinks3-tab-pane"
                      aria-selected="false"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="/assets/images/menu-item/drinks2.png"
                            alt=""
                          />
                        </div>
                        <h6>Main Course</h6>
                        <span className="g-s-4">
                          <img src="/assets/images/shapes/10.png" alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src="/assets/images/shapes/14.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  {/* menu-nav-6 */}
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      id="combo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#combo-tab-pane"
                      role="tab"
                      aria-controls="combo-tab-pane"
                      aria-selected="false"
                    >
                      <div className="single-menu-nav text-center">
                        <div className="menu-img margin-bottom-10">
                          <img
                            src="/assets/images/menu-item/combo.png"
                            alt=""
                          />
                        </div>
                        <h6>Dessert</h6>
                        <span className="g-s-4">
                          <img src="/assets/images/shapes/10.png" alt="" />
                        </span>
                        <span className="g-s-5">
                          <img src="/assets/images/shapes/14.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* menu-items-wrapper */}
          <div className="tab-content" id="nav-tabContent">
            {/* menu-items-1 */}
            <div
  className="tab-pane fade show active"
  id="pizza2-tab-pane"
  role="tabpanel"
  aria-labelledby="pizza2-tab"
  tabIndex={0}
>
  <div className="menu-items-wrapper padding-50">
    <div className="menu-i-shapes">
      <span className="mis-3">
        <img src="/assets/images/shapes/7.png" alt="" />
      </span>
    </div>
    {/* first-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between">
          <div className="menu-img">
            <img src="/assets/images/menu-item/piz1.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Cheesy Fingers</a>
            </h5>
            <p>Cheese-filled fingers with crispy coating</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/piz2.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Corn Chaat</a>
            </h5>
            <p>Delightful mix of corn, veggies, and spices</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/piz3.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Dahi Bhalla</a>
            </h5>
            <p>Soft lentil dumplings in creamy yogurt</p>
          </div>
        </div>
      </div>
    </div>
    {/* second-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/piz4.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Paneer Pakoda</a>
            </h5>
            <p>Gram flour-coated paneer chunks</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/piz5.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Aloo  Chaat</a>
            </h5>
            <p>Mix of potatoes, chickpeas, and spices</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/piz6.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Veg Cutlet</a>
            </h5>
            <p>Mixed vegetable patties with mint chutney</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

            {/* menu-items-2 */}
            <div
  className="tab-pane fade"
  id="burger2-tab-pane"
  role="tabpanel"
  aria-labelledby="burger2-tab"
  tabIndex={0}
>
  <div className="menu-items-wrapper padding-50">
    <div className="menu-i-shapes">
      <span className="mis-3">
        <img src="/assets/images/shapes/7.png" alt="" />
      </span>
    </div>
    {/* first-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between">
          <div className="menu-img">
            <img src="/assets/images/menu-item/br1.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Cottage Cheese Burger</a>
            </h5>
            <p>Cheese-filled patty with veggies</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/br2.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Veggie<br/> Burger</a>
            </h5>
            <p>Assorted veggies in a bun</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/br3.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Bumdums<br/> Special</a>
            </h5>
            <p>Signature burger with secret sauce</p>
          </div>
        </div>
      </div>
    </div>
    {/* second-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/br4.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Farm <br/>House</a>
            </h5>
            <p>Fresh veggies and cheese in a bun</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/br5.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Mexican <br/>Pizza</a>
            </h5>
            <p>Mexican-inspired flavors in a burger</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/br6.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Three<br/> Cheese</a>
            </h5>
            <p>Triple cheese delight in a bun</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

            {/* menu-items-3 */}
            <div
  className="tab-pane fade"
  id="chicken2-tab-pane"
  role="tabpanel"
  aria-labelledby="chicken2-tab"
  tabIndex={0}
>
  <div className="menu-items-wrapper padding-50">
    <div className="menu-i-shapes">
      <span className="mis-3">
        <img src="/assets/images/shapes/7.png" alt="" />
      </span>
    </div>
    {/* first-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between">
          <div className="menu-img">
            <img src="/assets/images/menu-item/mi-1.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html"> Manchurian</a>
            </h5>
            <p>Spicy cauliflower appetizer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/mi-2.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Chilli Potato</a>
            </h5>
            <p>Crunchy potato stir-fry</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/mi-3.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Crispy Corn</a>
            </h5>
            <p>Deep-fried corn kernels</p>
          </div>
        </div>
      </div>
    </div>
    {/* second-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/mi-4.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Veg Momos</a>
            </h5>
            <p>Steamed dumplings with veggie filling</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/mi-5.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Veg Noodles</a>
            </h5>
            <p>Stir-fried noodles with mixed veggies</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/menu-item/mi-6.png" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Fried Rice</a>
            </h5>
            <p>Classic Chinese-style fried rice</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

            {/* menu-items-4 */}
            <div
  className="tab-pane fade"
  id="drinks2-tab-pane"
  role="tabpanel"
  aria-labelledby="drinks2-tab"
  tabIndex={0}
>
  <div className="menu-items-wrapper padding-50">
    <div className="menu-i-shapes">
      <span className="mis-3">
        <img src="/assets/images/shapes/7.png" alt="" />
      </span>
    </div>
    {/* first-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between">
          <div className="menu-img">
            <img src="/assets/images/img/dr1.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Cold <br/>Coffee</a>
            </h5>
            <p>Creamy and refreshing coffee</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr2.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Sweet <br/>Lassi</a>
            </h5>
            <p>Traditional Indian yogurt drink</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr3.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Strawberry Shake</a>
            </h5>
            <p>Fruity and refreshing strawberry flavor</p>
          </div>
        </div>
      </div>
    </div>
    {/* second-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr4.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Mango<br/> Shake</a>
            </h5>
            <p>Smooth and tropical mango goodness</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr5.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Butter<br/> Scotch</a>
            </h5>
            <p>Rich and creamy butterscotch flavor</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr6.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Oreo <br/>Shake</a>
            </h5>
            <p>Indulgent blend of chocolate and cookies</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

            {/* menu-items-5 */}
            <div
  className="tab-pane fade"
  id="drinks3-tab-pane"
  role="tabpanel"
  aria-labelledby="drinks3-tab"
  tabIndex={0}
>
  <div className="menu-items-wrapper padding-50">
    <div className="menu-i-shapes">
      <span className="mis-3">
        <img src="/assets/images/shapes/7.png" alt="" />
      </span>
    </div>
    {/* first-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between">
          <div className="menu-img">
            <img src="/assets/images/img/dr6.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Dal Fry</a>
            </h5>
            <p>Delicious lentils cooked with spices</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr5.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Mix Veg</a>
            </h5>
            <p>Assorted vegetables cooked to perfection</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr4.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Veg Kofta</a>
            </h5>
            <p>Fried vegetable balls in savory gravy</p>
          </div>
        </div>
      </div>
    </div>
    {/* second-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr3.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Paneer Makhani</a>
            </h5>
            <p>Creamy paneer in rich tomato gravy</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr2.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Bhindi Masala</a>
            </h5>
            <p>Okra cooked with spices and herbs</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr1.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Malai Kofta</a>
            </h5>
            <p>Fried dumplings in creamy tomato gravy</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

            {/* menu-items-6 */}
            <div
  className="tab-pane fade"
  id="drinks3-tab-pane"
  role="tabpanel"
  aria-labelledby="drinks3-tab"
  tabIndex={0}
>
  <div className="menu-items-wrapper padding-50">
    <div className="menu-i-shapes">
      <span className="mis-3">
        <img src="/assets/images/shapes/7.png" alt="" />
      </span>
    </div>
    {/* first-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between">
          <div className="menu-img">
            <img src="/assets/images/img/dr6.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Gulab Jamun</a>
            </h5>
            <p>Sweet syrupy dessert balls</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr5.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">RasMalai</a>
            </h5>
            <p>Soft cheese dumplings in sweetened milk</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr4.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Jalebi</a>
            </h5>
            <p>Deep-fried sweet pretzels</p>
          </div>
        </div>
      </div>
    </div>
    {/* second-row */}
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr3.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Rasgulla</a>
            </h5>
            <p>Soft spongy balls soaked in syrup</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr2.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Cakes</a>
            </h5>
            <p>Assorted flavors of cakes</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="single-menu-item d-flex justify-content-between ">
          <div className="menu-img">
            <img src="/assets/images/img/dr1.jpg" alt="" />
          </div>
          <div className="menu-content">
            <h5>
              <a href="single-dish.html">Pastry</a>
            </h5>
            <p>Flaky pastries with various fillings</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
      {/* <section className="popular-dishes-area padding-top-110">
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
                    {/* main-content
                    <div className="tab-content" id="popularDishesTabContent">
                        {/* all items 
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
                                            </div>
                                        </div>
                                    </div>
                                </>)}
                            </div>
                        </div>
                        {/* pizza 
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
                                            </div> 
                                            </div>
                                        </div>
                                    </>)}
                                </div>
                            </div>
                        </>)}
                    </div>
                </div>
            </section> */}
      {/* banner-gallery */}

      {/* best quality */}
      {/* <section className="best-quality padding-top-60">
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
            </section> */}

      {/* softdrink promo */}
      {/* <section className="softdrink-section padding-bottom-80">
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
                                    </div> 
                                    <div className="quote-content">
                                        <h5>Our chic interiors and warm atmosphere transform your dining experience into a memorable retreat.</h5>
                                        <p>Whether you're here for lunch, dinner, or a casual coffee, every visit to Bumdums is an escape into a world of flavors.</p>
                                    </div>
                                </div>
                                {/* <a href="shopping-cart.html" className="btn2">
                                    shop now
                                </a> 
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
      <section className="features-section  ">
        <div className="container position-relative">
          <div className="fea-shapes">
            <span className="fs-1 item-bounce">
              <img src="/assets/images/img/htshape7.png" alt="" />
            </span>
            <span className="fs-2 item-bounce">
              <img src="/assets/images/img/htshape8.png" alt="" />
            </span>
          </div>
          <div
            className="common-title-area padding-50 wow fadeInLeft"
            style={{ textAlign: "end" }}
          >
            <h3>Why Choose Us</h3>
            <h2>
              Discover What Sets Us Apart
              <br />
            </h2>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-fea" style={{ height: "82%" }}>
                <div className="fea-img">
                  <img
                    src="/assets/images/img/htshape3.png"
                    alt="Swiss Quality"
                  />
                </div>
                <div className="fea-content text-center text-md-start">
                  <h5 style={{marginBottom:"20px"}}>Swiss Quality Assurance</h5>
                  <p>
                    Experience excellence in every dish with our commitment to
                    Swiss quality standards.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-fea" style={{ height: "82%" }}>
                <div className="fea-img">
                  <img
                    src="/assets/images/img/htshape4.png"
                    alt="Organic Production"
                  />
                </div>
                <div className="fea-content text-center text-md-start">
                  <h5>Organic Production</h5>
                  <p>
                    Savor the freshness of our dishes made with locally sourced
                    organic ingredients.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-fea" style={{ height: "82%" }}>
                <div className="fea-img">
                  <img
                    src="/assets/images/img/htshape5.png"
                    alt="Food Law Certified"
                  />
                </div>
                <div className="fea-content text-center text-md-start">
                  <h5 style={{marginBottom:"40px"}}>Food Law Certified</h5>
                  <p>
                    Rest assured of our compliance with food safety regulations,
                    ensuring your peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-fea" style={{ height: "82%" }}>
                <div className="fea-img">
                  <img
                    src="/assets/images/img/htshape6.png"
                    alt="100% Concentration"
                  />
                </div>
                <div className="fea-content text-center text-md-start">
                  <h5>100% Flavor Concentration</h5>
                  <p>
                    Immerse yourself in the rich flavors of our dishes, crafted
                    with care and dedication.
                  </p>
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
      <section className="delivery-area delivery-area2 padding-top-115 ">
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
                  <h3>Embark on Your Culinary Journey</h3>
                  <h2 className="margin-bottom-30">
                    Explore Our
                    <span>Delicious Creations</span>
                  </h2>

                  <p>
                    <span>
                      Reserve your table at the best restaurant in Tapukara or
                      order online to savor the best of vegetarian cuisine.
                    </span>
                    At Bumdums, we are not just serving food; we are crafting
                    moments that linger on your palate and in your memories.
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

      {/* inst-slider */}
      <div className="insta" style={{ marginTop: "100px" }}>
        <div>
          <div className="common-title-area text-center  wow fadeInUp">
            <h3>Connect with Bum Dums</h3>
            <h2>
              Discover Our
              <span>Social Buzz</span>
            </h2>
          </div>
        </div>
        <iframe
          src="https://widget.taggbox.com/154028"
          style={{
            width: "100%",
            height: "650px",
            border: "none",
            marginTop: "50px",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default Home;

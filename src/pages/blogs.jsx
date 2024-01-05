import React from 'react'
import { BlogsData } from '../data/blogs'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
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
            <nav aria-label="breadcrumb text-center">
              <h2 className="page-title">blog</h2>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <Link to="/">Home </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  blog page
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Blog Content Section */}
      <section className="blog-content-section padding-top-110 padding-bottom-120">
        <div className="blog-shapes">
          <span className="bbs-1">
            <img src="assets/images/shapes/13.png" alt="" />
          </span>
          <span className="bbs-2 item-bounce">
            <img src="assets/images/shapes/12.png" alt="" />
          </span>
          <span className="bbs-3">
            <img src="assets/images/shapes/7.png" alt="" />
          </span>
          <span className="bbs-4 item-bounce">
            <img src="assets/images/shapes/26.png" alt="" />
          </span>
          <span className="bbs-5 item-animateTwo">
            <img src="assets/images/shapes/26.png" alt="" />
          </span>
          <span className="bbs-6">
            <img src="assets/images/shapes/16.png" alt="" />
          </span>
          <span className="bbs-7">
            <img src="assets/images/img/32.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-posts">
              {
                BlogsData.map(blog=>
                <>
                <div className="blog-single-post wow fadeInUp">
                  <div className="blog-thumbnail">
                    <a href="blog-single.html">
                      <img src={blog?.image} alt="thumbnail" />
                    </a>
                    <div className="meta-date">
                      <span className="bold">02</span>
                      <span>dec</span>
                    </div>
                  </div>
                  <div className="blog-content-part">
                    <div className="blog-content-top">
                      <div className="blog-date margin-right-20">
                        <a href="#">
                          <i className="fas fa-tag" />{blog?.category}
                        </a>
                      </div>
                      {/* <div className="blog-tag margin-right-20">
                        <a href="#">
                          {" "}
                          <i className="fas fa-user-circle" /> Miyako Prince
                        </a>
                      </div>
                      <div className="blog-author">
                        <a href="#">
                          <i className="fas fa-comments" /> 120+ Comment
                        </a>
                      </div> */}
                    </div>
                    <div className="blog-title">
                      <h4>
                        <Link to="/blogs">{blog?.title}</Link>
                      </h4>
                    </div>
                    <div className="blog-content">
                      <p>
                      {blog?.description}
                      </p>
                    </div>
                    <div className="blog-excerpt-link">
                      <Link to="/blogs" className="btn">
                        read more
                      </Link>
                    </div>
                  </div>
                </div>
                </>
                )
              }
              </div>
              <div className="template-pagination">
                <ul>
                  <li>
                    <a className="active" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="blog-sidebar margin-top-10">
                <div className="single-widget wow fadeInUp author-widget">
                  <img src="assets/images/blog/user.jpg" alt="image" />
                  <div className="author-name margin-top-20">
                    <h5>Miyako Prince</h5>
                  </div>
                  <div className="author-content margin-top-10">
                    <p> Hi! I'm author of this post. Read my post, be in trend.</p>
                  </div>
                  <div className="author-social-link margin-top-20">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-widget search-widget  wow fadeInUp ">
                  <div className="header-search">
                    <form action="#">
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="single-widget product-widget  wow fadeInUp ">
                  <h6 className="margin-bottom-10">Hot Sale Products</h6>
                  <div className="single-product d-flex align-items-center">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        <img src="assets/images/menu-item/pd6.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content">
                      <h6>
                        {" "}
                        <a href="single-dish.html">Chicken Fry Recipe</a>
                      </h6>
                      <span className="price">$10.00</span>
                      <span>
                        <a className="cart-select" href="shopping-cart.html">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="single-product d-flex align-items-center  wow fadeInUp ">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        {" "}
                        <img src="assets/images/menu-item/pd4.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content">
                      <h6>
                        {" "}
                        <a href="single-dish.html">Chicken Soup Rejala</a>
                      </h6>
                      <span className="price">$20.00</span>
                      <span>
                        <a className="cart-select" href="shopping-cart.html">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="single-product d-flex align-items-center  wow fadeInUp ">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        <img src="assets/images/menu-item/pd7.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content">
                      <h6>
                        {" "}
                        <a href="single-dish.html">The Best Black Frame</a>
                      </h6>
                      <span className="price">$80.00</span>
                      <span>
                        <a className="cart-select" href="shopping-cart.html">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="single-product d-flex align-items-center  wow fadeInUp">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        {" "}
                        <img src="assets/images/menu-item/pd8.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content">
                      <h6>
                        {" "}
                        <a href="single-dish.html">The Best Black Frame</a>
                      </h6>
                      <span className="price">$80.00</span>
                      <span>
                        <a className="cart-select" href="shopping-cart.html">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="single-widget tag-widget  wow fadeInUp">
                  <div className="widget-title">
                    <h5>tags.</h5>
                  </div>
                  <div className="tag-items">
                    <ul>
                      <li>
                        <a href="#">bbq</a>
                      </li>
                      <li>
                        <a href="#">tikka</a>
                      </li>
                      <li>
                        <a href="#">pizza</a>
                      </li>
                      <li>
                        <a href="#">chicken sharma</a>
                      </li>
                      <li>
                        <a href="#">garlic burger</a>
                      </li>
                      <li>
                        <a href="#">sandwich</a>
                      </li>
                      <li>
                        <a href="#">chicken soup</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-widget filter-menu-widget  wow fadeInUp">
                  <h6>
                    <a href="#">filter by menu</a>
                  </h6>
                  <div className="filter-menu d-flex align-items-center">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        {" "}
                        <img src="assets/images/menu-item/fm1.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content d-flex justify-content-between">
                      <h6>
                        {" "}
                        <a href="single-dish.html">burger food</a>
                      </h6>
                      <span className="price">20</span>
                    </div>
                  </div>
                  <div className="filter-menu d-flex align-items-center">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        {" "}
                        <img src="assets/images/menu-item/fm2.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content d-flex justify-content-between">
                      <h6>
                        {" "}
                        <a href="single-dish.html">Chicken Fry</a>
                      </h6>
                      <span className="price">50</span>
                    </div>
                  </div>
                  <div className="filter-menu d-flex align-items-center">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        <img src="assets/images/menu-item/fm3.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content d-flex justify-content-between">
                      <h6>
                        {" "}
                        <a href="single-dish.html">Pizza</a>
                      </h6>
                      <span className="price">20</span>
                    </div>
                  </div>
                  <div className="filter-menu d-flex align-items-center">
                    <div className="dish-img">
                      <a href="single-dish.html">
                        {" "}
                        <img src="assets/images/menu-item/fm4.png" alt="" />
                      </a>
                    </div>
                    <div className="dish-content d-flex">
                      <h6>
                        {" "}
                        <a href="single-dish.html">Chicken fry</a>
                      </h6>
                      <span className="price">50</span>
                    </div>
                  </div>
                </div>
                <div className="single-widget banner-widget  wow fadeInUp ">
                  <div className="gallery-img-4">
                    <h5>Super Combo Burger</h5>
                    <a href="shopping-cart.html" className="btn">
                      order now
                    </a>
                    <img src="assets/images/gallery/22.png" alt="" />
                    <span className="gprice-4">
                      <img src="assets/images/gallery/25.png" alt="" />
                    </span>
                    <span className="gshape-1">
                      <img src="assets/images/shapes/35.png" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>

  )
}

export default Blogs
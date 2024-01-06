import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BlogsData } from '../data/blogs'

const BlogSingle = () => {

    const params = useParams()
    const [blog, setBlog] = useState({})
    const [siteUrl, setSiteUrl] = useState(''); // Replace with your site URL
    useEffect(() => {
        setBlog(BlogsData.find(item => item.slug === params?.slug))
    }, [params?.slug])
    useEffect(() => {
        const getSiteUrl = () => {
            const baseUrl = window.location.origin; // or window.location.protocol + '//' + window.location.host
            setSiteUrl(""+baseUrl+window.location.pathname);
        };

        getSiteUrl();
    }, []);
    return (
        <>
            {console.log(blog)}
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
                        <nav aria-label="breadcrumb text-center">
                            <h2 className="page-title">{blog?.title}</h2>
                            <ol className="breadcrumb text-center">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home </Link> &nbsp; / &nbsp; <Link to="/blogs">Blogs </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {blog?.slug}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Blog Content Section */}
            <section className="blog-content-section blog-details-page padding-120" style={{ paddingBottom: '0px', paddingTop: '50px' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-9">
                            <div className="blog-posts">
                                <div className="blog-single-post">
                                    <div className="blog-thumbnail wow fadeInUp">
                                        <img src="/assets/images/blog/blog2.jpg" alt="thumbnail" />
                                    </div>
                                    <div className="blog-content-part">

                                        <div className="blog-title">
                                            <h4>{blog?.content?.section1?.title}</h4>
                                        </div>
                                        <div className="blog-content wow fadeInUp">
                                            <p>
                                                {blog?.content?.section1?.para1}
                                            </p>
                                            <p className="margin-top-20">
                                                {blog?.content?.section1?.para2}
                                            </p>
                                            <p className="margin-top-20">
                                                {blog?.content?.section1?.para3}
                                            </p>
                                        </div>
                                        <div className="blog-title">
                                            <h5>{blog?.content?.section2?.title}</h5>
                                        </div>
                                        <div className="blog-content  wow fadeInUp">
                                            <p>
                                                {blog?.content?.section2?.para1}
                                            </p>
                                            <div className="content-list margin-top-20">
                                                <div className="row">
                                                    {blog?.content?.section2?.keypoints?.map(point => <><div className="col-sm-6">
                                                        <span className="single-list">
                                                            <i className="fa fa-arrow-circle-right" />
                                                            {point}
                                                        </span>
                                                    </div>
                                                    </>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-images margin-top-30">
                                            <div className="row">
                                                <div className="col-sm-12 wow fadeInLeft">
                                                    <div className="single-image">
                                                        <img src={blog?.content?.section2?.image} alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-content  wow fadeInUp">
                                            <p>
                                                {blog?.content?.section2?.para2}
                                            </p>
                                        </div>
                                        {/* <div className="blog-quote margin-top-30 margin-bottom-30  wow fadeInUp">
                                            <div className="quote-text">
                                                <p>
                                                    A hamburger is a sandwich consisting of one or more cooked
                                                    patties of ground meat usually beef, placed inside a
                                                    sliced bread roll or bun.The patty may be pan fried.
                                                </p>
                                                <h6>tonmoy khan</h6>
                                            </div>
                                            <span className="quote-icon">
                                                <i className="fa fa-quote-right" />
                                            </span>
                                        </div> */}
                                        <div className="blog-title">
                                            <h4>{blog?.content?.section3?.title}</h4>
                                        </div>
                                        <div className="blog-content  wow fadeInUp">
                                            <p>
                                                {blog?.content?.section3?.para1}
                                            </p>
                                            <p className="margin-top-20">
                                                {blog?.content?.section3?.para2}
                                            </p>
                                        </div>
                                        <div className="blog-thumbnail wow fadeInUp margin-top-30">
                                            <img src={blog?.content?.section3?.image} alt="image" />
                                        </div>
                                        <div className="blog-contnet margin-top-30  wow fadeInUp">
                                            <p>
                                                {blog?.content?.section3?.para3}
                                            </p>
                                        </div>
                                        <div className="content-bottom margin-top-30">
                                            <div className="row">
                                                {/* <div className="col-sm-6">
                                                    <div className="content-bottom-tag">
                                                        <ul>
                                                            <li>tags:</li>
                                                            <li>
                                                                <a href="#">bbq</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">tikka</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div> */}
                                                <div className="blog-content-top">
                                                    <div className="blog-date margin-right-20">
                                                        <a href="#">
                                                            <i className="fas fa-tag" /> {blog?.category}
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="blog-social-icons">
                                                            <ul>
                                                                <li>
                                                                    <span>share:</span>
                                                                </li>
                                                                <li>
                                                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}>
                                                                        <img src="/assets/images/icons/facebook.png" alt="Share on Facebook" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={`https://twitter.com/intent/tweet?url=${siteUrl}`}>
                                                                        <img src="/assets/images/icons/twitter.png" alt="Share on Twitter" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}`}>
                                                                        <img src="/assets/images/icons/linkdin.png" alt="Share on LinkedIn" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <div className="blog-tag margin-right-20">
                                                <a href="#">
                                                    <i className="fas fa-user-circle" />
                                                    Miyako Prince
                                                </a>
                                            </div>
                                            <div className="blog-author">
                                                <a href="#">
                                                    <i className="fas fa-comments" /> 120+ Comment
                                                </a>
                                            </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className="divider" />
                                {/* blog comment area */}
                                {/* <div className="blog-comment-area  wow fadeInUp">
                                    <div className="blog-title margin-top-30">
                                        <h3>2 comments</h3>
                                    </div>
                                    <div className="single-comment">
                                        <div className="comment-image">
                                            <img
                                                src="/assets/images/testimonial/testi-1.png"
                                                alt="author"
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-content-top">
                                                <div className="content-top-left">
                                                    <h6>Rumon Khan</h6>
                                                    <span>30 august 2020</span>
                                                </div>
                                                <a href="#" className="reply">
                                                    reply
                                                </a>
                                            </div>
                                            <p className="margin-top-10">
                                                A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of the spring which I enjoy with
                                                my whole heart.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-comment">
                                        <div className="comment-image">
                                            <img
                                                src="/assets/images/testimonial/test-4.png"
                                                alt="author"
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-content-top">
                                                <div className="content-top-left">
                                                    <h6>Chirs Deo</h6>
                                                    <span>30 august 2020</span>
                                                </div>
                                                <a href="#" className="reply bg-secondary">
                                                    reply
                                                </a>
                                            </div>
                                            <p className="margin-top-10">
                                                A wonderful serenity has taken possession of my entire soul,
                                                like these sweet mornings of the spring which I enjoy with
                                                my whole heart.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-comment-form margin-top-60  wow fadeInUp">
                                    <div className="comment-title">
                                        <h4>leave a reply</h4>
                                        <form action="#">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="email" placeholder="Your Email" />
                                            <textarea
                                                name="message"
                                                placeholder="Write your text"
                                                id="comment-form"
                                                cols={30}
                                                rows={10}
                                                defaultValue={""}
                                            />
                                            <button type="submit" className="btn margin-top-40">
                                                post comment
                                            </button>
                                        </form>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="single-widget author-widget  wow fadeInUp">
                                    <img src="/assets/images/blog/user.jpg" alt="image" />
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
                                <div className="single-widget search-widget  wow fadeInUp">
                                    <div className="header-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search" />
                                            <button type="submit">
                                                <i className="fa fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-widget product-widget  wow fadeInUp">
                                    <h6 className="margin-bottom-10">Hot Sale Products</h6>
                                    <div className="single-product d-flex align-items-center">
                                        <div className="dish-img">
                                            <a href="single-food.html">
                                                <img src="/assets/images/menu-item/pd6.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="dish-content">
                                            <h6>
                                                {" "}
                                                <a href="single-food.html">Chicken Fry Recipe</a>
                                            </h6>
                                            <span className="price">$10.00</span>
                                            <span>
                                                <a className="cart-select" href="shopping-cart.html">
                                                    <i className="fas fa-shopping-basket" />
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-product d-flex align-items-center">
                                        <div className="dish-img">
                                            <a href="single-food.html">
                                                {" "}
                                                <img src="/assets/images/menu-item/pd4.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="dish-content">
                                            <h6>
                                                {" "}
                                                <a href="single-food.html">Chicken Soup Rejala</a>
                                            </h6>
                                            <span className="price">$20.00</span>
                                            <span>
                                                <a className="cart-select" href="shopping-cart.html">
                                                    <i className="fas fa-shopping-basket" />
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-product d-flex align-items-center">
                                        <div className="dish-img">
                                            <a href="single-food.html">
                                                {" "}
                                                <img src="/assets/images/menu-item/pd7.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="dish-content">
                                            <h6>
                                                {" "}
                                                <a href="single-food.html">The Best Black Frame</a>
                                            </h6>
                                            <span className="price">$80.00</span>
                                            <span>
                                                <a className="cart-select" href="shopping-cart.html">
                                                    <i className="fas fa-shopping-basket" />
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-product d-flex align-items-center">
                                        <div className="dish-img">
                                            <a href="single-food.html">
                                                {" "}
                                                <img src="/assets/images/menu-item/pd8.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="dish-content">
                                            <h6>
                                                {" "}
                                                <a href="single-food.html">The Best Black Frame</a>
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
                                                <img src="/assets/images/menu-item/fm1.png" alt="" />
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
                                                <img src="/assets/images/menu-item/fm2.png" alt="" />
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
                                                {" "}
                                                <img src="/assets/images/menu-item/fm3.png" alt="" />
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
                                                <img src="/assets/images/menu-item/fm4.png" alt="" />
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
                                <div className="single-widget banner-widget  wow fadeInUp">
                                    <div className="gallery-img-4">
                                        <h5>Super Combo Burger</h5>
                                        <a href="shopping-cart.html" className="btn">
                                            order now
                                        </a>
                                        <img src="/assets/images/gallery/22.png" alt="" />
                                        <span className="gprice-4">
                                            <img src="/assets/images/gallery/25.png" alt="" />
                                        </span>
                                        <span className="gshape-1">
                                            <img src="/assets/images/shapes/35.png" alt="" />
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

export default BlogSingle
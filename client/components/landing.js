import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import hero2 from '../assets/images/hero_2.jpg'

const Home = () => {
  return (
    <div className="site-wrap">

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>

      <div className="top-bar py-3 bg-light" id="home-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 text-left">
              <ul className="social-media">
                <li><a href="#" className=""><span className="icon-facebook" /></a></li>
                <li><a href="#" className=""><span className="icon-twitter" /></a></li>
                <li><a href="#" className=""><span className="icon-instagram" /></a></li>
                <li><a href="#" className=""><span className="icon-linkedin" /></a></li>
              </ul>
            </div>
            <div className="col-6">
              <p className="mb-0 float-right">
                <span className="mr-3"><a href="tel://#"> <span className="icon-phone mr-2" style={{ position: 'relative', top: '2px' }} /><span className="d-none d-lg-inline-block text-black">(+1) 234 5678 9101</span></a></span>
                <span><a href="#"><span className="icon-envelope mr-2" style={{ position: 'relative', top: '2px' }} /><span className="d-none d-lg-inline-block text-black">shop@yourdomain.com</span></a></span>
              </p>

            </div>
          </div>
        </div>
      </div>

      <header className="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo"><a href="index.html" className="text-black mb-0">Selling<span className="text-primary">.</span> </a></h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-'relative' text-right" role="navigation">

                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><a href="#home-section" className="nav-link">Home</a></li>
                  <li><a href="#products-section" className="nav-link">Products</a></li>
                  <li><a href="#about-section" className="nav-link">About Us</a></li>
                  <li><a href="#special-section" className="nav-link">Special</a></li>
                  <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                  <li><a href="#blog-section" className="nav-link">Blog</a></li>
                  <li><a href="#contact-section" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>


            <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: 'relative', top: '3px' }}><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3" /></a></div>

          </div>
        </div>

      </header>


      <div className="site-blocks-cover overlay" style={{ 'background-image': `url(${hero2})` }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center">

            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">

              <div className="row mb-4">
                <div className="col-md-7">
                  <h1>Shop With Us</h1>
                  <p className="mb-5 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                  <div>
                    <a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a>
                    <a href="#" className="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Club Membership</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="site-section" id="products-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h3 className="section-sub-title">Popular Products</h3>
              <h2 className="section-title mb-3">Our Products</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>LRepudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src="images/model_1_bg.jpg" alt="decoration" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <h3><a href="#">Wild West Hoodie</a></h3>
                  <div className="mb-3">
                    <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning" /></a> 5.0</span>
                    <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart" /></a> 29</span>
                  </div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <div>
                    <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                    <a href="#" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src="images/model_2_bg.jpg" alt="decoration" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <h3><a href="#">Wild West Hoodie</a></h3>
                  <div className="mb-3">
                    <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning" /></a> 5.0</span>
                    <span className="meta-icons wishlist active"><a href="#" className="mr-2"><span className="icon-heart" /></a> 29</span>
                  </div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <div>
                    <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                    <a href="#" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src="images/model_3_bg.jpg" alt="decoration" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <h3><a href="#">Wild West Hoodie</a></h3>
                  <div className="mb-3">
                    <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning" /></a> 5.0</span>
                    <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart" /></a> 29</span>
                  </div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <div>
                    <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                    <a href="#" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src="images/model_4_bg.jpg" alt="decoration" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <h3><a href="#">Wild West Hoodie</a></h3>
                  <div className="mb-3">
                    <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning" /></a> 5.0</span>
                    <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart" /></a> 29</span>
                  </div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <div>
                    <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                    <a href="#" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src="images/model_5_bg.jpg" alt="decoration" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <h3><a href="#">Wild West Hoodie</a></h3>
                  <div className="mb-3">
                    <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning" /></a> 5.0</span>
                    <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart" /></a> 29</span>
                  </div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <div>
                    <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                    <a href="#" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src="images/product_1_bg.jpg" alt="decoration" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <h3><a href="#">Wild West Hoodie</a></h3>
                  <div className="mb-3">
                    <span className="meta-icons mr-3"><a href="#" className="mr-2"><span className="icon-star text-warning" /></a> 5.0</span>
                    <span className="meta-icons wishlist"><a href="#" className="mr-2"><span className="icon-heart" /></a> 29</span>
                  </div>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  <div>
                    <a href="#" className="btn btn-black mr-1 rounded-0">Cart</a>
                    <a href="#" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="site-blocks-cover inner-page-cover overlay get-notification" style={{ 'background-image': `url(${hero2})`, 'background-attachment': 'fixed' }} data-aos="fade">
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <form className="col-md-7" method="post" />
            <h2>Get notified on each updates.</h2>
            <div className="d-flex mb-4">
              <input type="text" className="form-control rounded-0" placeholder="Enter your email address" />
              <input type="submit" className="btn btn-white btn-outline-white rounded-0" value="Subscribe" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
          </div>

        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-6 text-center">
              <h3 className="section-sub-title">Awesome Products</h3>
              <h2 className="section-title mb-3">Featured Products</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
            </div>
          </div>
          <div className="bg-white py-4 mb-4">
            <div className="row mx-4 my-4 product-item-2 align-items-start">
              <div className="col-md-6 mb-5 mb-md-0">
                <img src="images/model_1_bg.jpg" alt="decoration" className="img-fluid" />
              </div>

              <div className="col-md-5 ml-auto product-title-wrap">
                <span className="number">01.</span>
                <h3 className="text-black mb-4 font-weight-bold">About This Product</h3>
                <p className="mb-4">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>

                <div className="mb-4">
                  <h3 className="text-black font-weight-bold h5">Price:</h3>
                  <div className="price"><del className="mr-2">$269.00</del> $69.00</div>
                </div>
                <p>
                  <a href="#" className="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block">View Details</a>
                  <a href="#" className="btn btn-black rounded-0 d-block d-lg-inline-block">Add To Cart</a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white py-4">
            <div className="row mx-4 my-4 product-item-2 align-items-start">
              <div className="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
                <img src="images/product_1_bg.jpg" alt="decoration" className="img-fluid" />
              </div>

              <div className="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
                <span className="number">02.</span>
                <h3 className="text-black mb-4 font-weight-bold">About This Product</h3>
                <p className="mb-4">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>

                <div className="mb-4">
                  <h3 className="text-black font-weight-bold h5">Price:</h3>
                  <div className="price"><del className="mr-2">$269.00</del> $69.00</div>
                </div>
                <p>
                  <a href="#" className="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block">View Details</a>
                  <a href="#" className="btn btn-black rounded-0 d-block d-lg-inline-block">Add To Cart</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="site-section" id="about-section">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-md-8 mb-5 mb-lg-0 position-'relative'">
              <img src="images/about_1.jpg" className="img-fluid" alt="decoration" />
              <div className="experience">
                <span className="year">Trusted Merchant</span>
                <span className="caption">for 50 years</span>
              </div>
            </div>
            <div className="col-md-3 ml-auto">
              <h3 className="section-sub-title">Merchant Company</h3>
              <h2 className="section-title mb-3">About Us</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
              <p><a href="#" className="btn btn-black btn-black--hover rounded-0">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>


      <div className="site-section border-bottom" id="team-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="section-sub-title">Team</h3>
              <h2 className="section-title mb-3">Leadership</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
              <div className="person text-center">
                <img src="images/person_2.jpg" alt="decoration" className="img-fluid rounded w-75 mb-3" />
                <h3>John Rooster</h3>
                <p className="position text-muted">Co-Founder, President</p>
                <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <ul className="ul-social-circle">
                  <li><a href="#"><span className="icon-facebook" /></a></li>
                  <li><a href="#"><span className="icon-twitter" /></a></li>
                  <li><a href="#"><span className="icon-linkedin" /></a></li>
                  <li><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
              <div className="person text-center">
                <img src="images/person_3.jpg" alt="decoration" className="img-fluid rounded w-75 mb-3" />
                <h3>Tom Sharp</h3>
                <p className="position text-muted">Co-Founder, COO</p>
                <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <ul className="ul-social-circle">
                  <li><a href="#"><span className="icon-facebook" /></a></li>
                  <li><a href="#"><span className="icon-twitter" /></a></li>
                  <li><a href="#"><span className="icon-linkedin" /></a></li>
                  <li><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
              <div className="person text-center">
                <img src="images/person_4.jpg" alt="decoration" className="img-fluid rounded w-75 mb-3" />
                <h3>Winston Hodson</h3>
                <p className="position text-muted">Marketing</p>
                <p className="mb-4">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                <ul className="ul-social-circle">
                  <li><a href="#"><span className="icon-facebook" /></a></li>
                  <li><a href="#"><span className="icon-twitter" /></a></li>
                  <li><a href="#"><span className="icon-linkedin" /></a></li>
                  <li><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-blocks-cover overlay get-notification" id="special-section" style={{ 'background-image': `url(${hero2})`, 'background-attachment': 'fixed', 'background-position': 'top' }} data-aos="fade">
        <div className="container">

          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h3 className="section-sub-title">Special Promo</h3>
              <h3 className="section-title text-white mb-4">Summer Sale</h3>
              <p className="mb-5 lead">Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>

              <div id="date-countdown" className="mb-5" />

              <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a></p>
            </div>
          </div>

        </div>
      </div>

      <div className="site-section bg-light" id="services-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="section-sub-title">Our Services</h3>
              <h2 className="section-title mb-3">We Offer Services</h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary icon-pie_chart" /></div>
                <div>
                  <h3>Business Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary icon-backspace" /></div>
                <div>
                  <h3>Market Analysis</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary icon-av_timer" /></div>
                <div>
                  <h3>User Monitoring</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary icon-beenhere" /></div>
                <div>
                  <h3>Seller Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary icon-business_center" /></div>
                <div>
                  <h3>Financial Investment</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="500">
              <div className="unit-4 d-flex">
                <div className="unit-4-icon mr-4"><span className="text-primary icon-cloud_done" /></div>
                <div>
                  <h3>Financial Management</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p><a href="#">Learn More</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="site-section testimonial-wrap" id="testimonials-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="section-sub-title">People Says</h3>
              <h2 className="section-title mb-3">Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="slide-one-item home-slider owl-carousel">
          <div>
            <div className="testimonial">
              <figure className="mb-4 d-block align-items-center justify-content-center" />
              <div><img src="images/person_3.jpg" alt="decoration" className="w-100 img-fluid mb-3" /></div>
              <blockquote className="mb-3">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.</p>
                <p>Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <p className="text-black"><strong>John Smith</strong></p>


            </div>
          </div>
          <div>
            <div className="testimonial">

              <figure className="mb-4 d-block align-items-center justify-content-center" />
              <div><img src="images/person_2.jpg" alt="decoration" className="w-100 img-fluid mb-3" /></div>
              <blockquote className="mb-3">
                <p />&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <p /> Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.
                <p /> Amet dolores excepturi earum unde iusto.&rdquo;
              </blockquote>

              <p className="text-black"><strong>Robert Aguilar</strong></p>


            </div>
          </div>

          <div>
            <div className="testimonial">
              <figure className="mb-4 d-block align-items-center justify-content-center" />
              <div><img src="images/person_4.jpg" alt="decoration" className="w-100 img-fluid mb-3" /></div>
              <blockquote className="mb-3">
                <p />&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <p /> Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.
                <p />Amet dolores excepturi earum unde iusto.&rdquo;
              </blockquote>
              <p className="text-black"><strong>Roger Spears</strong></p>


            </div>

          </div>

          <div>
            <div className="testimonial">
              <figure className="mb-4 d-block align-items-center justify-content-center" />
              <div><img src="images/person_1.jpg" alt="decoration" className="w-100 img-fluid mb-3" /></div>
              <blockquote className="mb-3">
                <p />&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <p /> Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur.
                <p /> Amet dolores excepturi earum unde iusto.&rdquo;
              </blockquote>
              <p className="text-black"><strong>Kyle McDonald</strong></p>
            </div>

          </div>

        </div>
      </div>


      <div className="site-section" id="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="section-sub-title">Blog</h3>
              <h2 className="section-title mb-3">Blog Posts</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src="images/model_1_bg.jpg" alt="decoration" className="img-fluid" />
                <h2 className="font-size-regular"><a href="#" className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>
                <div className="meta mb-4">Ham Brook <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p> Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src="images/product_1_bg.jpg" alt="decoration" className="img-fluid" />
                <h2 className="font-size-regular"><a href="#" className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>
                <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p> Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img src="images/model_5_bg.jpg" alt="decoration" className="img-fluid" />
                <h2 className="font-size-regular"><a href="#" className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>
                <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p> Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="section-sub-title">Contact Form</h3>
              <h2 className="section-title mb-3">Get In Touch</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 mb-5">


              <form action="#" className="p-5 bg-white" />

              <h2 className="h4 text-black mb-5">Contact Form</h2>

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" className="form-control rounded-0" />
                </div>
                <div className="col-md-6">
                  <label className="text-black" htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">

                <div className="col-md-12">
                  <label className="text-black" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">

                <div className="col-md-12">
                  <label className="text-black" htmlFor="subject">Subject</label>
                  <input type="subject" id="subject" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-0" placeholder="Write your notes or questions here..." />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-black rounded-0 py-3 px-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


      <footer className="site-footer bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-5">
                  <h2 className="footer-heading mb-4">About Us</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p> Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                </div>
                <div className="col-md-3 ">
                  <h2 className="footer-heading mb-4">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2 className="footer-heading mb-4">Follow Us</h2>
                  <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                  <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                  <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                  <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 ml-auto">
              <h2 className="footer-heading mb-4">Featured Product</h2>
              <a href="#"><img src="images/product_1_bg.jpg" alt="decoration" className="img-fluid mb-3" /></a>
              <h4 className="h5">Leather Brown Shoe</h4>
              <strong className="text-black mb-3 d-inline-block">$60.00</strong>
              <p><a href="#" className="btn btn-black rounded-0">Add to Cart</a></p>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5" />
              <p>
        Copyright &copy;<script>document.write(new Date().getFullYear());</script>
        All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>

  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

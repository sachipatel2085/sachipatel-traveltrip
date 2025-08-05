import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className="hero">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
    <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="./public/1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>We Provide <br /> <span>Best Guidance</span></h5>
        <p>You’ll always have fascinating places to be and friendly people to see.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./public/2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>We Provide <br /> <span>Best Guidance</span></h5>
        <p>You’ll always have fascinating places to be and friendly people to see.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./public/3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>We Provide <br /> <span>Best Guidance</span></h5>
        <p>You’ll always have fascinating places to be and friendly people to see.</p>
      </div>
    </div>
        </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
      <div className="welcom">
        <h1 className='h1-dark'>welcome to <span>travel</span></h1>
        <p className='p-dark'>You’ll always have fascinating places to be and friendly people to see.</p>
        <div className="welcom-info">
          <div className="welcom-left">
            <img src="./public/g8.jpg" alt="" />
          </div>
          <div className="welcom-right">
            <h2>We Provide Best Guidance</h2>
            <h3>Travel</h3>
            <span>Tours And Travels</span>
            <h5>we are specialised at-</h5>
            <ul>
              <li>Switzerland Tour</li>
              <li>Beach Tour</li>
              <li>Thailand Tour</li>
              <li>Historical Tour</li>
              <li>Adventure Tour</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="overlay">
        <h1 className='h1-white'>Our <span> Stats</span></h1>
        <p className='p-white'>You’ll always have fascinating places to be and friendly people to see.</p>
        <div className="stats-info">
          <div className="state">
          <i className='fa fa-picture-o'></i>
          <p className='counter'>1526</p>
          <h3>plase to visit</h3>
          </div>
          <div className="state">
            <i className='fa fa-smile-o'></i>
            <p className='counter'>1526</p>
            <h3>hotel to stay</h3>
          </div>
          <div className="state">
            <i className='fa fa-trophy'></i>
            <p className='counter'>1526</p>
            <h3>awards</h3>
          </div>
          <div className="state">
            <i className='fa fa-camera'></i>
            <p className='counter'>1526</p>
            <h3>Repeat Visitors</h3>
          </div>
        </div>

        </div>
      </div>
      <div className="services">
        <h1 className='h1-dark'>
          Our  
          <span> services</span>
        </h1>
        <p className='p-dark'>You’ll always have fascinating places to be and friendly people to see.</p>
        <div className="services-info">
          <div className="service">
            <h1>
              <i className='fa fa-plane'></i>
              <p>Airline Tickets</p>
            </h1>
            <div className="service-ception">
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <label className='service-button' htmlFor="check">more info...</label>
              <input type="checkbox" name="" id="check" />
              <div className="model">
                <div className='model-contener' >
                  <div className="model-content">
                    <h1>
                      Travel
                      <label htmlFor="check">×</label>
                    </h1>
                    <img src="./public/g7.jpg" alt="" />
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                      <i>" Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service">
            <h1>
              <i className='fa fa-ship'></i>
              <p>Adventure Tour</p>
            </h1>
            <div className="service-ception">
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <label className='service-button' htmlFor="check-2">more info...</label>
              <input type="checkbox" name="" id="check-2" />
              <div className="model">
                <div className='model-contener' >
                  <div className="model-content">
                    <h1>
                      Travel
                      <label htmlFor="check-2">×</label>
                    </h1>
                    <img src="./public/g7.jpg" alt="" />
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                      <i>" Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."</i>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="service">
            <h1>
              <i className='fa fa-bus'></i>
              <p>Summer Tour</p>
            </h1>
            <div className="service-ception">
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <label className='service-button' htmlFor="check-3">more info...</label>
              <input type="checkbox" name="" id="check-3" />
              <div className="model">
                <div className='model-contener' >
                  <div className="model-content">
                    <h1>
                      Travel
                      <label htmlFor="check-3">×</label>
                    </h1>
                    <img src="./public/g7.jpg" alt="" />
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                      <i>" Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."</i>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="service">
            <h1>
              <i className='fa fa-truck'></i>
              <p>World Tour</p>
            </h1>
            <div className="service-ception">
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <p><i className='fa fa-long-arrow-right icons-left'></i>Lorem ipsum dolor sit amet.</p>
              <label className='service-button' htmlFor="check-4">more info...</label>
              <input type="checkbox" name="" id="check-4" />
              <div className="model">
                <div className='model-contener' >
                  <div className="model-content">
                    <h1>
                      Travel
                      <label htmlFor="check-4">×</label>
                    </h1>
                    <img src="./public/g7.jpg" alt="" />
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                      <i>" Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."</i>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonials-overlay">
          <div className="testimonial-info">
            <div className="testimonials-info">
              <div className="testimonial">
                <h4>What Client say</h4>
                <p>Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt. Integer id erat porta, convallis tortor.</p>
                <h5>Mark Henry</h5>
                <img src="./public/t1.jpg" alt="" />
              </div>
            </div>
              <div className="testimonial-left">
                <img src="./public/left.png" alt="" />
              </div>
              <div className="testimonial-right">
                <img src="./public/right.png" alt="" />
              </div>
          </div>
        </div>
      </div>
      <div className="news">
        <h1 className='h1-dark'>
          Subscribe
          <span> Newsletter</span> 
        </h1>
        <p className='p-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat, tristique elit sed, molestie nulla.</p>
        <div className="news-info">
          <input type="email" name="" id="" placeholder='enter email...'/>
          <button className='news-button'>subscribe</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-info">
          <div className="link">
            <h1>our link</h1>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/mailus">Mail Us</NavLink>
            </li>
          </div>
          <div className="contect">
            <h1>contect info</h1>
            <li>
              <i className='fa fa-map-marker'></i>
              +91 7863847823
            </li>
            <li>
              <i className='fa fa-fax'></i>
              272 718 272
            </li>
            <li>
              <i className='fa fa-phone'></i>
              1143 New York, USA
            </li>
            <li>
              <i className='fa fa-envelope-o'></i>
              mail@example.com
            </li>
          </div>
          <div className="f-about">
            <h1>about us</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
            <p>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
          </div>
        </div>
        <div className="copy-right">
          <div className="social">
            <i className='fa fa-twitter'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-google-plus'></i>
            <i className='fa fa-dribbble'></i>
          </div>
          <p>© 2018 Travel Trip. All rights reserved | Design by <span> W3layouts.</span></p>
        </div>
      </div>
    </>
  )
}

export default Home
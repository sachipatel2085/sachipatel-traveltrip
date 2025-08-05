import React from 'react'
import { NavLink } from 'react-router-dom'

const Gallery = () => {
  return (
    <>
    <div className="contener">
      <div className="a-hero"></div>
      <div className="gallery">
        <h1 className='h1-dark'>
          Our
          <span> Gallery</span>
        </h1>
        <p className='p-dark'>
          You'll always have fascinating places to be and friendly people to see.
        </p>
        <div className="gallery-info">
          <div className="g-info">
            <img src="../public/g1.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g2.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g3.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g4.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g5.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g6.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g7.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g8.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
          <div className="g-info">
            <img src="../public/g9.jpg" alt="" />
            <p>Proin vitae luctus dui, sit amet ultricies leo</p>
            <div className="g-dark-effect"></div>
          </div>
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
      
    </div>
    </>
  )
}

export default Gallery
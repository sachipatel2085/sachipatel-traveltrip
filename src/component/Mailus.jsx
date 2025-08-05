import React from 'react'
import { NavLink } from 'react-router-dom'

const Mailus = () => {
  return (
    <>
    <div className="contener">
      <div className="a-hero"></div>
      <div className="mail-us">
        <h1 className='h1-dark'>
          Mail
          <span> Us</span>
        </h1>
        <p className='p-dark'>You’ll always have fascinating places to be and friendly people to see.</p>
        <div className="mail-us-info">
          <div className="mail-us-left">
            <div>
              <p>name</p>
              <input type="text" />
            </div>
            <div>
              <p>e-mail</p>
              <input type="email" name="" id="" />
            </div>
            <div>
              <p>fax</p>
              <input type="text" />
            </div>
          </div>
          <div className="mail-us-right">
            <p>message</p>
            <textarea name="" id=""></textarea>
            <br />
            <button type="submit">submit</button>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1827.7205253570442!2d73.11204775611311!3d23.6243709402299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753344516869!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default Mailus
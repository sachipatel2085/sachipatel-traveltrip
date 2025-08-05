import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="contener">
      <div className="a-hero"></div>
      <div className="work">
        <h1 className='h1-dark'>
          what 
          <span> we do</span>
        </h1>
        <p className='p-dark'>You’ll always have fascinating places to be and friendly people to see.</p>
        <div className="work-info">
          <img src="../public/g6.jpg" alt="" />
          <div className="work-right">
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-1" aria-expanded="false" aria-controls="collapseWidthExample-1">
                <a><i>+</i> assumenda est cliche repren</a>
              </button>
            </p>
            <div>
              <div className="collapse collapse-horizontal" id="collapseWidthExample-1">
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                </div>
              </div>
            </div>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-2" aria-expanded="false" aria-controls="collapseWidthExample-2">
                <a><i>+</i> Itaque earum rerum</a>
              </button>
            </p>
            <div>
              <div className="collapse collapse-horizontal" id="collapseWidthExample-2">
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod
                </div>
              </div>
            </div>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-3" aria-expanded="false" aria-controls="collapseWidthExample-3">
                <a><i>+</i> Sed tincidunt lorem sed velit</a>
              </button>
            </p>
            <div className='coll-1'>
              <div className="collapse collapse-horizontal" id="collapseWidthExample-3">
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                </div>
              </div>
            </div>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-4" aria-expanded="false" aria-controls="collapseWidthExample-4">
                <a><i>+</i> excepturi sint cliche henderit</a>
              </button>
            </p>
            <div className='coll-1'>
              <div className="collapse collapse-horizontal" id="collapseWidthExample-4">
                <div className="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.                </div>
              </div>
            </div>
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
      <div className="professionals">
        <h1 className='h1-dark'>
          Our
          <span> Professionals</span>
        </h1>
        <p className='p-dark'>You’ll always have fascinating places to be and friendly people to see.</p>
        <div className="professionals-info">
          <div className="professional">
            <img src="../public/t1.jpg" alt="" />
            <div className="team">
            <h3>frenklin</h3>
            <div className="team-social">
              <a href="#">
                <i className='fa fa-facebook'></i>
              </a>
              <a href="#">
                <i className='fa fa-twitter'></i>
              </a>
              <a href="#">
                <i className='fa fa-linkedin'></i>
              </a>
              <a href="#">
                <i className='fa fa-pinterest-p'></i>
              </a>
            </div>
            <p><i className='fa fa-dot-circle-o'></i>Manager</p>
            <p><i className='fa fa-phone'></i>+02 133 4567</p>
            <p><i className='fa fa-envelope'></i> mail@example.com</p>

            </div>
          </div>
            <div className="professional">
            <img src="../public/t2.jpg" alt="" />
            <div className="team">
            <h3>frenklin</h3>
            <div className="team-social">
              <a href="#">
                <i className='fa fa-facebook'></i>
              </a>
              <a href="#">
                <i className='fa fa-twitter'></i>
              </a>
              <a href="#">
                <i className='fa fa-linkedin'></i>
              </a>
              <a href="#">
                <i className='fa fa-pinterest-p'></i>
              </a>
            </div>
            <p><i className='fa fa-dot-circle-o'></i>Manager</p>
            <p><i className='fa fa-phone'></i>+02 133 4567</p>
            <p><i className='fa fa-envelope'></i> mail@example.com</p>

            </div>
          </div>
          <div className="professional">
            <img src="../public/t3.jpg" alt="" />
            <div className="team">
            <h3>frenklin</h3>
            <div className="team-social">
              <a href="#">
                <i className='fa fa-facebook'></i>
              </a>
              <a href="#">
                <i className='fa fa-twitter'></i>
              </a>
              <a href="#">
                <i className='fa fa-linkedin'></i>
              </a>
              <a href="#">
                <i className='fa fa-pinterest-p'></i>
              </a>
            </div>
            <p><i className='fa fa-dot-circle-o'></i>Manager</p>
            <p><i className='fa fa-phone'></i>+02 133 4567</p>
            <p><i className='fa fa-envelope'></i> mail@example.com</p>
            </div>
          </div>
          <div className="professional">
            <img src="../public/t4.jpg" alt="" />
            <div className="team">
            <h3>frenklin</h3>
            <div className="team-social">
              <a href="#">
                <i className='fa fa-facebook'></i>
              </a>
              <a href="#">
                <i className='fa fa-twitter'></i>
              </a>
              <a href="#">
                <i className='fa fa-linkedin'></i>
              </a>
              <a href="#">
                <i className='fa fa-pinterest-p'></i>
              </a>
            </div>
            <p><i className='fa fa-dot-circle-o'></i>Manager</p>
            <p><i className='fa fa-phone'></i>+02 133 4567</p>
            <p><i className='fa fa-envelope'></i> mail@example.com</p>
            </div>
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

export default About
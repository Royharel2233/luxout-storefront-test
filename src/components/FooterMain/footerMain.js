import React from 'react';
import './footerMain.scss';
import './css/bootstrap.css';
import './css/style.css';
import NewsLetterSignUp from '../../components/NewsLetterSignUp/newsLetterSignUp';

import logo_image from './img/logo.svg';
import facebook from './img/Facebook.svg';
import instagrem from './img/Instagram.svg';
import pintrest from './img/Pinterest.svg';
import houzz from './img/Houzz.svg';
import youtube from './img/Youtube.svg';

function FooterMain() {
    return (
      <div className="FooterMain">
          <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <a href="#"
                    ><img src={logo_image} className="img-fluid logo" alt="logo"
                  /></a>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <ul className="list-unstyled mb-0">
                        <li>PRODUCT</li>
                        <li><a href="#">Installation</a></li>
                        <li><a href="#">Warranty</a></li>
                        <li><a href="#">Child Safety</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Motorization</a></li>
                        <li><a href="#">Finishing Touches</a></li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="list-unstyled mb-0">
                        <li>about</li>
                        <li><a href="#">Why LuXout?</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Shipping + Handling</a></li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="list-unstyled">
                        <li>legal</li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <NewsLetterSignUp />
              </div>
            </div>
            <div className="container copyright">
              <div className="row">
                <div className="col-sm-6">
                  <p className="mb-0">
                    © 2019 LuXout Shades All Rights Reserved
                  </p>
                </div>
                <div className="col-sm-6">
                  <ul className="list-inline text-sm-right mb-0">
                    <li className="list-inline-item">
                      <a href="#"><img src={facebook} alt="Facebook"/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><img src={instagrem} alt="Instagram"/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><img src={pintrest} alt="Pinterest"/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><img src={houzz} alt="Houzz"/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><img src={youtube} alt="Youtube"/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        )
    };
export default FooterMain;


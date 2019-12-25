import React from 'react';
// import './mainHeader.scss';
import './css/bootstrap.css';
import './css/style.css';
// import {link} from 'react-router-dom'

import user_login_pic from './images/user_login.png';
import search_logo from './images/search.svg';
import cart_logo from './images/cart.svg';
import logo_image from './images/logo.svg';


function MainHeader() {
    return (
            <header>
              <div className="container">
                <nav className="navbar navbar-expand-md p-0">
                  <div className="preheader">
                    <button
                      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                    <select name="lang" id="lang" className="lang_selection">
                      <option value="En">EN</option>
                      <option value="Fr">FR</option>
                      <option value="ar">AR</option>
                      <option value="de">DE</option>
                    </select>
                    <a className="navbar-brand p-0" href="/"
                      ><img
                        src={logo_image}
                        alt="LuxOut Shades"
                        className="img-fluid logo"
                    /></a>
                    <ul className="list-inline preheader_nav">
                      <li className="list-inline-item dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                          ><img
                            src={user_login_pic}
                            alt="user_login"
                            className="img-fluid"
                        /></a>
  
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Profile</a>
                          <a className="dropdown-item" href="#">My order</a>
                          <a className="dropdown-item" href="#">Logout</a>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <a href="/search" className="search"
                          ><img src={search_logo} alt="search" className="img-fluid"
                        /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/cart" className="cart"
                          ><img src={cart_logo} alt="search" className="img-fluid" />
                          <span className="badge badge-pill badge-warning">2</span></a
                        >
                      </li>
                    </ul>
                  </div>
  
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="/fabrics"
                          >FABRICS <span className="sr-only">(current)</span></a
                        >
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/build-my-shade">BUILD MY SHADE</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/roller-shades">ROLLER SHADES</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dual-roller-shade">DUAL ROLLER SHADES</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/double-roller-shade">DOUBLE ROLLER SHADES</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/gallery">GALLERY</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/lookbook">LOOKBOOK</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
            )};
export default MainHeader;
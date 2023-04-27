import React from 'react';
import logo from '../Images/logo.png';
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
    <header className="header header-1 header-3" >
        <div className="main-header-wraper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="header-logo">
                                <div className="logo">
                                    <a href="/">
                                        <img src={logo} alt="logo"/>
                                    </a>
                                </div>
                            </div>

                            <div className="header-menu d-none d-xl-block">
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <a href="/" >Home</a>
                                            <ul>
                                                <li><a href="/" >home 1</a></li>
                                                <li><a href="/" >home 2</a></li>
                                                <li><a href="/" >home 3</a></li>
                                                <li><a href="/" >home 4</a></li>
                                                <li><a href="/" >home 5</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/" >Our Services</a>
                                            
                                            <ul>
                                                <li><a href="/" >Our Services 1</a></li>
                                                <li><a href="/" >Our Services 2</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/"> Pages</a>
                                            
                                            <ul >
                                                <li><a href="/" >About</a></li>
                                                <li><a href="/" >Contact</a></li>
                                                <li><a href="/" >Pricing Table</a></li>
                                                <li><a href="/" >Team</a></li>
                                                <li><a href="/" >Team Details</a></li>
                                                <li><a href="/" >Services Details</a></li>
                                                <li><a href="/" >Our Project Details</a></li>
                                                <li><a href="/" >Blog Details</a></li>
                                                <li><a href="/" >404</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/" >Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="/" >Blog</a>
                                            
                                            <ul>
                                                <li><a href="/" >Blog 1</a></li>
                                                <li><a href="/" >Blog 2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-right d-flex align-items-center">
                                <div className="header-search">
                                    <a href='/' className="search-toggle"  data-selector=".header-search">
                                        <span><i className="fas fa-search"></i></span>
                                    </a>

                                    <form className="search-box" action="#" method="get">
                                        <div className="form-group d-flex align-items-center">
                                            <input type="search" name="s" value="" className="search-input" id="search" placeholder="Search"/>
                                            <button type="submit" className="search-submit"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                                <a href="/" className="button" id="btnnav" >Login </a>
                                <div className="mobile-nav-bar d-block ml-3 ml-sm-5 d-xl-none">
                                    <div className="mobile-nav-wrap">                    
                                        <div id="hamburger">
                                            <i onclick="openMenu()" className="fa fa-bars"></i>
                                        </div>                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
       </>
  )
}

import React from 'react';
import './Footer.css';
import rp1 from '../Images/rp1.png';
import rp2 from '../Images/rp2.png';
import logo from '../Images/logoblack.png';

export default function Footer() {
  return (
   <> 
   <footer className="footer1" >
<div className="overly" >
        <div className="container">
            
        </div>
</div>
<div className="top pb-100 pb-lg-80 pb-md-70 pb-sm-60 pb-xs-50" >
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="ftboxw d-flex flex-column flex-sm-row text-center text-sm-start justify-content-sm-between align-items-center">
                <div className="ftxt text-white">
                    <h3 >Get updated Informed to Subscribe our Newsletter</h3>
                </div>
                <div className="fbbtn d-flex flex-column" >
                    <input type="email" className="input my-2" placeholder="Your e-mail" />
                    <a href="/" className="butn" >Subscribe Now</a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container my-5 text-white" >
<div className="row justify-content-between">
<div className="col-md-6 col-xl-3">
    <div className="fdisk">
        <a href="/" className="d-block mb-30 mb-xs-20"> <img src={logo} alt=""/></a>
        <div className="ffdes mb-40 mb-sm-30 mb-xs-25" >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua ut enim ad minim veniam
            </p>
        </div>
        <a href="/" className="butn btn-md fw-600">Purchase Now</a>
    </div>

</div>
<div className="col-md-6 col-xl-2">
<div className="fw2 pl-xl-10 pl-50">
    <h4 >Quick Link</h4>
    <ul>
        <li><a href="/">About Company</a></li> 
        <li><a href="/">Our Services</a></li> 
        <li><a href="/">Meet Our Team</a></li> 
        <li><a href="/">Investor Presentation</a></li> 
        <li><a href="/">Investor Carrer</a></li> 
        <li><a href="/">Support</a></li>
    </ul>
</div>
</div>
<div className="col-md-6 col-xl-4">
<div className="fwrpost pl-xl-10 pl-65 pr-50 pr-xl-30">
    <h4 className='text-white'>Resent Post</h4>
    <div className="rpost text-white  ">
        <a href="/" className="mb-20 pb-20 d-flex align-items-center text-decoration-none text-white my-5" >
            <div className="thumb">
                <img src={rp1} alt=""/>
            </div>
            <div className="pdata ">
                <h5 className="mb-10 fw-600" >Why Purpose-Driven Employers Succeed</h5>
            <span className="d-flex ailign-items-center" >January 25, 2023</span>
            </div>
        </a>
        <a href="/" className="mb-20 pb-20 d-flex align-items-center text-decoration-none text-white" >
            <div className="thumb">
                <img src={rp2} alt=""/>
            </div>
            <div className="pdata ">
                <h5 className="mb-10 fw-600" >Saving Time Achieving Success in Business</h5>
            <span className="d-flex ailign-items-center" >January 26, 2023</span>
            </div>
        </a>
    </div>
</div>
</div>
<div className="col-md-6 col-xl-3">
<div className="offloc">
    <h4 className="mb-30" >Office Location</h4>
    <div className="map-responsive">

        <iframe title='video' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.41504254524!2d74.05349885838216!3d31.482633701485387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1674757360787!5m2!1sen!2s" width="600" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</div>
</div>
</div>
</div>
<div className="botom overflow-hidden mt-20 mt-sm-15 mt-xs-10">
<div className="container">
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="ctxt text-center text-md-start text-white" >
            © 2023 <a href="/" className="color_red">Consulter</a>  | All Rights Reserved by <a href="/" className="color_red">Rizwan Sohail</a>
        </div>
        <div className="flidt">
<ul>
    <li><a href="/">Terms & Conditions</a></li>
    <li><a href="/">Privacy Policy</a></li>
</ul>
        </div>
    </div>
</div>
</div>
</footer>
   </>
  )
}

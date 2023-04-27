import React from 'react';
import './help.css';
import line from '../Images/line.svg';

export default function help() {
  return (
   <>
<div className="canhelp pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
<div className="container" >
    <div className="row">
        <div className="col-xl-7">
            <div className="chcontent mb-sm-40 mb-xs-40 mb-md-45 mb-lg-50">
                <h2 className="color-white mb-sm-15 mb-xs-10 mb-20">Experience The Evolution Of Your Business</h2>
                <div className="chdisc mb-md-25 mb-sm-25 mb-xs-20 mb-lg-30 mb-40 color-white">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                        alteration in some form, by injected humour, or randomised words which don't look</p>
                </div>
                <div className="chbtn d-flex flex-column flex-sm-row">

                   <a href="/" className=" abtn d-flex flex-column flex-md-row align-items-md-center">
                    <div className="ico">

                    </div>
                    <div className="chtxtt">
                        <span className="mb-10 d-block fw-500 color-white">
                            Call Us Everyday
                        </span>
                        <h5 className="fw-500 color-white">+923040101269</h5>
                    </div></a>
                   <a href="/" className=" abtn d-flex flex-column flex-md-row align-items-md-center">
                    <div className="ico">

                    </div>
                    <div className="chtxtt">
                        <span className="mb-10 d-block fw-500 color-white">
                            Email Drop Us
                        </span>
                        <h5 className="fw-500 color-white">Consulter@gmail.com</h5>
                    </div>
                   </a>
                </div>
            </div>
        </div>
        <div className="col-xl-5">
            <div className="cform pt-md-30 pt-sm-25 pt-xs-20 pb-md-40 pb-sm-35 pb-xs-30 pt-xl-30 pb-xl-50 pt-45 pr-xl-50 pl-md-40 pl-sm-30 pl-xs-25 pr-md-40 pr-sm-30 pr-xs-25 pl-xl-50 pr-85 pb-60 pl-85">
                <div className="cfheader">
                    <h6 className="fw-500 color_red text-uppercase mb-15">
                        <img src={line} alt='' className="img-fluid mx-2"/> Get in Touch
                    </h6>
                    <h3 className="color-pd">Free Consultation</h3>
                </div>
                
                <form >
                    <div className="sinfo">
                        <input type="text" placeholder="Your Name"/>                                         
                    </div>                        
                    <div className="sinfo">
                        <input type="email" placeholder="Your e-mail"/>                                         
                    </div> 
                    <div className="sinfo">
                        <input type="text" placeholder="Subject"/>                                         
                    </div>                                                 
                    <div className="sinfo">
                        <textarea placeholder="Your Massage"></textarea>                                        
                    </div>                              
                    
                    <button type="submit" className="butn btn-sm btn-red">Free Consultant <i className="far fa-chevron-double-right"></i></button>                            
                </form>
            </div>
        </div>
    </div>
</div>
</div>
   </>
  )
}

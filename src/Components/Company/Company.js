import React from 'react';
import './Company.css';
import oc1 from '../Images/our-company-1.png';
import oc2 from '../Images/our-company-2.png';
import star from '../Images/star-red.png';
import line from '../Images/line.svg';



export default function Company() {
  return (
    <>
    <div className="our_company pb-xs-80 pb-100 overflow-hidden">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="ourcompmedia">
                    <img src={oc1} alt="my company media" className="img-fluid"/>
                    <div className="exp overflow-hidden bg-red mt-20 mt-sm-10 mt-xs-10 text-center" >
                        <div className="year mb-5 color-white">
                            <h3 className="counter">25+</h3>
                        </div>
                        <h5>Years Experience</h5>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="mediaimg">
                    <img src={oc2} alt='' className="img-fluid" />
                    <div className="hrbar"></div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="compcontent my-5">
                <span className="sub-title fw-500 color_red text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block"><img src={line} className="img-fluid mx-2" alt="line"/> Know our Company</span>
                    <h2 className="title color-pd my-3" >Our Company Provide High Quality Idea</h2>
                    
                    <div className="disc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="feedbk d-flex flex-column flex-sm-row">
                    <div className="fd1 mx-3 text-center">
                        <div className="headers">
                            <h3 className="color_red fw-400 ">Success Project</h3>
                        </div>
                        <div className="fdbody my-3">
                            <div className="number mb-10 mb-xs-5 color-pd fw-600"> <h3 className="counter">+95%</h3>
                            </div>
                            <div className="">
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit sed do.</p>
                            </div>
                            <div className="stars">
                                <ul>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="fd1 text-center">
                        <div className="headers">
                            <h3 className="color_red fw-600 ">Customer Review</h3>
                        </div>
                        <div className="fdbody my-3">
                            <div className="number mb-10 mb-xs-5 color-pd fw-600"><h3 className="counter">+4.7</h3>
                            </div>
                            <div className="">
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit sed do.</p>
                            </div>
                            <div className="stars" >
                                <ul>
                                <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                    <li><img src={star} alt='' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    </>
  )
}

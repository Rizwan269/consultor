import React from 'react';
import line from '../Images/line.svg';
import './Members.css';
import t1 from '../Images/t1.jpg';
import t10 from '../Images/t10.jpg';
import t11 from '../Images/t11.jpg';
import t12 from '../Images/t12.jpg';

export default function Members() {
  return (
   <>
   <div className=" bg-dark_red pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden" >
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="our-team__content mb-60 mb-md-50 mb-sm-40 mb-xs-30 text-center">
                    <span className="sub-title fw-500 color_red text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block"><img src={line} className="img-fluid mx-2" alt="line"/> Our Member</span>
                    <h2 className="title color-pd my-3" >Professional Team</h2>
                </div>
            </div>
        </div>

        <div className="row mb-minus-30" >
            <div className="col-xxl-3 col-lg-4 col-md-6" >
                <div className="titem  text-center mb-30 d-block overflow-hidden" >
                    <div className="media">
                        <img src={t10} alt="" />
                     </div>
                

                <div className="ttext d-flex align-items-center justify-content-center" >
                        <div className="left">
                            <h5 className="title color-white">Stephen Larry</h5>
                            <span className="position color-white font-la fw-500">Product Manager</span>
                        </div>
                </div>
                <div className="details" >
                    <a href="/" className="text-uppercase text-decoration-none" >View Details</a>
                </div>
            </div>
            
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6" >
                <div className="titem  text-center mb-30 d-block overflow-hidden" >
                    <div className="media">
                        <img src={t11} className="img-fluid" alt=""/>
                     </div>
                

                <div className="ttext d-flex align-items-center justify-content-center" >
                        <div className="left">
                            <h5 className="title color-white">Nusrat jahan</h5>
                            <span className="position color-white font-la fw-500">Assistent Manager, Finance</span>
                        </div>
                </div>
                <div className="details">
                    <a href="/" className="text-uppercase text-decoration-none" >View Details</a>
                </div>
            </div>
            
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="titem  text-center mb-30 d-block overflow-hidden" >
                    <div className="media">
                        <img src={t1} className="img-fluid" alt=""/>
                     </div>
                

                <div className="ttext d-flex align-items-center justify-content-center" >
                        <div className="left">
                            <h5 className="title color-white">Richard Paul</h5>
                            <span className="position color-white font-la fw-500">Business Consulting</span>
                        </div>
                </div>
                <div className="details" >
                    <a href="/" className="text-uppercase text-decoration-none">View Details</a>
                </div>
            </div>
            
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6" >
                <div className="titem  text-center mb-30 d-block overflow-hidden" >
                    <div className="media">
                        <img src={t12} className="img-fluid" alt=""/>
                     </div>
                

                <div className="ttext d-flex align-items-center justify-content-center" >
                        <div className="left">
                            <h5 className="title color-white">Elizabeth Linda</h5>
                            <span className="position color-white font-la fw-500">Consulter Agency</span>
                        </div>
                </div>
                <div className="details" >
                    <a href="/" className="text-uppercase text-decoration-none" >View Details</a>
                </div>
            </div>
            
            </div>
        </div>           
        </div>
    </div>
   </>
  )
}

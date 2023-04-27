import React from 'react';
import line from '../Images/line.svg';
import bus from '../Images/buss.png';



export default function Solution() {
  return (
    <>
    <div className="sol pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
<div className="container " >
       <div className="row ">
        <div className="col-lg-6">
            <div className="content-home ">
                <div className="home_text my-5">
                    <span className="my-2 sub-text d-block fw-500 color-red text-uppercase mb-sm-10 mb-xs-5 mb-15">
                        <img src={line} alt='' className="img-fluid mr-10"/>  Our solutions
                    </span>
                    <h2 className="txt color-pd ">Developing Solutions For The Future</h2>
                </div>
            </div>
        </div>
    
        <div className="col-lg-6">
            <div className="content-home mt-md-25 mt-sm-20 mt-xs-20">
                <div className="discription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                         do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip</p>
                </div>
                <a href="/" className="butn btn-sm btn-red mt-30 mt-sm-25 mt-xs-20">
                    View All Services <i className="far fa-chevron-double-right"></i></a>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-12">
            <div className="wrapper d-flex flex-column flex-sm-row justify-content-between mt-60 mt-md-50 mt-sm-40 mt-xs-30" >
                <div className="w1" >
                    <div className="icons mb-30 mb-lg-20 mb-md-10 mb-xs-5 ">
                    <img src={bus} alt=""  />
                    <h6 className="disk color-pd fw-600 mb-15 mb-xs-10" >Business Consulting</h6>
                    <div className="discription mb-20 mb-sm-15 mb-xs-10">
                    <p>Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut
                        fugit sed quia consequuntu.</p>
                    </div>
                    <a href="/" className=" battn color_red d-block" >Read More </a>
                    <i className="far fa-chevron-double-right"></i>
                </div>
                </div>
                <div className="w2" >
                    <div className="icons mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                    <img src={bus} alt=""  />
                    </div>
                    <h6 className="disk color-pd fw-600 mb-15 mb-xs-10" >Lawyer Consulting</h6>
                    <div className="discription mb-20 mb-sm-15 mb-xs-10">
                    <p>Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut
                        fugit sed quia consequuntu.</p>
                    </div>
                    <a href="/" className="battn color_red d-block" >Read More </a>
                </div>
                <div className="w3">
                    <div className="icons mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                    <img src={bus} alt=""  />
                    </div>
                    <h6 className="disk color-pd fw-600 mb-15 mb-xs-10" >Financial Consulting</h6>
                    <div className="discription mb-20 mb-sm-15 mb-xs-10">
                    <p>Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut
                        fugit sed quia consequuntu.</p>
                    </div>
                    <a href="/" className="battn color_red d-block" >Read More </a>
                </div>
                <div className="w4" >
                    <div className="icons mb-30 mb-lg-20 mb-md-10 mb-xs-5 color-red">
                    <img src={bus} alt=""  />
                    </div>
                    <h6 className="disk color-pd fw-600 mb-15 mb-xs-10" >IT Management</h6>
                    <div className="discription mb-20 mb-sm-15 mb-xs-10">
                    <p>Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut
                        fugit sed quia consequuntu.</p>
                    </div>
                    <a href="/" className=" battn color_red d-block" >Read More </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

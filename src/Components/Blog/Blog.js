import React from 'react';
import line from '../Images/line.svg';
import b15 from '../Images/b15.jpg';
import b16 from '../Images/b16.jpg';
import b17 from '../Images/b17.jpg';
import './Blog.css';

export default function Blog() {
  return (
    <>
    <div className="blog pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden" >
    <div className="container">
        <div className="row" >
            <div className="col-12">
                <div className="bncontent mt-5" >
                    <span className=" fw-500 color_red text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block"><img src={line} className="img-fluid mx-2" alt=""/>  Blog & News</span>
                        <h2 className="my-3 color-pd" >Consulter Latest Blog & News</h2>
                </div>
            </div>
        </div>
        <div className="bn mt-60 mt-sm-50 mt-xs-40">
            <div className="row" >
                <div className="col-xl-4 col-md-6 col-12">
                    <div className="bnitem">
                        <div className="bimg mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                            <div className="media overflow-hidden">
                                <img src={b15} className="img-fluid" alt=""/>
                            </div>
                            <div className="date">
                                <p>16 March 2023</p>
                            </div>
                        </div>
                        <div className="bcontent pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                            <div className="pauthor mb-3 color_red">Business, Consulting</div>
                            <h4 className="color-pd">Consulted admitting wooded is power acuteness</h4>
                            <div className="sbtnn">
                                <a href="/" className="butn">Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                    <div className="bnitem">
                        <div className="bimg mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                            <div className="media overflow-hidden">
                                <img src={b16} className="img-fluid" alt=""/>
                            </div>
                            <div className="date">
                            <p>16 March 2023</p>
                            </div>
                        </div>
                        <div className="bcontent pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                            <div className="pauthor mb-3 color_red">Business, Consulting</div>
                            <h4 className="color-pd">Consulted admitting wooded is power acuteness</h4>
                            <div className="sbtnn">
                                <a href="/" className="butn">Read More </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-12">
                    <div className="bnitem">
                        <div className="bimg mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                            <div className="media overflow-hidden">
                                <img src={b17} className="img-fluid" alt=""/>
                            </div>
                            <div >
                            <p className="date">16 March 2023</p>
                            </div>
                        </div>
                        <div className="bcontent pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                            <div className="pauthor mb-3 color_red">Business, Consulting</div>
                            <h4 className="color-pd">Consulted admitting wooded is power acuteness</h4>
                            <div className="sbtnn">
                                <a href="/" className="butn">Read More </a>
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

import React from 'react';
import line from '../Images/line.svg';
import './Portfolio.css';
import h1 from '../Images/h1.png';
import h2 from '../Images/h2.png';
import h3 from '../Images/h3.png';

export default function Portfolio() {
  return (
   <>
   <div className="portfolio pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden">
<div className="container">
    <div className="row align-items-center">
        <div className="col-12">
            <div className="portfcontent text-center mb-60 mb-sm-50 mb-xs-40" >
                <span className="color_red text-uppercase mb-sm-10 mb-xs-5 mb-15 d-block color-red">
                    <img src={line} className="img-fluid mr-10" alt=""/> Our Portfolio
                </span>
                <h2 className="color-pd my-4" >Our Consulting Case Study</h2>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-4 col-md-6 col-12" >
            <div className="opitem">
                <div className="fimg">
                    <div className="pmedia overflow-hidden">
                        <img src={h1} alt='' className="img-fluid my-2"/>
                    </div>
                </div>
                <div className="ptxt d-flex flex-row" >
                    <div className="pleft">
                        <div className=" p-author mb-2 mb-xs-5 text-uppercase">
                            <a href="/" className="color_red text-decoration-none" >Business, Finance</a>
                        </div>
                        <h5 className="color-pd mb-15  mb-xs-10" ><a href="/" className="color-pd text-decoration-none" >Business & Strategy</a></h5>
                        <div className="disk">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                        </div>
                    </div>
                    <div className="sharebtn">
                        <a href="/" className="btttn color-pd">View Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12" >
            <div className="opitem">
                <div className="fimg">
                    <div className="pmedia overflow-hidden">
                        <img src={h2} alt='' className="img-fluid my-2"/>
                    </div>
                </div>
                <div className="ptxt d-flex flex-row" >
                    <div className="pleft">
                        <div className=" p-author mb-2 mb-xs-5 text-uppercase">
                            <a href="/" className="color_red text-decoration-none" >Financial Solution</a>
                        </div>
                        <h5 className="color-pd mb-15  mb-xs-10"><a href="/" className="color-pd text-decoration-none" >Financial Reporting</a></h5>
                        <div className="disk">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                        </div>
                    </div>
                    <div className="sharebtn">
                        <a href="/" className="btttn color-pd">View Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-md-6 col-12" >
            <div className="opitem">
                <div className="fimg">
                    <div className="pmedia overflow-hidden">
                        <img src={h3} alt='' className="img-fluid my-2"/>
                    </div>
                </div>
                <div className="ptxt d-flex flex-row" >
                    <div className="pleft">
                        <div className=" p-author mb-2 mb-xs-5 text-uppercase">
                            <a href="/" className="color_red text-decoration-none" >Business Consulting</a>
                        </div>
                        <h5 className="color-pd mb-15  mb-xs-10"><a href="/" className="color-pd text-decoration-none">Business Consulting</a></h5>
                        <div className="disk">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                        </div>
                    </div>
                    <div className="sharebtn">
                        <a href="/" className="btttn color-pd">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row my-5">
        <div className="col-12">
            <div className="text-center mt-50 mt-md-40 mt-sm-35 mt-xs-30">
                <a href="/"className="butn btnborder">View all Projects</a>
            </div>
        </div>
    </div>
</div>
</div>
   </>
  )
}

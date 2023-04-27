import React from "react";
import './Work.css';
import line from '../Images/line.svg';
import aro from '../Images/aro.png';

export default function Work() {
  return (
    <>
      <div className="work pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pcontent mb-60 mb-sm-40 mb-xs-30 text-center">
                <span className="d-block fw-500 color-red text-uppercase mb-sm-10 mb-xs-5 mb-15" >
                  <img src={line} alt="" className="mx-2 img-fluid " />
                  Our Work Process
                </span>
                <h2 className="color-pd my-3">How Our Services Work</h2>
              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-xl-3 col-lg-4 col-sm-6 no_bullet">
              <div className="wpro mb-30 text-center">
                <div className="iconw d-flex">
                  <div className="iconss">
                    <img src={aro} alt="" />
                  </div>
                  <button className="buttn color-pd"> Step-1</button>
                </div>
                <div className="textw">
                  <h6 className="twh color-pd mb-15 mb-sm-10 mb-xs-5">
                    Research Your Problem
                  </h6>
                  <div className="disk">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 no_bullet">
              <div className="wpro mb-30 text-center">
                <div className="iconw d-flex">
                  <div className="iconss">
                  <img src={aro} alt="" />
                  </div>
                  <button className=" buttn color-pd"> Step-2</button>
                </div>
                <div className="textw">
                  <h6 className=" twh color-pd mb-15 mb-sm-10 mb-xs-5">
                    Identifying Problem
                  </h6>
                  <div className="disk">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 no_bullet">
              <div className="wpro mb-30 text-center">
                <div className="iconw d-flex">
                  <div className="iconss">
                  <img src={aro} alt="" />
                  </div>
                  <button className=" buttn color-pd"> Step-3</button>
                </div>
                <div className="textw">
                  <h6 className=" twh color-pd mb-15 mb-sm-10 mb-xs-5">
                    Solution Your Problem
                  </h6>
                  <div className="disk">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 no_bullet">
              <div className="wpro mb-30 text-center">
                <div className="iconw d-flex">
                  <div className="iconss">
                  <img src={aro} alt="" />
                  </div>
                  <button className=" buttn color-pd"> Step-4</button>
                </div>
                <div className="textw">
                  <h6 className=" twh color-pd mb-15 mb-sm-10 mb-xs-5">
                    Success Your Problem
                  </h6>
                  <div className="disk">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

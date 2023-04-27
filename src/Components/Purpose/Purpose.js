import React from 'react';
import './Purpose.css';
import growth from '../Images/growth.svg';
import planning from '../Images/planning.svg';
import international from '../Images/international.svg';

export default function Purpose() {
  return (
   <>
   <div className="purpose pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-120 overflow-hidden" >
    <div className="container-fluid">
        <div className="row mb-minus-30">
            <div className="col-xl-4 col-md-6">
                    <div className="p1 d-flex mb-30" >
                        <div className="icon">
                            <img src={growth} alt=""/>
                          
                        </div>

                        <div className="text">
                            <h4 className="title color-pd mb-10 mb-xs-5">Business Strategy</h4>
                            <div className="description font-la">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6">
                    <div className="p1 d-flex mb-30" >
                        <div className="icon">
                            <img src={planning} alt=""/>
                            
                        </div>

                        <div className="text">
                            <h4 className="title color-pd mb-10 mb-xs-5">Financial Planning</h4>
                            <div className="description font-la">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6">
                    <div className="p1 d-flex mb-30" >
                        <div className="icon">
                            <img src={international} alt=""/>
                           
                        </div>

                        <div className="text">
                            <h4 className="title color-pd mb-10 mb-xs-5">International Business</h4>

                            <div className="description font-la">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
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

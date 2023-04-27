import React from 'react'
import './Video.css';
import img1 from '../Images/it.png';

export default function Video() {
  return (
<>
<div className="container text-center vid text-white pb-xs-80 pt-xs-80 pt-sm-100 pb-sm-100 pt-md-100 pb-md-100 pt-120 pb-130 overflow-hidden">
<div className="container">
    <div className="row d-flex">
        <div className="col-sm-9">
            <div className="vid_content my-5">
                <h2 className="head">Good Business Planning Ensures Success.</h2>
                <div className="disc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam.</p>
                </div>
                <button className="butn p-10">View All Services </button>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="pvid">
              
               <img src={img1} className='img-fluid' alt="" /> 
            </div>
        </div>
    </div>
</div>

</div>
</>
  )
}

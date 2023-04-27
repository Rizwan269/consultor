import React from 'react';
import './Home.css';
import img1 from '../Images/banner-home.png';

export default function Home() {
  return (
   <>
   <div className="bhome overflow-hidden pt-lg-100 pt-md-90 pt-sm-80 pt-xs-70 mt-50" >
<div className="container">
    <div className="row row align-items-center">
        <div className="col-xl-6">
            <div className="bhcontent pb-lg-60 pb-md-50 pb-sm-45 pb-xs-40">
                <h6 className="text-white hbtitle mb-20 mb-sm-15 mb-xs-10 d-inline-block" >
                    Welcome To <span className="color_red">Consulter</span> Consultancy</h6>
                    <h1 className="text-white fw-bold mb-20 mb-sm-15 mb-xs-10" >Build Up Your Business Strategy</h1>
                    <div className=" text-white hbdesk mb-45 mb-md-30 mb-sm-25 mb-xs-20" >
                        
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore.</p>
                 <div className="buttons d-flex flex-wrap" >
                        <a href="/" className="butn mx-2">Find Consultant </a>
                        <a href="/" className="butn mx-3" >Read More  </a>
                </div>
                    </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="bhmedia">
                
                <img src={img1} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>
</div>
</div>
   </>
  )
}

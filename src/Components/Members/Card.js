import React from 'react'

function Card(props) {
  return (
    <>
    {props.details.map((value, index)=>(
    <div className="col-xxl-3 col-lg-4 col-md-6" key={index} >
                <div className="titem  text-center mb-30 d-block overflow-hidden" >
                    <div className="media">
                        <img src={value.img} alt="" />
                     </div>
                

                <div className="ttext d-flex align-items-center justify-content-center" >
                        <div className="left">
                            <h5 className="title color-white">{value.title}</h5>
                            <span className="position color-white font-la fw-500">{value.designation}</span>
                        </div>
                </div>
                <div className="details" >
                    <a href="/" className="text-uppercase text-decoration-none" >{value.link}</a>
                </div>
            </div>
            
            </div>
            ))};
    </>
  )
}

export default Card

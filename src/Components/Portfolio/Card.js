import React from 'react'

function Card(props) {
  return (
   <>
{props.details.map((value, index)=>(
   <div className="col-xl-4 col-md-6 col-12" key={index} >
            <div className="opitem">
                <div className="fimg">
                    <div className="pmedia overflow-hidden">
                        <img src={value.img} alt='' className="img-fluid my-2"/>
                    </div>
                </div>
                <div className="ptxt d-flex flex-row" >
                    <div className="pleft">
                        <div className=" p-author mb-2 mb-xs-5 text-uppercase">
                            <a href="/" className="color_red text-decoration-none" >{value.catogory}</a>
                        </div>
                        <h5 className="color-pd mb-15  mb-xs-10" ><a href="/" className="color-pd text-decoration-none" >{value.title}</a></h5>
                        <div className="disk">
                            <p>{value.description}</p>
                        </div>
                    </div>
                    <div className="sharebtn">
                        <a href="/" className="btttn color-pd">{value.link}</a>
                    </div>
                </div>
            </div>
        </div>
        ))};
   </>
  )
}

export default Card

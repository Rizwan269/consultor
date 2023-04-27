import React from 'react'

function Card(props) {
  return (
    <>
    {props.details.map((value, index)=>(
     <div className="col-xl-4 col-md-6 col-12" key={index}>
                    <div className="bnitem">
                        <div className="bimg mb-xs-30 mb-sm-30 mb-md-35 mb-lg-40 mb-50">
                            <div className="media overflow-hidden">
                                <img src={value.img} className="img-fluid" alt=""/>
                            </div>
                            <div className="date">
                                <p>{value.date}</p>
                            </div>
                        </div>
                        <div className="bcontent pr-sm-25 pr-xs-15 pl-xs-15 pl-sm-25 pr-xs-15 pr-30 pb-30 pl-30">
                            <div className="pauthor mb-3 color_red">{value.category}</div>
                            <h4 className="color-pd">{value.title}</h4>
                            <div className="sbtnn">
                                <a href="/" className="butn">{value.link}</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))};
    </>
  )
}

export default Card

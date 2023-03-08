import React from "react";
import {NavLink} from "react-router-dom";
import web from "../components/picks/img3.png"
const Card=(props)=>{
    return(
        <>
                   <div className="col-md-3 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">We Provide Our Service in 5+ States of India <br/> Thank you</p>
                                <NavLink to ="/home" className="btn btn-primary">visit</NavLink>

                            </div>

                        </div>

                    </div>

                  
        </>
    )
}
export default Card;
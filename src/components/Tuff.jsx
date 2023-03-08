import React from "react";
import {NavLink} from "react-router-dom";
import "./Products.css"
const Tuff=(props)=>{
    return(
        <>
                   <div className="col-md-3 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <NavLink to ="/home" className="btn btn-primary">Pooja Roofing co.</NavLink>

                            </div>

                        </div>

                    </div>

                  
        </>
    )
}
export default Tuff;
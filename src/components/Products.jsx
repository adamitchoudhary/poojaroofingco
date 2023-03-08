import React from "react";
import TuffSubData from "./TuffSubData";
import "./Products.css";
import Tuff from "./Tuff";
const Products=()=>{
    return(
        <>
        <div className="my-6">
            <h1 className="text-center"> COLOUR TUFF+ ACCESSORIES</h1>


        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4">
                        {
                            TuffSubData.map((Val, ind)=>{
                                return<Tuff
                                imgsrc={Val.imgsrc}  
                                title={Val.title}
                                />
                            })
                        }

                        </div>

                    </div>

                </div>

            </div>
    
        </>
    )
}
export default Products;
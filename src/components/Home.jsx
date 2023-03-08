import React from "react";
import "./Home.css"
import img2 from "../components/picks/c1.jpg";
import img3 from "../components/picks/c2.jpg";
import img4 from "../components/picks/b4.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home=()=>{
    return(
        <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-8 pt-5 pt-lg-0 order-lg-1">
                        <h1>Grow Your Business With <br/> <strong className="brand-name">  Pooja Roofing Co.(MFG)</strong></h1>
                          <h2 className="my-3">Manufacturer Of Colour Coated Roofing Sheets</h2>
                    <div className="mt-3">
                        <a href="/services" className="btn-get-started">
                            More Details
                        </a>


                    </div>
                    </div>
                   
</div>
                </div>

            </div>

        </div>
        


    </section>
    <Carousel className="main-slide">
        
        
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
            </Carousel>

            
     </>
    );
};
export default Home;

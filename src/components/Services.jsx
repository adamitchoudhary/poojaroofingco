import React from "react";
import Card from "./Card";
import "./Services.css";
import CardSubData from "./CardSubData";
const Services=()=>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>


        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            CardSubData.map((Val, ind)=>{
                                return<Card
                                imgsrc={Val.imgsrc}
                                title={Val.title}
                                />
                            })
                        }

                        </div>

                    </div>

                </div>

            </div>
            <div className="col-10 mx-auto" >
                <h1 className="about-pooja">ABOUT POOJA ROOOFING CO.(MFG)</h1>
                <p className="about-data">Pooja Roofing Co.(MFG) has a legacy of iron steel based structural as well as infra- structure products. At PRC we are not only engaging in mere supply of a product but we believe in building trust for the longer term.That is what makes us say PRC-Growing with You.
                </p>
                  <h1 className="about-pooja">ABOUT COLORTUFF+</h1>
                  <p className="about-data">PRC Profile is the latest step in our effort to expand our product portfolio, which caters to various roofing needs. We introduce to you Colourtuff+ a brand which fosters our efforts in supplying quality roofing products. Colourtuff+ Signifies the vividness of products available and the strength they provide to your structures. Color-Coated steel not only adds strength to your structure but also enhances their aesthetics.Colourtuff+ steets are cost-ef- fective and also provide the strength of steel with least maintenance and easy handling. Our understanding and association with large Manufacturers enables us to source quality products and deliver you value for your money. At PRC, we use primary and high quality steel coils sourced from reputed Manufacturers. With hundreds of tones stock level of standard colours at premise, we can service large orders in minimum possible lead time.
                    </p>
                    <h1 className="about-pooja">COLOURTUFF+ PROFILES</h1>
                    <p className="about-data">Colourtuff+ profiles are made from steel coils sourced from reputed Manufacturers who are industry compliant and adhere quality control policies complemented by our ware- house checks as well. Coils come in standard width of 1220 mm while a wider option of 1450mm is also offered. Total Coating thickness ranging 0.30-0.60mm is available with us

ANTI-CAPILLARY GROOVE/ INTERLOCK- FOR A LEAK PROOF ROOF. AVOIDS WATER SEEPAGE.</p>

            </div>
    
        </>
    )
}
export default Services;
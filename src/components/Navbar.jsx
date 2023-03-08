import { Component } from "react";
import "./Navbar.css";
import img1 from "../components/picks/img2.png";
class Navbar extends Component{
    state={clicked:false};
    handleClick=() =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
           <div className="logo">
            <a href="/products"> <img src={img1} alt="logo" /></a>

           </div>
            <div>
                <ul id="navbar"
                className={this.state.clicked ? "#navbar active": "#navbar"}>
                <li> <a className="active" 
                 href="/">Home</a></li>
                <li> <a href="/services">Services</a></li>
                <li> <a href="/products">Products</a></li>
                <li> <a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                
                <i id="bar"
                    className={this.state.clicked ? "fas fa-times": "fas fa-bars"}
                ></i>

            </div>
            </nav>
            </>
    )
}
}
export default Navbar;
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App =() => {
    return(
        <>
        
        <Navbar/>
       
        
        <Switch> 
            <Route  exact path="/" component ={Home} />
            <Route  exact path="/services" component ={Services} />
            <Route exact path="/contact" component ={Contact}/>
            <Route exact path="/products" component={Products}></Route>
            <Redirect to ="/" />
               
        </Switch>
        <Footer/>
        
        </>
    )
}
export default App;

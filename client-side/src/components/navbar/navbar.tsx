import React from 'react';
import "./navbar.scss";
import {navBarProps} from "../../types/proptype";


 const Navbar = ({}: navBarProps) => {
    return (
        <div className="home-navbar-container">
           <h1>Shenzhen Houde Academy</h1> 
           <div className="navbar-section">
               <h3>DISCOVER</h3>
               <h3 className="section-active">IMPACT BOARD</h3>
               <h3>LEARNING PODS</h3>
           </div>
        </div>
    )
}

export default Navbar ;
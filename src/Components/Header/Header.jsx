import React from "react";
import appLogo from "../../Assets/images/Logo.jpg";
import  "./Header.css"
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="App-header">
      <div><Link to='/' >
      <img
        src={appLogo}
         style={{ width: "100%", height: "50px" }}
        className="App-logo"
        alt="Logo"
        
      /> </Link>
      </div>
      <div className="mainnav">
          <Link to='/' > <button className="headnav">Home</button> </Link>
          <Link to='/aboutus' >  <button className="headnav">about</button> </Link>
          <Link to='/trackrecord'>  <button className="headnav">TrackRecord</button> </Link>
          <Link to='/smecorner' >  <button className="headnav">smecorner</button> </Link>        
      </div>
      <div className="head-right">
        <div className="loginbutton">Login</div>
        <div className="stocksbutton"> Stocks to buy</div>
        
        
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import appLogo from "../../Assets/images/Logo.jpg";
import  "./Header.css"
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="App-header">
      <div>
      <img
        src={appLogo}
         style={{ width: "100%", height: "50px" }}
        className="App-logo"
        alt="Logo"
      />
      </div>
      <div>
          <Link to='/' ><button>Home</button> </Link>
          <Link to='/aboutus' >  <button>about</button> </Link>
          <Link to='/trackrecord' >  <button>TrackRecord</button> </Link>
          <Link to='/smecorner' >  <button>smecorner</button> </Link>        
      </div>
      <div className="head-right">
        <div className="loginbutton">Login</div>
        <div className="stocksbutton"> Stocks to buy</div>
        
        
      </div>
    </div>
  );
}

export default Header;

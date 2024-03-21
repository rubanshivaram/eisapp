import React from "react";
import appLogo from "../../Assets/images/Logo.jpg";
import  "./Header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App-header">
      <img
        src={appLogo}
         style={{ width: "25%", height: "50px" }}
        className="App-logo"
        alt="Logo"
      />
      <div>
          <Link to='/' ><button>Home</button> </Link>
          <Link to='/aboutus' >  <button>about</button> </Link>
          <Link to='/trackrecord' >  <button>TrackRecord</button> </Link>
          <Link to='/smecorner' >  <button>smecorner</button> </Link>        
      </div>
      <div>
        <button>Login</button>
        <button> Stocks to buy</button>
      </div>
    </div>
  );
}

export default Header;

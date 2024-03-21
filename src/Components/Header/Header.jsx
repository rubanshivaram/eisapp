import React from "react";
import appLogo from "../../Assets/images/Logo.jpg";

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
        <button>Home</button>
        <button>about</button>
        <button>testimonials</button>
        <button>contact</button>
      </div>
      <div>
        <button>Login</button>
        <button> Stocks to buy</button>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import logo from "../../Assets/images/Logo.jpg";
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer' >
   <div className='footr1'>
    <div>
      <img  src={logo}
      alt='logo'
      style={{ width: "100%", height: "50px" }}  />
    </div>
    
    <div>
          <Link to='/' ><button>Home</button> </Link>
          <Link to='/aboutus' >  <button>about</button> </Link>
          <Link to='/trackrecord' >  <button>TrackRecord</button> </Link>
          <Link to='/smecorner' >  <button>smecorner</button> </Link>        
    </div>
    
    <div>
        <button>facebook</button>
        <button>linkadien</button>
    </div>

    </div>

    </div>
  )
}

export default Footer

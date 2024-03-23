import React from "react";
import logo from "../../Assets/images/Logo.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  facebookicon,
  youtubeicon,
  instaIcon,
  linkedin,
} from "../../Assets/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footr1">
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100%", height: "50px" }}
          />
        </div>

        <div>
          <Link to="/">
            <button className="footnav">Terms and conditions</button>{" "}
          </Link>
          <Link to="/aboutus">
            {" "}
            <button className="footnav">Disclosures</button>{" "}
          </Link>
          <Link to="/trackrecord">
            {" "}
            <button className="footnav">Investor Charter</button>{" "}
          </Link>
          <Link to="/smecorner">
            {" "}
            <button className="footnav">Complaints</button>{" "}
          </Link>
          <Link to="/smecorner">
            {" "}
            <button className="footnav">Privacy Policy</button>{" "}
          </Link>
        </div>

        <div className="footr1">
          <div className="mx-2">
            <a href="https://www.facebook.com/p/Vista-editz-100064031984655/">
              {facebookicon}
            </a>
          </div>
          <div className="mx-2">
            <a href="https://www.youtube.com/@vistaedits8287">{youtubeicon}</a>
          </div>
          <div className="mx-2">
            <a href="https://www.instagram.com/vista_editz/">{instaIcon}</a>
          </div>
          <div className="mx-2">
            <a href="https://www.linkedin.com/in/aszen-technologies/">
              {linkedin}
            </a>
          </div>
        </div>
      </div>
      <div >
        <p >
        <b>Disclaimer :</b> There is no guarantee of profits or no exceptions from losses. 
        The investment advice provided is solely the personal views of the research team. 
        Ease Investments Solution will not accept any liability for loss or damage as a result of reliance on the information contained within this website including data, quotes, charts and buy/sell signals. 
        Please be fully informed regarding the risks and costs associated with trading the financial markets, it is one of the riskiest investment forms possible.
        Therefore, Ease Investments Solution doesn’t bear any responsibility for any trading losses you might incur as a result of using this data.
        </p>
      </div>
    </div>
  );
}

export default Footer;

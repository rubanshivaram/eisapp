import React from 'react'
import './Footer.css'
import appLogo from "../../Assets/images/Logo.jpg";

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer1'>
          <div className='footer_head1'>
            <img src={appLogo } className='footer-img'/>
          </div>
          <div className='footer_head2'>
            <li>Terms & Conditions</li>
            <li>Disclosures</li>
            <li>Investor Charter</li>
            <li>Complaints</li>
            <li>Privacy Policy</li>

          </div>
          <div className='footer_head3'>
            <li><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/facebook-64.png'/></li>
            <li><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-64.png'/></li>
            <li><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_linkedin-64.png'/></li>
            <li><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-64.png'/></li>
            <li><img src='https://cdn2.iconfinder.com/data/icons/social-media-2420/512/Telegram-64.png'/></li>
          </div>
        </div>
        <div className='footer2'>
          <p>Kamayakya Wealth Management Pvt. Ltd makes no warranties or representations, express or implied, on products and services offered through the platform. It accepts no liability for any damages or losses, however, caused in connection with the use of, or on the reliance of its research and recommendation services. Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, goal, time frame, risk and reward balance and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs. Performance and returns of any investment portfolio can neither be predicted nor guaranteed.</p>
        </div>
        <div className='footer3'>
          <div className='footer-end1'>
            <img src='https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-256.png'/>
            <p>:contact@kamayakya.com</p>
          </div>
          <div className='footer-end2'>
            <img src='https://cdn4.iconfinder.com/data/icons/communication-163/32/phone-64.png'/>
            <p>: (+91)9175939641</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer

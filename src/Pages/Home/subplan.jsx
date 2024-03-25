import './subplan.css'
import appLogo from "../../Assets/images/Logo.jpg";

function Subplan(){
    return(
        <>
        <h1 className='subplan1'>Subscription Plans</h1>
        <h4 className='subplan2'>Unravel our offerings - Elevate your wealth journey with KamayaKya VIP!</h4>
        <div className='subplan_card'>
            <div className='subplan_card1'>
                <img src={appLogo} className='subplan_img'/>
                <div className='subplan_basic'>
                    <li><h4><img src='https://cdn3.iconfinder.com/data/icons/circle-filled-app-ui-set/100/TWalsh__tick2-64.png'/>3 - system-generated stock picks accessible lifetime (NSE + BSE)</h4></li>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/user-interface-2326/24/x-256.png'/>No SME stock picks</li>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/user-interface-2326/24/x-256.png'/>No WhatsApp & Email updates</li>
                </div>
                <button className='subplan_login'>Login</button>
            </div>
            <div className='subplan_card2'>
                <img src={appLogo} className='subplan_imgcard2'/>
                <div className='subplan_vip'>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/circle-filled-app-ui-set/100/TWalsh__tick2-64.png'/><span>2-4 individual stock picks every month</span></li>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/circle-filled-app-ui-set/100/TWalsh__tick2-64.png'/><span>NSE + BSE + SME stock picks</span></li>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/circle-filled-app-ui-set/100/TWalsh__tick2-64.png'/><span>WhatsApp & Email updates</span></li>
                </div>
                <button>Subscribe Now</button>
                <h3>for ₹15,000/year</h3>
                <p>inclusive of taxes</p>
            </div>
            <div className='subplan_card3'>
            <img src={appLogo} className='subplan_img'/>
                <div className='subplan_small'>
                    <li><h4><img src='https://cdn3.iconfinder.com/data/icons/circle-filled-app-ui-set/100/TWalsh__tick2-64.png'/>3 - system-generated stock picks accessible lifetime (NSE + BSE)</h4></li>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/user-interface-2326/24/x-256.png'/>No SME stock picks</li>
                    <li><img src='https://cdn3.iconfinder.com/data/icons/user-interface-2326/24/x-256.png'/>No WhatsApp & Email updates</li>
                </div>
                <button className='subplan_login'>Login</button>
            </div>
            
        </div>
        </>
    )
}
export default Subplan;
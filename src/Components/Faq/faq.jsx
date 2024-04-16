import React from 'react';
import  {useState} from 'react'
import './faq.css'


function Faq(){
    const [selected, setSelected]= useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)

    }
    return(
        <div className='wrapper'>
            <h1>FAQs</h1>
            <h4>Everything you need to know about the product and billing</h4>
            {/* <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/>
            <div className='faq_content'>
                <b>How to start with KamayaKya?</b>
                <img src='https://cdn4.iconfinder.com/data/icons/essential-part-1/32/3-Arrow_down-64.png'/>
            </div><br/> */}

            

            <div className='according'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'
                    }>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
            <hr/>
            <div className='faq_question'>
                <p>Still got a question?</p>
                <button>Send an Email</button>
            </div>

        </div>
    )
}
const data = [
    {
        question: 'How to start with KamayaKya?',
        answer : 'Once youve logged in, voila! Youre instantly rewarded with three FREE stock recommendations. Want more perks and access to the grand buffet of features? No problem! For an investment of just Rs 15,000 per annum (taxes included), you can ascend to the ranks of our elite VIP+ members. This golden ticket unlocks a treasure trove of features and stocks. Just think of it as the premium lounge access of the investment world! Who doesnt love a bit of VIP treatment, right?'
    },
    {
        question: 'Are there any fees or charges involved?',
        answer : 'Once youve logged in, voila! Youre instantly rewarded with three FREE stock recommendations. Want more perks and access to the grand buffet of features? No problem! For an investment of just Rs 15,000 per annum (taxes included), you can ascend to the ranks of our elite VIP+ members. This golden ticket unlocks a treasure trove of features and stocks. Just think of it as the premium lounge access of the investment world! Who doesnt love a bit of VIP treatment, right?'
    },
    {
        question: 'Why does KamayaKya focus on SMEs, Micro-Caps, and Small-Caps?',
        answer : 'Picture this, you stumble upon a hidden gem, nurture it with care, and voila, youre rich! Thats what SME, Micro-Cap and Small-cap companies can be - undiscovered treasures! Companies like Reliance and Infosys started as smallcaps and rose to become the titans they are today. Were here to help you spot these future multibaggers and accelerate your wealth-building journey.'
    },
    {
        question: 'What is KamayaKya  investment strategy?',
        answer : 'Our stock selection process is as meticulous as a master watchmaker assembling a timepiece. Rooted in a philosophy that considers a myriad of factors – cash flow, growth, promoter holdings, management quality, and valuations  we approach stock picking with due diligence. We keep an eagles eye on potential triggers like capacity expansion, debt reduction, change in management, and favourable government policies. Our motto? Find those hidden gems, backed with solid data and research, minimize the noise, and expertly navigate the risk landscape for you!'
    }
    ,
    {
        question: 'Whos behind these Stock Ideas?',
        answer : 'We have an in-house squadron of financial wizards and engineering gurus that bring you these insights. Boasting a combined experience of 25 years, our top 1% talent in finance and engineering works tirelessly to deliver the best to you.'
    },
    {
        question: 'What exactly are “Stocks to Buy”?',
        answer : '"Stocks to Buy" are your treasure maps! Theyre stock recommendations, carefully curated by our equity research team. You can follow these maps to make your investments with your broker. Well keep you in the loop so that you can exit the investment when the timing is perfect. This ensures you potentially maximize your profits and keep the losses to a minimum.'
    },
    {
        question: 'What do the research reports contain?',
        answer : 'Our research reports are like your personal finance encyclopedias. We offer two options (1-page report and detailed report) containing all vital details like Entry Price, Target Price, Risk, Market Capitalisation, Holding Period or Duration, and the thought process behind choosing a particular company as our stock pick.'
    }
    ,
    {
        question: 'When should I exit an investment?',
        answer : 'Fear not! Youll receive an exit notification via WhatsApp and Email for every idea youve invested in. Well tell you when its time to pack up and leave the investment party.'
    },
    {
        question: 'What are the various Subscription Plans of KamayaKya?',
        answer : 'We like to give our users a taste of the good stuff! Hence, we grant lifetime access to 3 system-generated stock picks that span both NSE and BSE. But lets not get too carried away. This tier, while generous, doesnt include SME stock picks or those handy updates via WhatsApp and Email. Its like a free sample at a bakery - delicious, but it leaves you craving for the full treat!'
    },
    {
        question: 'How does the billing work?',
        answer : 'We understand that effective investing requires time and patience, which is why we exclusively offer an annual plan. Our strategy reflects our ethos that long-term commitment is key to unlocking the true potential of your investments. For your convenience, we accept payments through various methods including Credit/Debit Card, UPI, Net-Banking, or Cheque. Our goal is to keep the process straightforward and hassle-free for you.'
    },
    {
        question: 'What is the cancellation policy?',
        answer : 'As much as we hate to see you go, we respect your decision. However, do note that we do not offer refunds. You can cancel at any time though.'
    }
]
export default Faq;
import React from 'react'
import Header from '../../Components/Header/Header';
import Subplan from '../../Components/Subplan/subplan';
import Faq from '../../Components/Faq/faq';
import Tesimonial from '../testimonial/testimonial';
import Footer from '../../Components/Footer/Footer';

function home() {
  return (
   
    <div>
      < Header />
      <div>
      <h1>welcome to home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repudiandae alias omnis distinctio molestias a, ab velit cumque consectetur quisquam sed ipsam quis at quas, nemo quibusdam repellat? Ducimus, ex? </p>
    </div>
    <div>
      <Tesimonial/>
    </div><br/>
    <div>
      <Faq/>
    </div>
    <div>
      {/* <Tesimonial/> */}
    </div><br/><br/>
    <div>
        <Footer/>
    </div>
    </div>
  )
}

export default home

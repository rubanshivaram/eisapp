import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function home() {
  return (
    <div>
      <Header />
      <div className="maindiv">
        <div style={{padding:'1rem'}}>
        <button className="sebino">SEBI Registered:xxxxxx</button>
        </div>

        <div className='carousalitems'>
          <Carousel fade>
            <Carousel.Item interval={2000}>
              <img
                className='sliderimg'
                src={silder1}
                alt="slider1"
              />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className='sliderimg'
                src={slider2}
                alt="slider2"
              />
              </Carousel.Item>
              </Carousel>
              </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          repudiandae alias omnis distinctio molestias a, ab velit cumque
          consectetur quisquam sed ipsam quis at quas, nemo quibusdam repellat?
          Ducimus, ex?
        </p>
        <Subplan/>
      </div>
      <Footer />
    </div>
  );
}

export default home;

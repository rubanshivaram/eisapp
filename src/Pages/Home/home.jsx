import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Subplan from "../Home/subplan"

function home() {
  return (
    <div>
      <Header />
      <div className="maindiv">
        <h1>welcome to home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          repudiandae alias omnis distinctio molestias a, ab velit cumque
          consectetur quisquam sed ipsam quis at quas, nemo quibusdam repellat?
          Ducimus, ex?{" "}
        </p>
        <Subplan/>
      </div>
      <Footer />
    </div>
  );
}

export default home;

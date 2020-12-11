import React, { useState, useEffect } from "react";
import image from "../images/Tessa.jpg"
import "../index.css"

function AboutMe() {
 

    return (
      <>
      <div className="container aboutme">
        <div className="row">
          <div className="col-6">
            <img className="img-fluid" src={image} alt="Teresa Pierce"/>
          </div>
          <div className="col-6">
            <h2>hello, my name is teresa</h2>
            <h3>but you can call me tessa</h3>
            <p>i'm a developer!</p>
          </div>
        </div>
      </div>
      </>
    );
  }


export default AboutMe;

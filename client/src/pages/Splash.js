import React, { useState, useEffect } from "react";
import Typical from 'react-typical'
import * as ReactBootstrap from "react-bootstrap";

function Splash() {

  function handleClick(page) {
    window.location.href = `/${page}`
  }


  return (
    <div className="spashSection">
      <div className="splashMain">
        <h2 className="splashH2">hello, my name is teresa</h2>
        <Typical
          steps={['I\'m a ', 1000, 'I\'m a developer', 2000, 'I\'m a photographer', 2000, 'I\'m a leader', 2000, 'I\'m a problem solver', 2000]}
          loop={Infinity}
          wrapper="p"
          className="typical"
        />
      </div>

      <div className="container-fluid splashMain">
        <div className="splashBtn from-left" onClick={() => { handleClick("aboutme") }}>
          about me
            </div>
        <div className="splashBtn from-left" onClick={() => { handleClick("portfolio") }}>
          development
            </div>
        <div className="splashBtn from-left" onClick={() => { handleClick("photography") }}>
          photography
            </div>
        <div className="splashBtn from-left" onClick={() => { handleClick("contact") }}>
          contact
            </div>
      </div>

    </div>
  );
}


export default Splash;

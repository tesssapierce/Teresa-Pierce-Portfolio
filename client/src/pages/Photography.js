import React, { useState, useEffect } from "react";
import Footer from "../components/Footer"
import * as ReactBootstrap from "react-bootstrap";
import Lightbox from "../components/Lightbox"
import SimpleReactLightbox from "simple-react-lightbox";

function Photography() {


  return (
    <>
      <div className="container portfolioHeader">
        <div className="row">
          <div className="col-12">
            <h2>photography</h2>
            <p>I specialize in children, newborns, and families, and also do many weddings and events.</p>
          </div>
        </div>
            <SimpleReactLightbox>
              <Lightbox />
            </SimpleReactLightbox>
      </div>
      <Footer />
    </>
  );
}


export default Photography;

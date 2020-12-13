import React, { useState, useEffect } from "react";
import image from "../images/Tessa.jpg"
import "../index.css"
import Footer from "../components/Footer"
import * as ReactBootstrap from "react-bootstrap";
import Pdf from "../components/Pdf"

function AboutMe() {


  return (
    <>
      <div className="container aboutme">
        <div className="row">
          <div className="col-12 col-md-6 aboutImgCont">
            <img className="aboutImg img-fluid" src={image} alt="Teresa Pierce" />
          </div>
          <div className="col-12 col-md-6 aboutText">
            <h2 className="aboutHeader">hello, my name is teresa (tessa) pierce</h2>
            <p>I am a driven web developer with 5 years of
            experience across e-commerce, digital
            marketing, CRM, and development with a
            specialization in Javascript and React JS. I
            bring confidence, leadership, and excitement
            to any team and thrive with problem solving.</p>
            <div className="aboutBtns">
              <ReactBootstrap.Button href="/portfolio" variant="link" className="contactBtn">Development Portfolio</ReactBootstrap.Button>
              <ReactBootstrap.Button href="/photography" variant="link" className="contactBtn">Photography</ReactBootstrap.Button>
            </div>
            <p>I have specialized as a photographer since 2013, photographing newborns, families, weddings, and portraits.  I work with a Canon 5d Mark iii and Canon 5d Mark ii, ask me about my lenses!  I'm fluent in Adobe Creative Cloud Suite, specifically with Adobe Photoshop.</p>
            <p>I live in Lakewood, Colorado with my partner, Patrick, and our 4 pets: Benjamin, Cece, Ollie, and Nora.  I love to foster animals, go camping, play video games, create music and artwork, and my favorite, code.</p>
            <div className="aboutBtns">
              <ReactBootstrap.Button href="/contact" variant="link" className="contactBtn">Get In Contact</ReactBootstrap.Button>
            </div>
          </div>
          <div className="col-12 col-md-6 contactTop">
            <Pdf />
            <ReactBootstrap.Button href="https://drive.google.com/file/d/1TTT7hcsT2mjNQT4RpYz1GMsbG2dzKVlv/view?usp=sharing" rel="noopener noreferrer" target="_blank"  variant="link" className="contactBtn">Download Resume</ReactBootstrap.Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default AboutMe;

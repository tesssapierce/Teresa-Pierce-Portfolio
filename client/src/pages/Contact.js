import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../index.css"
import Footer from "../components/Footer"

function Contact() {


  return (
    <>
      <ReactBootstrap.Form>
        {/* Name */}
        <ReactBootstrap.Form.Group controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control type="name" placeholder="John Doe" />
          <ReactBootstrap.Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </ReactBootstrap.Form.Text>
        </ReactBootstrap.Form.Group>

        {/* Email */}
        <ReactBootstrap.Form.Group controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
          <ReactBootstrap.Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </ReactBootstrap.Form.Text>
        </ReactBootstrap.Form.Group>

        {/* Message */}

        <ReactBootstrap.Form.Group controlId="exampleForm.ControlTextarea1">
          <ReactBootstrap.Form.Label>Example textarea</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control as="textarea" rows={3} />
        </ReactBootstrap.Form.Group>

        {/* Submit */}
        <ReactBootstrap.Button variant="primary" type="submit">
          Submit
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
      <Footer />
    </>
  );
}


export default Contact;

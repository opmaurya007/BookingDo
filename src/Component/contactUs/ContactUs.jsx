import React from "react";
// import "./form.jsx";
import "./contact.css";

const contactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <h1>Any Query! Feel free to contact.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry dummy text of the
            printing and typesetting industry dummy text of the printing and
            typesetting industry.
          </p>
          <h6>Email Us</h6>
          <br />
          <p>paponapp2244@gmail.com</p>
          <h6>Call Us</h6>
          <br />
          <p>+919016996697</p>
          <p>Connect with us :</p>
        </div>
        <div className="form">{/* <form /> */}</div>
      </div>
    </>
  );
};

export default contactUs;

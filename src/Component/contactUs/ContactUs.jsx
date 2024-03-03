import React from "react";
// import "./form.jsx";
import "./contact.css";

const contactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <h1>Any Query! Feel free to contact.</h1>
          <div className="para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
            <h6>Email Us</h6>
            <p>paponapp2244@gmail.com</p>
            <h6>Call Us</h6>
            <p>+919016996697</p>
            <hr />
            <p>Connect with us :</p>
          </div>
        </div>
        {/* <---------------------------------> */}
        <div className="form">
          <div className="contact1">
            <div className="contact-r">
              <div className="contact-c">
                <h1>Contact Us</h1>

                <p>
                  Lorem Ipsum has been the industry dummy text of the printing
                  and typesetting industry dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <form action="">
                <div className="form-1">
                  <div className="form-2">
                    <div className="name">
                      <label htmlFor="">Name</label>
                      <br />
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="email"
                        width={80}
                      />
                    </div>

                    <div className="email-1">
                      {" "}
                      <label htmlFor="">Email</label>
                      <br />
                      <input
                        type="Number"
                        name=""
                        id=""
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <br />
                  <label htmlFor="">Mobile Number</label>
                  <br />
                  <input type="text" name="" id="" placeholder="message" />
                  <br />
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea name="" id="" cols="" rows="2"></textarea>{" "}
                  <div className="btn-2">
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;

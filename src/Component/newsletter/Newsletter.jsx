import React from "react";
import "./newsletter.css";

const newsletter = () => {
  return (
    <>
      <div className="news-container">
        <div className="news1-container">
          <img src="./images/newsletter.png" alt="Your Image" />
        </div>
        <div className="content-container">
          <h1>Subscribe to our newsletter!</h1>
          <div className="news-para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="btn-2">
            <input type="email" placeholder="Email" />
            <button aria-placeholder="Email">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default newsletter;

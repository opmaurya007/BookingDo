import React from "react";
import "./Review.css";

const review = () => {
  return (
    <>
      <div className="review-container">
        <div className="img-container">
          <img src="./images/client.png" alt="Your Image" />
        </div>
        <div className="review-headpage">
          <h1>What our client says?</h1>
          <div className="review-para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          <div className="review-c">
            <p>
              Lorem Ipsum has been the industry dummy text of the printing and
              typesetting industry dummy text of the printing and typesetting
              industry.
            </p>
            <div className="img-container">
              <img src="./images/.png" alt="Your Image" />
            </div>
            <p>opmaurya</p>
            <p>software developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default review;

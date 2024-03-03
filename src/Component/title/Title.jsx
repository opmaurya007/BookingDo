import React from "react";
import "./title.css";
const Card = ({ title, content, imageUrl }) => (
  <>
    <div className="title">
      <div className="title-r">
        <h2>{title}</h2>
        <p>{content}</p>
        <button>Get Started</button>
      </div>
      <div className="title-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  </>
);

const title = ({ cardsData }) => {
  return (
    <>
      <div className="title-heading">
        <h2>How does it work?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry dummy text of the printing
          and typesetting industry dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </>
  );
};

export default title;

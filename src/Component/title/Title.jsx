import React from "react";
import "./title.css";
import Card from "../card/Card";
import data from "../card/CardData";

const title = () => {
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
      <Card cardsData={data} />
      {/* {props.cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          image={card.imageUrl}
        />
      ))} */}
    </>
  );
};

export default title;

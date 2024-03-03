import React from "react";

const Card = (props) => {
  return (
    <>
      {props.cardsData.map((card, index) => (
        <div className="title" key={index}>
          <div className="title-r">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <button>Get Started</button>
          </div>
          <div className="title-image">
            <img src={card.image} alt={title} />
          </div>
        </div>
      ))}
      ;
    </>
  );
};
// const StoreCard = ({ image, title, content }) => (
//   <>
//     <div className="store-card">
//       <div className="store-image">{image}</div>
//     </div>
//     <div className="store-title">{title}</div>
//     <div className="store-desc">{content}</div>
//   </>
// );

export default { Card };

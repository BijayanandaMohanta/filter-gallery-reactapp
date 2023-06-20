import React from "react";
import style from "./style.css";
// import dataApi from "./dataApi";

const Card = ({ cardData }) => {
  // console.log(cardData);
  return (
    <>
        <div className="card-set">
      {cardData.map((curElem) => {
        return (
          <>
        
              <div className="card" key={curElem.id}>
                <div className="card-image">
                  <img src={curElem.image} alt="Image not found!" />
                </div>
                <div className="card-description">
                  <p>
                    {curElem.description}
                  </p>
                  <div className="card-category">
                    {curElem.category}
                  </div>
                </div>
              </div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default Card;

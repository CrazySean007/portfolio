import "./Card.css";
import React from "react";

function Card({ children, img, color }) {
  // console.log(img, children);

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={img} alt="" className="card_img" />
      {children}
    </div>
  );
}

export default Card;

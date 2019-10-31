import React from "react";
import arrowRight from "../images/right-arrow.png";
import { historyArr } from "../data/dataArrey";

export const About = () => {
  return (
    <div className="about">
      <h1>We believe in passionate people</h1>
      <div className="about_career">
        <p>career</p>
        <img src={arrowRight} alt="arrow" />
      </div>
      <div className="about_list">
        {historyArr.map(item => (
          <div className="about_list_item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

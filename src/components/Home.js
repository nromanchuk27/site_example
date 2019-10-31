import React from "react";
import arrow from "../images/arrow.png";
import { homeInfoText } from "../data/dataArrey";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_main">
        <h1>Your next interactive experience</h1>
        <div className="hire">
          <p>hire us</p>
          <img src={arrow} alt="arrow left"></img>
          <div className="del"></div>
        </div>
      </div>
      <div className="home_info">
        {homeInfoText.map(item => (
          <div className="home_info_text" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

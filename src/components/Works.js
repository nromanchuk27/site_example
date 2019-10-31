import React, { Component } from "react";
import arrowLeft from "../images/left-arrow.png";
import arrowRight from "../images/right-arrow.png";
import { works } from "../data/dataArrey";

export class Works extends Component {
  constructor() {
    super();
    this.state = {
      currentWork: 1,
      nextWork: 2,
      prevWork: 0,
      displayRightText: false,
      displayLeftText: false
    };
  }
  moveSlider = direction => {
    const { currentWork, displayRightText, displayLeftText } = this.state;

    if (direction === "right") {
      if (displayLeftText) {
        this.setState({ displayLeftText: false });
      }
      this.setState({ displayLeftText: true });

      const timerR = setTimeout(() => {
        this.setState({ displayLeftText: false });
        clearTimeout(timerR);
      }, 1000);
      if (currentWork === 2) {
        this.setState({ currentWork: 1, nextWork: 2, prevWork: 0 });
      } else if (currentWork === 0) {
        this.setState({
          currentWork: 2,
          nextWork: 0,
          prevWork: 1
        });
      } else if (currentWork === 1) {
        this.setState({
          currentWork: 0,
          nextWork: 1,
          prevWork: 2
        });
      }
    } else {
      if (displayRightText) {
        this.setState({ displayRightText: false });
      }
      this.setState({ displayRightText: true });

      const timerL = setTimeout(() => {
        this.setState({ displayRightText: false });
        clearTimeout(timerL);
      }, 1000);
      if (currentWork === 0) {
        this.setState({ currentWork: 1, nextWork: 2, prevWork: 0 });
      } else if (currentWork === 1) {
        this.setState({
          currentWork: 2,
          nextWork: 0,
          prevWork: 1
        });
      } else if (currentWork === 2) {
        this.setState({
          currentWork: 0,
          nextWork: 1,
          prevWork: 2
        });
      }
    }
  };
  render() {
    const {
      currentWork,
      nextWork,
      prevWork,
      displayRightText,
      displayLeftText
    } = this.state;

    return (
      <div className="works">
        <h1>Selected work</h1>
        <div className="works_slider">
          <button
            name="right"
            onClick={() => this.moveSlider("right")}
            className="btn_work"
          >
            <img src={arrowLeft} alt="arrow" />
          </button>
          <WorkItem
            work={works[prevWork]}
            selected={false}
            displayRightText={displayRightText}
          />
          <WorkItem work={works[currentWork]} selected={true} />
          <WorkItem
            work={works[nextWork]}
            selected={false}
            displayLeftText={displayLeftText}
          />
          <button
            name="left"
            onClick={() => this.moveSlider("left")}
            className="btn_work"
          >
            <img src={arrowRight} alt="arrow" />
          </button>
        </div>
      </div>
    );
  }
}

const WorkItem = data => {
  const { id, name, text, img } = data.work;
  const { displayLeftText } = data;
  const { displayRightText } = data;
  return (
    <div className={data.selected ? "work_selected" : "work"} key={id}>
      <img
        src={img}
        alt={`${name}${id}`}
        className={data.selected ? "work_selected_img" : "work_img"}
      ></img>
      <h2 className={data.selected ? "work_selected_title" : "work_title"}>
        {name}
      </h2>
      <p className={data.selected ? "work_selected_text" : "work_text"}>
        {displayLeftText || (displayRightText || data.selected) ? text : null}
      </p>
    </div>
  );
};

import React, { Component } from "react";
import StartMenu from "./startMenu";
import TaskbarIcon from "./button";
import StartLogo from "../icons/StartLogo.png";
import AboutMe from "../icons/notepad.png";
import ContactMe from "../icons/email.png";
import Projects from "../icons/folder.png";

import "../App.css";

import footer1 from "../icons/footer1.png";
import footer2 from "../icons/footer2.png";
import footer3 from "../icons/footer3.png";

const footerIcons = [footer1, footer2, footer3];

export default class NavBar extends Component {
  state = {
    nums: [0, 1, 2],
    tasks: ["Projects", "About Me", "Contact Me"],
    icons: [Projects, AboutMe, ContactMe],
    visible: false,
    date: new Date(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="footer">
        {this.state.visible && <StartMenu />}
        <div className="taskBar">
          <button
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
            className="StartButton"
            style={this.state.visible ? {filter: "brightness(90%)"} : {filter: "brightness(100%)"}}
          >
            <img id="StartLogo" src={StartLogo} alt="Windows Start Logo" />
            <span className="button" id="Start">
              Start
            </span>
          </button>

          {this.state.nums.map((num) => (
            <div className="tasks" key={num}>
              <TaskbarIcon
                class="task"
                icon={this.state.icons[num]}
                title={this.state.tasks[num]}
                id="taskName"
              />
            </div>
          ))}
        </div>
        <div className="timeDate"
          style={{
            // position: "absolute",
            // width: "fit-content",
            // right: "0px",
            // height: "inherit",
            // paddingInline: "10px",
            // backgroundColor: "blue",

          }}
        >
          {footerIcons.map((icon, index) => (
            <img
              key={index}
              style={{
                padding: "2px",
                display: "inline-block",
                verticalAlign: "sub",
              }}
              src={icon}
              alt={`Footer Icon ${index}`}
            />
          ))}
          <div
            style={{ display: "inline-block", paddingLeft: "5px" }}
          >
            <p>
              {this.state.date.toLocaleTimeString([], {
                timeStyle: "long",
              })}
            </p>
          </div>
        </div>

      </div>
    );
  }
}

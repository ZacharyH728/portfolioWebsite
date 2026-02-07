import React, { useState, useEffect } from "react";
import StartMenu from "./startMenu";
import TaskbarIcon from "./button";
import StartLogo from "../icons/StartLogo.png";
import AboutMe from "../icons/notepad.png";
import ContactMe from "../icons/email.png";
import Projects from "../icons/folder.png";
import useActiveWindowStore from "./store";

import "../App.css";

import footer1 from "../icons/footer1.png";
import footer2 from "../icons/footer2.png";
import footer3 from "../icons/footer3.png";

const footerIcons = [footer1, footer2, footer3];

const Taskbar = () => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  
  const { toggleProjects, toggleAboutMe, toggleContactMe } = useActiveWindowStore();
  
  const tasks = ["Projects", "About Me", "Contact Me"];
  const icons = [Projects, AboutMe, ContactMe];
  const handlers = [toggleProjects, toggleAboutMe, toggleContactMe];

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer">
      {visible && <StartMenu />}
      <div className="taskBar">
        <button
          onClick={() => {
            setVisible(!visible);
          }}
          className="StartButton"
          style={visible ? {filter: "brightness(90%)"} : {filter: "brightness(100%)"}}
        >
          <img id="StartLogo" src={StartLogo} alt="Windows Start Logo" />
          <span className="button" id="Start">
            Start
          </span>
        </button>

        {tasks.map((task, index) => (
          <div className="tasks" key={index} onClick={handlers[index]}>
            <TaskbarIcon
              class="task"
              icon={icons[index]}
              title={task}
              id="taskName"
            />
          </div>
        ))}
      </div>
      <div className="timeDate">
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
            {date.toLocaleTimeString([], {
              timeStyle: "long",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;

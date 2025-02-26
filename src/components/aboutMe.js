import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";

const AboutMe = () => {

  return (
    <div className="aboutMe">
    <Window title="About Me" width='fit-content' className="aboutMe">
      <h2>Hey, I am Zachary Hill</h2>
      <p>I am a current second-year student at Northeastern University, where I am currently attending to recieving a Bachleors of Science in Electrical and Computer Engineering.</p>
    </Window>
    </div>

  )
}

export default AboutMe
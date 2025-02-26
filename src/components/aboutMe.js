import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";
import profilePicture from "../icons/profilePicture.jpg"
const AboutMe = () => {

  return (
    <Window title="About Me" width='fit-content' className="aboutMe">
      <h2 style={{margin: "0"}}>Hey, I am Zachary Hill</h2>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        height: "25vh"
      }}>
        <img style={{maxHeight: "80%"}} src={profilePicture}/>
        <div style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "90%"
        }}>
          <p>I am a current second-year student at Northeastern University, where I am currently attending to recieving a Bachleors of Science in Electrical and Computer Engineering, with a minor in Mathmatics and Material Science.</p>
          <p>Ever since I was little I have had a strong passion for anything S.T.E.M. It started when I was just 9 years old making minecraft mods on my family computer, to the present where I am fortunate to work with FPGAS, microcontrolers and other low-level hardware.</p>
          <p>Some of my favourite passions of mine are programming, CADing, 3D printing, and playing video games. When I'm not cooped up at my computer I'm outside hiking, biking or camping, all of which I discovered during my jounry to Eagle Scout. </p>
        </div>
      </div>
    </Window>
  )
}

export default AboutMe
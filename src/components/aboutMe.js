import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";
import profilePicture from "../icons/profilePicture.jpg"
import useActiveWindowStore from "./store";

const AboutMe = () => {
  const {aboutMeOpen, toggleAboutMe} = useActiveWindowStore();

  if (!aboutMeOpen) return null;

  return (
    <Window title="About Me" width='70%' height="fit-content" className="aboutMe" setVisibility={toggleAboutMe}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        maxHeight: "90%"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "90%",
          // maxWidth: "40"
        }}>
          <div style={
            {
              display: "flex",
              flexDirection: "row"
            }
          }>
          <img style={{maxWidth: "40%",padding: "0 10px 0 0"}} src={profilePicture}/>
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <h2 style={{margin: "10px 0 0px 0px"}}>Hey, I am Zachary Hill</h2>
          <p>I am a current third-year student at Northeastern University, where I am currently attending to receiving a Bachelors of Science in Electrical Engineering and Physics.</p>
          <p>After completing my degree I plan on to continue my education by pursing a Master's Degree in Applied Physics.</p>
          <p>Ever since I was a kid I have always been interested in engineering and anything STEM. Overtime this passion has evolved into a passion for electronics and physics.</p>
          </div>
          </div>
          <p>With this passion I have been able to grow my skills in programming, CADing, 3D printing, and electronic design. My first passion was programming where I started to program when I was just entering middle school. I started with Python and Java, where I learned by making mods for a game called Minecraft in Java.</p>
          <p>When I'm not learning new skills or practicing my existing skills, I am usually playing video games, playing the oboe, or maybe even a game of sudoku. Or even going outside for a nice hike or camp out.</p>
        </div>
      </div>
    </Window>
  )
}

export default AboutMe

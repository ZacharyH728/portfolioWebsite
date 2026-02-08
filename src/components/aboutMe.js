import React from "react";
import Window from "./window";
import profilePicture from "../icons/profilePicture.jpg"
import useActiveWindowStore from "./store";

const AboutMe = () => {
  const {aboutMeOpen, toggleAboutMe} = useActiveWindowStore();

  if (!aboutMeOpen) return null;

  return (
    <Window title="About Me" width='min(70%, 800px)' minWidth="300px" height="fit-content" className="aboutMe" setVisibility={toggleAboutMe}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
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
          <img style={{maxWidth: "40%",padding: "0 10px 0 0", objectFit: "contain", height: "auto"}} alt="Profile" src={profilePicture}/>
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <h2 style={{margin: "10px 0 0px 0px"}}>Hey, I am Zachary Hill</h2>
          <p>I am a third-year student at Northeastern University, where I am currently pursuing a Bachelor of Science in Electrical Engineering and Physics.</p>
          <p>I've been on this STEM path for as long as I can remember. I was always interested in science and how things worked. I started to really develop my skills and interests in 6th grade when I learned to program by creating mods for a game called Minecraft. Ever since then, my passion for STEM has exploded. In 8th grade, I started to learn and mess around with microcontrollers and microprocessors like Raspberry Pis, Arduinos, and ESP-32s.</p>
          </div>
          </div>
          <p>
            In high school, I bought my first 3D printer, through which I learned how to CAD and 3D model with programs like Fusion360, Inventor, SolidWorks, and even Blender. This was also when I joined my high school FRC robotics club, Team 25 - Raider Robotics. There, I continued to develop my engineering skills while I led our electrical and programming divisions. This early exposure to STEM topics led me to pursue a Bachelor of Science in Electrical Engineering and Physics at Northeastern University.
          </p>
          <p>
            My time at Northeastern has allowed me to continue to grow my passion for engineering as well as to develop as an academic. I was lucky enough to join DeLTA Labs, a physics lab, in a full-time capacity for my Co-op. With them, I was able to learn how to conduct research and to think like a researcher. I was also given opportunities to apply my knowledge and skills through hands-on projects, developing my engineering skills into a professional-quality toolset.
          </p>
          <p>
            After my time on Co-op, I learned I enjoy the challenge of complex problems, something I would like to continue by going into academia. I plan to do so by pursuing a Master's Degree in Applied Physics, and if that goes well, hopefully a PhD. 
          </p>
          <p>
            However, when I am not at my computer, I enjoy a balance of the arts and the outdoors. I enjoy playing the oboe, sewing, and even a nice hike or camp-out. I cultivated this passion in the Boy Scouts, where I climbed to the rank of Eagle Scout. 
          </p>
        </div>
      </div>
    </Window>
  )
}

export default AboutMe

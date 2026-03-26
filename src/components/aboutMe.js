import React from "react";
import Window from "./window";
import profilePicture from "../icons/profilePicture.jpg"
import useActiveWindowStore from "./store";
import ClickableImage from "./ClickableImage";

const AboutMe = () => {
  const {aboutMeOpen, toggleAboutMe} = useActiveWindowStore();

  if (!aboutMeOpen) return null;

  return (
    <Window title="About Me" width='min(70%, 800px)' minWidth="300px" height="fit-content" className="aboutMe" defaultFullscreen={true} setVisibility={toggleAboutMe}>
      <div style={{ overflow: "hidden" }}>
        <ClickableImage
          style={{
            float: "left",
            width: "clamp(120px, 30%, 240px)",
            marginRight: "15px",
            marginBottom: "8px",
            objectFit: "cover",
            display: "block"
          }}
          alt="Profile"
          src={profilePicture}
        />
        <h2 style={{margin: "10px 0 5px 0"}}>Hi, I am Zachary Hill</h2>
        <p>I am a third-year student at Northeastern University, where I am currently pursuing a Bachelor of Science in Electrical Engineering and Physics.</p>
        <p>I've been on this STEM path for as long as I can remember. I was always interested in science and how things worked. I started to really develop my skills and interests in 6th grade when I learned to program by creating mods for a game called Minecraft. Ever since then, my passion for STEM has exploded. In 8th grade, I began experimenting with microcontrollers and microprocessors like Raspberry Pis, Arduinos, and ESP-32s.</p>
        <p>
          In high school, I bought my first 3D printer, through which I learned how to CAD and 3D model with programs like Fusion360, Inventor, SolidWorks, and even Blender. This was also when I joined my high school FRC robotics club, Team 25 - Raider Robotics. There, I continued to develop my engineering skills while I led our electrical and programming divisions. This early exposure to STEM topics led me to pursue a Bachelor of Science in Electrical Engineering and Physics at Northeastern University.
        </p>
        <div style={{ clear: "both" }} />
        <p>
          My time at Northeastern has allowed me to continue to grow my passion for engineering as well as to develop as an academic. I was lucky enough to join DeLTA Labs, a physics lab, in a full-time capacity for my Co-op. With them, I was able to learn how to conduct research and to think like a researcher. I was also given opportunities to apply my knowledge and skills through hands-on projects, developing my engineering skills into a professional-quality toolset.
        </p>
        <p>
          After my time on Co-op, I learned I enjoy the challenge of complex problems, something I would like to continue by going into academia. I plan to do so by pursuing a Master's Degree in Applied Physics, and if that goes well, hopefully a PhD.
        </p>
        <p>
          Outside of academics, I enjoy a balance of the arts and the outdoors — playing the oboe, sewing, and spending time on a good hike or camp-out. These interests were deeply shaped by my years in the Boy Scouts of America, where I earned the rank of Eagle Scout, the highest achievement in Scouting, earned by fewer than 4% of all Scouts.
        </p>
        <p>
          For my Eagle Scout service project, I [describe your specific Eagle Scout project here — what was the community need, what did you build or organize, how many people did you lead, and what was the outcome]. Leading this project from conception to completion taught me how to coordinate a team, manage a budget, and deliver results under real-world constraints — skills I carry directly into my engineering work today. The experience was a formative reminder that technical ability and people leadership go hand in hand.
        </p>
      </div>
    </Window>
  )
}

export default AboutMe

import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";

const ProjectWindow = () => {

  const [items, setItems] = useState([
    {
      isVisible: false,
      title: "Concrete Super-Capacitor",
      paragraph: "Researched and created a functional super-capacitor using concrete mixed with carbon black as the main electrode. Designed and created a custom laser-cut housing made of acrylic. Soaked the concrete \"pucks\" in a potassium chloride solution as the supply for the ions, and used a insulated permeable carbon membrane as the separator.",
      // skills: ["Fusion360", "Blender"]
    },
    {
      isVisible: false,
      title: "Custom Lighting Console",
      paragraph: "Custom lighting console that uses an arduino microcontrolers to handle all sensor communication. Sensors includes: motorized and non-motorized linear potentiometers (faders), rotary encoders, and simple mx cherry keyboard buttons. Hosts a web server on a raspberry pi that can communicate with lights using the DMX-512 protocol. Can also act as a programmer wing for ETC consoles using the OSC communication protocol. All encased in a custom designed and 3D printed case modeled in Fusion360."
    },
    {
      isVisible: false,
      title: "16-Bit Calculator",
      paragraph: "Created a calculator on a breadboard that only using basic logic gates. The logical gates were made with only 2N222 transistors. Created a simulation of the calculator in LTSpice."
    },
    {
      isVisible: false,
      title: "Digital Wrist Watch",
      paragraph: "Custom watch with an LED display that displays the minute, hour, day, and month using binary. Runs off of a atmega328p microcontrollers and uses a DS3231 RTC. Case designed in Fusion360."
    },
    {
      isVisible: false,
      title: "Personal Portfolio Website"
    },
    {
      isVisible: false,
      title: "Classroom Kernel",
      paragraph: "AP CSP Project that is a online web interface to keep track of online classes. Can add classes with custom times and phone notification. Can also add video link to class and automatically join at class time."
    }
  ])

  function setVisibility(title){
    setItems((prevItems) => prevItems.map((item) => item.title === title ? {...item, isVisible: !item.isVisible} : item))
  }

  return (
    <div>
    <Window title="File Explorer / Projects" width='fit-content'>
      <div className='projectGrid'>
      {items.map((item) => (
            <ProjectIcon 
              key={item.title} 
              title={item.title} 
              onClick={() => setVisibility(item.title)}
            />
          ))}
      </div>
    </Window>
      {items.map((item) => {
        return (item.isVisible && 
        (<Window
          key={item.title}
          title={item.title}
          width="fit-content"
          setVisibility={setVisibility}
          z={50}> 
          <h1>{item.title}</h1>
          <p>{item.paragraph}</p>
          {item.skills ? <p>Skills: {item.skills.map((skill) => {return(<p style={{margin: "5px 0"}}>{skill}</p>)})} </p> : ""}
        </Window>))  
      })}
    </div>

  )
}

export default ProjectWindow
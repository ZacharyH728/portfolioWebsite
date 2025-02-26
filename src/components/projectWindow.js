import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";

const ProjectWindow = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      isVisible: false,
      title: "Concrete Super-Capcitor",
      paragraph: "Researched and created a functional super-capacitor using concrete mixed with carbon black as the main electrode. Designed and created a custom laser-cut housing made of acrylic. Soaked the concrete \"pucks\" in a potassium chloride solution as the supply for the ions, and used a insulated permeable carbon membrane as the seperator.",
      // skills: ["Fusion360", "Blender"]
    },
    {
      id: 2,
      isVisible: false,
      title: "Test Project 2"
    }
  ])

  function setVisibility(id){
    setItems((prevItems) => prevItems.map((item) => item.id === id ? {...item, isVisible: !item.isVisible} : item))
  }

  return (
    <div>
    <Window title="File Explorer / Projects" width='fit-content'>
      <div className='projectGrid'>
      {items.map((item) => (
            <ProjectIcon 
              key={item.id} 
              title={item.title} 
              onClick={() => setVisibility(item.id)}
            />
          ))}
      </div>
    </Window>
      {items.map((item) => {
        return (item.isVisible && 
        (<Window
          key={item.id}
          title={item.title}
          width="30%">
          <h1>{item.title}</h1>
          <p>{item.paragraph}</p>
          {item.skills ? <p>Skills: {item.skills.map((skill) => {return(<p style={{margin: "5px 0"}}>{skill}</p>)})} </p> : ""}
        </Window>))  
      })}
    </div>

  )
}

export default ProjectWindow
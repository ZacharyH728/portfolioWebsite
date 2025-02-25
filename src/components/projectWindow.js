import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";

const ProjectWindow = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Test Project 1"
    },
    {
      id: 2,
      title: "Test Projec 2"
    }
  ])

  return (
    <div>
    <Window title="File Explorer" width='fit-content'>
      <div className='projectGrid'>
        {items.map((item) => {
          return(<ProjectIcon onClick={() => {item.isVisible = !item.isVisible; console.log(item.isVisible)}} id={item.id} title={item.title}/>)
        })}
      </div>
    </Window>
      {}
    </div>

  )
}

export default ProjectWindow
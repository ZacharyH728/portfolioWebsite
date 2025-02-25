import React, { useState } from "react";
import icon from "../icons/folder.png"
import Window from "./window" 


const ProjectIcon = ({ title}) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="projectIcon"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
      }}
      // onClick={() => {setIsVisible(true)}}
      >
      <img id="taskIcon" src={icon}/>
      <div>
        {title}
      </div>
      {/* {isVisible ? 
        <Window title="File Explorer" width='fit-content'>
          <p>Test</p>
        </Window> : <div></div>
        } */}
    </div>
  );
  // return (
  //   <Draggable handle=".window-header">
  //     <div
  //       className="window"
  //       style={{
  //         width,
  //         height,
  //         backgroundColor: "#fff",
  //         border: "1px solid #ccc",
  //         borderRadius: "10px",
  //         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  //         position: "absolute",
  //         overflow: "hidden",
  //       }}
  //     >
  //       {/* Window Header (Draggable Area) */}
  //       <div
  //         className="window-header"
  //         style={{
  //           backgroundColor: "#0078D4",
  //           color: "white",
  //           padding: "10px",
  //           cursor: "move",
  //           fontWeight: "bold",
  //         }}
  //       >
  //         {title}
  //       </div>

  //       {/* Window Content */}
  //       <div
  //         className="window-content"
  //         style={{ padding: "10px", height: `calc(${height} - 50px)` }}
  //       >
  //         {children}
  //       </div>
  //     </div>
  //   </Draggable>
  // );
};

export default ProjectIcon;

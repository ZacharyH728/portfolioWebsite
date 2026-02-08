import React from "react";
import Window from "./window";
import useActiveWindowStore from "./store";

const Tutorial = () => {
  const { tutorialOpen, toggleTutorial } = useActiveWindowStore();

  return (
    <>
      {tutorialOpen && (
        <Window 
            title="Tutorial" 
            width={400} 
            setVisibility={toggleTutorial}
            initialX={window.innerWidth / 2 - 200}
            initialY={window.innerHeight / 2 - 200}
        >
          <div style={{ padding: "0 10px" }}>
            <h3>Welcome to my Portfolio!</h3>
            <p>Here is a quick guide on how to navigate this desktop environment:</p>
            
            <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
              <li>
                <strong>Desktop Icons:</strong> Double-click icons on the desktop (like "Projects" or "About Me") to open their respective windows.
              </li>
              <li>
                <strong>Taskbar:</strong> Use the taskbar at the bottom to switch between open windows.
              </li>
              <li>
                <strong>Projects:</strong> Inside the Projects window, click on any folder icon to view details about that specific project.
              </li>
              <li>
                <strong>Images:</strong> Click on any image within a project description to expand it into a full-size viewer.
              </li>
              <li>
                <strong>Resizing: Click and drag on the grey in bottom right corner of a window to resize.</strong>
              </li>
            </ul>
            
            <p style={{ marginTop: "20px", fontStyle: "italic", fontSize: "0.9em" }}>
              Feel free to drag windows around and explore!
            </p>
          </div>
        </Window>
      )}
    </>
  );
};

export default Tutorial;

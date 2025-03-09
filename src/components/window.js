import React, {useEffect, useState, useRef} from "react";
import Draggable from "react-draggable";

import useActiveWindowStore from "./store";


const upperBound = .40
const lowerBound = .01

const Window = (
  { title,
    children,
    className,
    id,
    z,
    setVisibility,
    width = "fit-content",
    height = "fit-content",
    style,
    initalX = (Math.random() * (.5 - .1) + .1) * window.innerWidth,
    initalY = (Math.random() * (upperBound - lowerBound) + lowerBound) * (window.innerHeight)
  }) => {
  const elementRef = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight
  });
  const {activeWindow, setActiveWindow} = useActiveWindowStore();

  useEffect(() => {
    if (elementRef.current) {
      setBounds({
        left: 0,
        top: 0,
        right: window.innerWidth - elementRef.current.offsetWidth - (.001 *window.innerWidth),
        bottom: window.innerHeight - elementRef.current.offsetHeight-(.05 *window.innerHeight)
      });
    }
  }, []);
  return (
    <Draggable
    defaultPosition={{x: initalX, y: initalY}}
    handle=".window-header"
    bounds={bounds}
    onMouseDown={() => {setActiveWindow(title)}}
    >
      <div
        ref={elementRef}
        className={`window ${className}`}
        stye={style}
        style={{
          width,
          height,
          zIndex: z ? z : activeWindow === title ? 100 : 10,
        }}
      >
        
        {/* Window Header (Draggable Area) */}
        <div
          className="window-header"
          style={{
            backgroundColor: "#0078D4",
            color: "white",
            padding: "10px",
            cursor: "move",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center"
          }}
        >
          {title}
          <button onClick={() => setVisibility(title)}
            style={{color: "White", textAlign: "center"}}>x</button>
        </div>

        {/* Window Content */}
        <div
          className="window-content"
          style={{ padding: "20px", height: `calc(${height} - 50px)` }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
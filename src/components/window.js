import React, {useEffect, useState, useRef} from "react";
import Draggable from "react-draggable";

const upperBound = .60
const lowerBound = .30

let activeWindow = null;


const Window = (
  { title,
    children,
    id,
    // key = Math.random() * (10000 - 1000) + 1000,
    isVisible,
    setVisibility,
    width = "fit-content",
    height = "fit-content",
    initalX = (Math.random() * (upperBound - lowerBound) + lowerBound) * window.innerWidth,
    initalY = (Math.random() * (upperBound - lowerBound) + lowerBound) * window.innerHeight
  }) => {
  const elementRef = useRef(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight });
  const [index, setIndex] = useState(1);
  useEffect(() => {
    if (elementRef.current) {
      setBounds({
        left: 0,
        top: 0,
        right: window.innerWidth - elementRef.current.offsetWidth,
        bottom: window.innerHeight - elementRef.current.offsetHeight-(.037*window.innerHeight)
      });
    }
  }, []);
  console.log(activeWindow)
  return (
    <Draggable
    defaultPosition={{x: initalX, y: initalY}}
    handle=".window-header"
    bounds={bounds}
    onMouseDown={() => {setIndex(index+1)}}
    >
      <div
        ref={elementRef}
        className="window"
        style={{
          width,
          height,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          position: "absolute",
          overflow: "hidden",
          // transform: "translate(100px,0)",
          maxWidth: "40%",
          // zIndex: activeWindow ===  ? 100 : 10,
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
          <button onClick={() => setVisibility(id)}
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
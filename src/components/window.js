import React, {useEffect, useState, useRef} from "react";
import Draggable from "react-draggable";

import useActiveWindowStore from "./store";


const upperBound = .20
const lowerBound = .02

const Window = (
  { title,
    children,
    className,
    id,
    z,
    setVisibility,
    width = "fit-content",
    height = "fit-content",
    minWidth,
    style,
    initialX = (Math.random() * (.2 - .05) + .05) * window.innerWidth,
    initialY = (Math.random() * (upperBound - lowerBound) + lowerBound) * (window.innerHeight)
  }) => {
  const elementRef = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight
  });
  const {activeWindow, setActiveWindow} = useActiveWindowStore();
  const [size, setSize] = useState({ 
    width: typeof width === 'number' && !minWidth ? Math.min(width, window.innerWidth * 0.3) : width, 
    height 
  });
  const isResizing = useRef(false);

  useEffect(() => {
    setActiveWindow(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update bounds when window size changes to ensure draggable area is correct
  useEffect(() => {
    // Initial bounds calculation
    const updateBounds = () => {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setBounds({
          left: 0,
          top: 0,
          right: window.innerWidth - width,
          bottom: window.innerHeight - 55 - height
        });
      }
    };
    
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [size, children]); // Only run on mount and window resize

  const handleMouseDown = (e) => {
    e.stopPropagation();
    isResizing.current = true;
    
    // Define the listeners
    const handleMouseMove = (e) => {
      if (!isResizing.current) return;
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const newWidth = e.clientX - rect.left;
        const newHeight = e.clientY - rect.top;
        
        // No maximum size constraint here, just minimums
        setSize({
          width: Math.max(newWidth, 200), // Minimum width
          height: Math.max(newHeight, 150) // Minimum height
        });
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.userSelect = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Store them so we can't lose reference (though here we remove them inside handleMouseUp which is fine)
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  
  return (
    <Draggable
    defaultPosition={{x: initialX, y: initialY}}
    handle=".window-header"
    bounds={bounds}
    onMouseDown={() => {setActiveWindow(title)}}
    >
      <div
        ref={elementRef}
        className={`window ${className}`}
        stye={style}
        style={{
          width: size.width,
          height: size.height,
          maxHeight: size.height === "fit-content" ? "50vh" : undefined,
          maxWidth: typeof size.width === 'string' && !minWidth ? '30vw' : undefined,
          zIndex: z ? z : activeWindow === title ? 100 : 10,
          position: "absolute", // Ensure absolute positioning for resizing logic
          display: "flex",
          flexDirection: "column",
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
            style={{color: "White", textAlign: "center", cursor: "pointer"}}>x</button>
        </div>

        {/* Window Content */}
        <div
          className="window-content"
          style={{
            padding: "20px",
            height: size.height === "fit-content" ? "100%" : `calc(${size.height}px - 60px)`, // Adjusted calculation
            overflowY: "auto"
          }}
        >
          {children}
        </div>

        {/* Resize Handle */}
        <div
          onMouseDown={handleMouseDown}
          style={{
            width: "15px",
            height: "15px",
            background: "linear-gradient(135deg, transparent 50%, #666 50%)", // Triangular grip look
            position: "absolute",
            bottom: "0",
            right: "0",
            cursor: "nwse-resize",
            zIndex: 10
          }}
        />
      </div>
    </Draggable>
  );
};

export default Window;

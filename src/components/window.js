import React from "react";
import Draggable from "react-draggable";

const window = ({ title, children, width = "fit-content", height = "fit-content" }) => {
  return (
    <Draggable handle=".window-header">
      <div
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
          }}
        >
          {title}
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

export default window;

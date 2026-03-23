import React, {useEffect, useState, useRef} from "react";
import Draggable from "react-draggable";

import useActiveWindowStore from "./store";

const upperBound = .20
const lowerBound = .02

const FS_WIDTH_RATIO = 0.55;
const TASKBAR_HEIGHT = 55;

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
    defaultFullscreen = false,
    initialX = (Math.random() * (.2 - .05) + .05) * window.innerWidth,
    initialY = (Math.random() * (upperBound - lowerBound) + lowerBound) * (window.innerHeight)
  }) => {
  const elementRef = useRef(null);
  const stableInitialX = useRef(initialX);
  const stableInitialY = useRef(initialY);

  const {activeWindow, setActiveWindow} = useActiveWindowStore();

  const [isFullscreen, setIsFullscreen] = useState(defaultFullscreen);

  // Position tracked in state so we can switch between fullscreen and window mode
  const [windowPos, setWindowPos] = useState({
    x: stableInitialX.current,
    y: stableInitialY.current,
  });
  const [windowSize, setWindowSize] = useState({
    width: typeof width === 'number' && !minWidth ? Math.min(width, window.innerWidth * 0.3) : width,
    height,
  });

  const [bounds, setBounds] = useState({ left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight });
  const isResizing = useRef(false);

  // Fullscreen dimensions — centered, full available height
  const fsWidth  = Math.round(window.innerWidth * FS_WIDTH_RATIO);
  const fsHeight = window.innerHeight - TASKBAR_HEIGHT;
  const fsX      = Math.round((window.innerWidth - fsWidth) / 2);
  const fsY      = 0;

  const currentPos    = isFullscreen ? { x: fsX, y: fsY }    : windowPos;
  const currentWidth  = isFullscreen ? fsWidth                : windowSize.width;
  const currentHeight = isFullscreen ? fsHeight               : windowSize.height;

  useEffect(() => {
    setActiveWindow(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update drag bounds when window size changes
  useEffect(() => {
    const updateBounds = () => {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect();
        setBounds({
          left: 0,
          top: 0,
          right: window.innerWidth - width,
          bottom: window.innerHeight - TASKBAR_HEIGHT - height,
        });
      }
    };
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [windowSize, isFullscreen, children]);

  const handleResizeMouseDown = (e) => {
    if (isFullscreen) return;
    e.stopPropagation();
    isResizing.current = true;

    const handleMouseMove = (e) => {
      if (!isResizing.current) return;
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const clampedX = Math.min(e.clientX, window.innerWidth);
        const clampedY = Math.min(e.clientY, window.innerHeight - TASKBAR_HEIGHT);
        setWindowSize({
          width:  Math.max(clampedX - rect.left, 200),
          height: Math.max(clampedY - rect.top,  150),
        });
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.userSelect = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Max height for fit-content windows in window mode
  const windowModeMaxHeight = typeof windowSize.height === 'string' && windowSize.height === 'fit-content'
    ? `${window.innerHeight - TASKBAR_HEIGHT - stableInitialY.current}px`
    : undefined;

  return (
    <Draggable
      position={currentPos}
      onDrag={(_, data) => { if (!isFullscreen) setWindowPos({ x: data.x, y: data.y }); }}
      handle=".window-header"
      bounds={isFullscreen ? { left: fsX, top: 0, right: fsX, bottom: 0 } : bounds}
      onMouseDown={() => setActiveWindow(title)}
    >
      <div
        ref={elementRef}
        className={`window ${className || ''}`}
        style={{
          width:  currentWidth,
          height: isFullscreen ? currentHeight : undefined,
          ...((!isFullscreen && windowSize.height === 'fit-content') ? { maxHeight: windowModeMaxHeight } : {}),
          ...((!isFullscreen && typeof windowSize.height === 'number') ? { height: windowSize.height } : {}),
          maxWidth: (!isFullscreen && typeof currentWidth === 'string' && !minWidth) ? '30vw' : undefined,
          zIndex: z ? z : activeWindow === title ? 100 : 10,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Window Header */}
        <div
          className="window-header"
          style={{
            backgroundColor: "#0078D4",
            color: "white",
            padding: "10px",
            cursor: isFullscreen ? "default" : "move",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {title}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <button
              onClick={() => setIsFullscreen(f => !f)}
              title={isFullscreen ? "Restore" : "Maximize"}
              style={{
                color: "white",
                textAlign: "center",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: 1,
                padding: "0 2px",
              }}
            >
              {isFullscreen ? "❐" : "□"}
            </button>
            <button
              onClick={() => setVisibility(title)}
              style={{ color: "white", textAlign: "center", cursor: "pointer" }}
            >
              x
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div
          className="window-content"
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          {/* Inner content wrapper — centered column in fullscreen, full-width in window mode */}
          <div style={{
            padding: "20px",
            maxWidth: isFullscreen ? "80%" : "100%",
            margin: isFullscreen ? "0 auto" : undefined,
            boxSizing: "border-box",
          }}>
            {children}
          </div>
        </div>

        {/* Resize Handle — hidden in fullscreen */}
        {!isFullscreen && (
          <div
            onMouseDown={handleResizeMouseDown}
            style={{
              width: "15px",
              height: "15px",
              background: "linear-gradient(135deg, transparent 50%, #666 50%)",
              position: "absolute",
              bottom: "0",
              right: "0",
              cursor: "nwse-resize",
              zIndex: 10,
            }}
          />
        )}
      </div>
    </Draggable>
  );
};

export default Window;

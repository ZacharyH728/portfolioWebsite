import React from "react";
import useActiveWindowStore from "./store";

const ClickableImage = ({ src, alt, style, className, ...props }) => {
  const { setViewerImage } = useActiveWindowStore();

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ cursor: 'pointer', ...style }}
      title="Click to expand"
      onClick={() => setViewerImage({ src, alt })}
      {...props}
    />
  );
};

export default ClickableImage;

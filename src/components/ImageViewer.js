import React from "react";
import Window from "./window";
import useActiveWindowStore from "./store";

const ImageViewer = () => {
  const { viewerImage, setViewerImage } = useActiveWindowStore();

  if (!viewerImage) return null;

  return (
    <Window
      title={viewerImage.alt || "Image Viewer"}
      setVisibility={() => setViewerImage(null)}
      width="auto"
      height="auto"
      z={300}
    >
      <img
        src={viewerImage.src}
        alt={viewerImage.alt}
        style={{ maxWidth: '80vw', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
      />
    </Window>
  );
};

export default ImageViewer;

import React from "react";
import icon from "../icons/folder.png"


const ProjectIcon = ({ title, onClick}) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="projectIcon"
      onClick={onClick}
      >
      <img id="taskIcon" alt="Folder Icon" src={icon}/>
      <div>
        {title}
      </div>
    </div>
  );
};

export default ProjectIcon;

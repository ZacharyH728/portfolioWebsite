import React from "react";
import DesktopIcon from "./deskktopIcon";
import folder from "../icons/folder.png"
import notepad from "../icons/notepad.png"
import document from "../icons/Font.png"
import resume from "../files/ResumeEngineering.pdf"
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import useActiveWindowStore from "./store";

const Desktop = () => {
    const { toggleProjects, toggleAboutMe } = useActiveWindowStore();

    return(
        <div className="Desktop">
          <DesktopIcon title="Projects" image={folder} onClick={toggleProjects}/>
          <DesktopIcon title="About Me" image={notepad} onClick={toggleAboutMe}/>
          <DesktopIcon title="LinkedIn" image={linkedin} link="https://www.linkedin.com/in/zachary-hill-58ba5a216/"/>
          <DesktopIcon title="Github" image={github} link="https://github.com/ZacharyH728"/>
          <DesktopIcon title="Resume" image={document} link={resume}/>
        </div>
    )
}

export default Desktop;

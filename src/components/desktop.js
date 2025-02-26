import { Component, React } from "react";
import DesktopIcon from "./deskktopIcon";
import folder from "../icons/folder.png"
import notepad from "../icons/notepad.png"
import resume from "../files/ResumeEngineering.pdf"
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

export default class Desktop extends Component {
    render() {
        return(
            <div className="Desktop">
              <DesktopIcon title="Projects" image={folder}/>
              <DesktopIcon title="About Me" image={notepad}/>
              <DesktopIcon title="LinkedIn" image={linkedin} link="https://www.linkedin.com/in/zachary-hill-58ba5a216/"/>
              <DesktopIcon title="Github" image={github} link="https://github.com/ZacharyH728"/>
              <DesktopIcon title="Resume" image={notepad} link={resume}/>
            </div>
        )
    }
}
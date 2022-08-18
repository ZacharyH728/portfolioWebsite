import { Component, React } from "react";
import StartMenu from "./startMenu";
import TaskbarIcon from "./button";
import StartLogo from '../icons/StartLogo.png'
import AboutMe from '../icons/notepad.png'
import ContactMe from '../icons/email.png'
import Projects from '../icons/folder.png'

import '../App.css';


export default class NavBar extends Component {
    state = {
        //TODO fix
        nums: [0,1,2],
        tasks: ["Home","About Me",'Contact Us'],
        icons: [AboutMe, ContactMe, Projects],
        visible: false
    };

    render() {
        return(
            <div className="footer">
            {this.state.visible ? <StartMenu/> : null}
            <div className="taskBar">
                <button onClick={() => {
                        this.setState({visible: !this.state.visible});
                    }}
                    className="StartButton">
                    <img id="StartLogo" src={StartLogo} alt="Windows Start Logo"/>
                    <button 
                    className="button" id="Start">start</button>
                </button>
                    {/* {this.state.tasks.map(task => (
                        <TaskbarIcon title={task} id={'task'}/>
                    ))} */}
                {this.state.nums.map(num => (
                    <div className="tasks" key={this.state.tasks[num]}>
                        <TaskbarIcon class={"task"} icon = {this.state.icons[num]} title={this.state.tasks[num]} id={"taskName"} />
                    </div>
                    // <TaskbarIcon image = {Projects} title={task} id={"task"} />
                ))}
            </div>
            </div>
        )
    }   
}
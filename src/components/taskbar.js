import { Component, React } from "react";
import TaskbarIcon from "./button";
import StartLogo from '../icons/StartLogo.png'
import AboutMe from '../icons/notepad.png'
import ContactMe from '../icons/email.png'
import Projects from '../icons/folder.png'

import '../App.css';


export default class NavBar extends Component {
    componentDidMount() {
        console.log(this.state.tasks[0])
    }

    state = {
        //TODO fix
        nums: [0,1,2],
        tasks: ["Home","About Me",'Contact Us'],
        icons: [AboutMe, ContactMe, Projects]
    };


    render() {
        return(
            <div className="taskBar">
                <div className="greenbar">
                    <img id="StartLogo" src={StartLogo} alt="Windows Start Logo"/>
                    <button className="button" id="Start">start</button>
                </div>
                <div className="tasks">
                    {/* {this.state.tasks.map(task => (
                        <TaskbarIcon title={task} id={'task'}/>
                    ))} */}
                    {this.state.nums.map(num => (
                        <TaskbarIcon class={"task"} icon = {this.state.icons[num]} title={this.state.tasks[num]} id={"taskName"} />
                        // <TaskbarIcon image = {Projects} title={task} id={"task"} />
                    ))}
                </div>
            </div>
        )
    }   
}
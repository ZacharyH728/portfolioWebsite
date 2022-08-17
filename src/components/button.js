import { Component, React } from "react";
import '../App.css'

export default class Navbutton extends Component {
    render() {
        return(
            <div className={this.props.class}>
                <img id="taskIcon" src={this.props.icon}/>
                <button className="button" id={this.props.id}>{this.props.title}</button>
            </div>
        )
    }
}
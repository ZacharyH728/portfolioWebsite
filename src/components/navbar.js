import { Component, React } from "react";
import Navbutton from "./button";
import '../App.css';

export default class NavBar extends Component {
    state = {
        buttons: ["Home","About Me",'Contact Us']
    };

    render() {
        return(
            <div className="navBar">
                {this.state.buttons.map(button => (
                    <Navbutton title={button} />
                ))}
            </div>
        )
    }   
}
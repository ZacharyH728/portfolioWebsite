import { Component, React } from "react";
import '../App.css'

export default class Navbutton extends Component {
    render() {
        return(
            <button className="button">{this.props.title}</button>
        )
    }
}
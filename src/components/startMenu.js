import { Component, React } from "react";
import user from "../icons/user.png"
export default class StartMenu extends Component {
    render() {
        return(
            <div className="StartMenu">
                <div className="UserGroup">
                    <img id="UserProfilePicture" src={user} alt="user"/>
                    <div id="UserName">Zachary Hill</div>

                </div>
            </div>
        )
    }
}
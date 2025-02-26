import { Component, React } from "react";



const DesktopIcon = ({ title, image, link}) => {
    // const [isVisible, setIsVisible] = useState(false);
    return(
        
        <div  
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            width: "fit-content",
            height: "fit-content",
            padding: "20px",
            textAlign: "center",
        }}>
        <a href={link} style={{textDecoration: "none"}}>
            <img style={{height: "70px", width: "70px"}} alt="Folder Icon" src={image}/>
            <p style={{margin: "0px", fontSize: "1.01em",}}>{title}</p>
        </a>
        </div>
    )}

export default DesktopIcon;
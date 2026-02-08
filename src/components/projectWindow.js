import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";
import useActiveWindowStore from "./store";
import smartConcreteCAD0 from "../icons/smartConcrete/Smart_Concrete_CAD0.png";
import smartConcreteCAD1 from "../icons/smartConcrete/Smart_Concrete_CAD1.jpg";
import smartConcreteIMG2 from "../icons/smartConcrete/Smart_Concrete_IMG2.png";
import smartConcreteIMG3 from "../icons/smartConcrete/Smart_Concrete_IMG3.jpg";
import smartConcreteIMG4 from "../icons/smartConcrete/Smart_Concrete_IMG4.png";
import smartConcreteIMG5 from "../icons/smartConcrete/Smart_Concrete_IMG5.jpg";
import smartConcreteIMG6 from "../icons/smartConcrete/Smart_Concrete_IMG6.jpg";
import smartConcreteIMG7 from "../icons/smartConcrete/Smart_Concrete_IMG7.jpg";

const ProjectWindow = () => {
  const {projectsOpen, toggleProjects} = useActiveWindowStore();
  const [selectedImage, setSelectedImage] = useState(null);
  const [items, setItems] = useState([
    {
      isVisible: false,
      title: "Concrete Super-Capacitor",
      paragraph: "Researched and created a functional super-capacitor using concrete, carbon-black mixture as the main electrode, as a final group project for an engineering course at Northeastern. We made four mixtures of the concrete-carbon black. [img3] Then using a custom designed enclousre, made in Fusion360 by me and laser cut in acrylic by me. [img4] The concrete \"pucks\" were then soaked in a potassium chloride solution as to supply the super-capcitor with ions, and used a insulated permemable carbon membrane as the separator. [img7]",
      skills: ["Fusion360", "Laser Cutting"],
      images: {
        img1: smartConcreteCAD0,
        img2: smartConcreteCAD1,
        img3: smartConcreteIMG2,
        img4: smartConcreteIMG3,
        img5: smartConcreteIMG4,
        img6: smartConcreteIMG5,
        img7: smartConcreteIMG6,
        img8: smartConcreteIMG7,
      }
    },
    {
      isVisible: false,
      title: "Custom Lighting Console",
      paragraph: "Custom lighting console that uses an arduino microcontrolers to handle all sensor communication. Sensors includes: motorized and non-motorized linear potentiometers (faders), rotary encoders, and simple mx cherry keyboard buttons. Hosts a web server on a raspberry pi that can communicate with lights using the DMX-512 protocol. Can also act as a programmer wing for ETC consoles using the OSC communication protocol. All encased in a custom designed and 3D printed case modeled in Fusion360.",
      skills: ["Fusion360", "Soldering", "Arduino", "Javascript"]
    },
    {
      isVisible: false,
      title: "16-Bit Calculator",
      paragraph: "Created a calculator on a breadboard that only using basic logic gates. The logical gates were made with only 2N222 transistors. Created a simulation of the calculator in LTSpice.",
      skills: ["LTSpice"]
    },
    {
      isVisible: false,
      title: "Digital Wrist Watch",
      paragraph: "Custom watch with an LED display that displays the minute, hour, day, and month using binary. Runs off of a atmega328p microcontrollers and uses a DS3231 RTC. Case designed in Fusion360.",
      skills: ["Fusion360", "micro-controller", "C", "Soldering"]
    },
    {
      isVisible: false,
      title: "Personal Portfolio Website",
      paragraph: "A custom website designed and programmed to show others about who I am and my experience. This website was created using React, JS, HTML and CSS",
      skills: ["react", "javascript"]
    },
    {
      isVisible: false,
      title: "Classroom Kernel",
      paragraph: "AP CSP Project that is a online web interface to keep track of online classes. Can add classes with custom times and phone notification. Can also add video link to class and automatically join at class time.",
      skills: ["javascript", "html"]
    },
    {
      isVisible: false,
      title: "FDTD Simulation of a Distributed Bragg Reflector",
      paragraph: "Created a simulation of a distributed bragg reflector using Tidy3D, a FDTD simulation software. Wrote a custom python program that given different parameters of the DBR (number of layers, thickness of layers, refractive index of layers) will automatically run a simulation and output the reflectance spectrum. As well as tolerances of the thickness of layers to better reflect real world fabrication. Used this program to optimize the design of a DBR for a specific wavelength range.",
      skills: ["python"]
    },
    {
      isVisible: false,
      title: "FDTD Simulation of a Grounded Co-Planar Superconducting Waveguide",
      paragraph: "Created a simulation of a grounded co-planar superconducting waveguide using Tidy3D, a FDTD simulation software. Wrote a custom python program that given different parameters of the waveguide (width, height, thickness of superconducting layer, etc.) will automatically run a simulation and output the transmission spectrum. Also built a script that can generate a identical waveguide for use in Sonnet, a software used to design superconducting circuits. Used this program to compare the results of Tidy3D and Sonnet for various waveguides.",
      skills: ["python", "Sonnet"]
    }
  ])

  function setVisibility(title){
    setItems((prevItems) => prevItems.map((item) => item.title === title ? {...item, isVisible: !item.isVisible} : item))
  }

  const renderParagraphWithImages = (text, images) => {
    if (!images) return text;
    
    // Split by tags in format [tagName]
    const parts = text.split(/(\[.*?\])/);
    
    return parts.map((part, index) => {
      // Check if the part is a tag
      const match = part.match(/^\[(.*?)\]$/);
      if (match) {
        const imgKey = match[1];
        if (images[imgKey]) {
          return (
            <img 
              key={index} 
              src={images[imgKey]} 
              alt={imgKey} 
              onClick={() => setSelectedImage({src: images[imgKey], alt: imgKey})}
              style={{
                maxWidth: '30%', 
                maxHeight: '10vh',
                margin: '10px auto',
                display: 'block',
                cursor: 'pointer' 
              }} 
            />
          );
        }
      }
      return part;
    });
  };

  return (
    <div>
    {projectsOpen && (
    <Window title="File Explorer / Projects" width={600} setVisibility={toggleProjects}>
      <div className='projectGrid'>
      {items.map((item) => (
            <ProjectIcon 
              key={item.title} 
              title={item.title} 
              onClick={() => setVisibility(item.title)}
            />
          ))}
      </div>
    </Window>
    )}
      {selectedImage && (
        <Window 
          title={selectedImage.alt || "Image Viewer"} 
          setVisibility={() => setSelectedImage(null)}
          width="auto"
          height="auto"
          z={200}
        >
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            style={{width: '100%', height: '100%', objectFit: 'contain'}} 
          />
        </Window>
      )}
      {items.map((item) => {
        return (item.isVisible && 
        (<Window
          key={item.title}
          title={item.title}
          width="fit-content"
          setVisibility={setVisibility}
          z={100}> 
          <h1 style={{margin: "5px 0 0 0"}}>{item.title}</h1>
          {item.skills ? <p style={{margin: "0", display: "flex", flexDirection: "row", alignItems: "center"}}>Skills: {item.skills.map((skill) => {return(<p style={{margin: "5px 0"}}>{skill}</p>)})} </p> : ""}
          <p>{renderParagraphWithImages(item.paragraph, item.images)}</p>
        </Window>))  
      })}
    </div>

  )
}

export default ProjectWindow

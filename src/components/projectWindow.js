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

import dbrIMG0 from "../icons/DBR/comparison.png"
import dbrIMG1 from "../icons/DBR/dbr.png"
import dbrIMG2 from "../icons/DBR/nLayersIMG0.png"
import dbrIMG3 from "../icons/DBR/reflectanceFrequency.png"
import dbrIMG4 from "../icons/DBR/tranmissionHistogram.png"

const ProjectWindow = () => {
  const {projectsOpen, toggleProjects} = useActiveWindowStore();
  const [selectedImage, setSelectedImage] = useState(null);
  const [items, setItems] = useState([
    {
      isVisible: false,
      title: "Concrete Super-Capacitor",
      paragraph: "For our group final project for our general engineering course GE1502 at Northeastern University, we researched and tested Concrete Super-Capacitors as a proof of concept for large scale concrete power storage. Over the course of three months, we researched into different techniques, materials and recipes. Through our research we found the easiest and most performant recipe was using carbon black to add electrical conductivity to the concrete, and a potassium chloride solution to provide the ions, enabling chemical charge storage. [clear] [br] We decided to test four different mixtures, allowing us to see how the carbon black affected the structural integrity of the concrete. As it would impact the use cases. We made 1%, 3%, 5%, and 7% ratio by volume mixtures. [img3:center] Then using a custom designed enclosure, made in Fusion360 by me and laser cut in acrylic by me. [img4:center] The super-capacitors were assembled with a semi-permeable carbon membrane in between the pucks as it would allow for the ions to transfer without conducting between, creating a voltage differential. The entire enclosures were then soaked in a potassium chloride solution as to supply the super-capacitor with ions. [img7:center] [clear] [br] I then tested and measured the capacitance of the super-capacitor where we only measured 1µf.[br] Throughout the manufacturing and testing process we came across some flaws and issues. The first of was the making of the concrete pucks. We used a 3D printed mould designed and printed by me. However the lid I designed had an outer lip, limiting the pressure that could be applied to the pucks. This caused the pucks thickness to vary and be rough. This limiting the surface area between each pucks and the membrane, limiting the conductivity and capacitance. The concrete we purchased also had fairly large pieces of aggregate, that at our size affected the integrity of the pucks and smoothness. The aggregate issues can be seen below.[img5:center] We also conclude that the carbon-black in large ratios compromised the concrete too much causing it to easily crumble. The image to the right is a puck that we created that was nearly 10% and you could break it with your hand. [img8:right:20]",
      skills: ["Fusion360", "Laser Cutting", "Teamwork", "Project Management", "Research", "EE Lab"],
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
      paragraph: "While working for DeLTA Labs at Northeastern University I was tasked with learning how to model various structures with a relatively new simulation package called Tidy3D. Tidy3D simulates electromagnetic behaviour using the Finite-Difference Time-Domain method. I was tasked with the end goal of simulating a, Distributed Bragg Reflector (DBR) with a micro-cavity, in order to create a design that would eventually be constructed by us at the lab. The DBR needed to use alternating layers of air and fused silica to have a resonance frequency of 2.5THz or around 120µm. To create, run and analyze the simulations I used a custom made python script. The python script given a wide variety of parameters would either construct a DBR to fit those parameters or to create one from scratch to match a desired end result. Once the program built the simulation it would send it to Tidy3D cloud servers where it would be solved. The data would then be download back to our local machine where it was then analyze by my program. [img0:left:40] My program would calculate and measure its resonance frequency as well as plot various data points that we found useful, like creating a 2D model of the DBR. Due to our desire to replicate the simulation by fabricating the DBR, the program also had to handle replicating real world manufacturing tolerances and defects. [img4:center:100][img1:hardright:300]",
      skills: ["Python", "Tidy3D", "Research", "FDTD"],
      images: {
        img0: dbrIMG0,
        img1: dbrIMG1,
        img2: dbrIMG2,
        img3: dbrIMG3,
        img4: dbrIMG4
      }
    },
    {
      isVisible: false,
      title: "FDTD Simulation of a Grounded Co-Planar Superconducting Waveguide",
      paragraph: "Created a simulation of a grounded co-planar superconducting waveguide using Tidy3D, a FDTD simulation software. Wrote a custom python program that given different parameters of the waveguide (width, height, thickness of superconducting layer, etc.) will automatically run a simulation and output the transmission spectrum. Also built a script that can generate a identical waveguide for use in Sonnet, a software used to design superconducting circuits. Used this program to compare the results of Tidy3D and Sonnet for various waveguides.",
      skills: ["Python", "Sonnet", "Tidy3D", "Research", "FDTD"]
    },
    {
      isVisible: false,
      title: "UV Laser Distribution System",
      paragraph: "Designed and aligned a multi-stage fourth harmonic generation setup to create a 15mW UV laser beam from a 2.5W infrared laser. Then designed and built a conduit system that would redirect the laser beam between labs for use in Time Resolved Transmission Electron Microscopy (TR-TEM).",
      skills: ["Solidworks", "3D-Printing", "Non-linear Optics", "Optical Alignment & Beam Steering", "Laser Safety"]
    }
  ])

  function setVisibility(title){
    setItems((prevItems) => prevItems.map((item) => item.title === title ? {...item, isVisible: !item.isVisible} : item))
  }

  const renderParagraphWithImages = (text, images) => {
    if (!images) return { mainContent: text, leftContent: [], rightContent: [] };
    
    // Split by tags in format [tagName] or [tagName:alignment]
    const parts = text.split(/(\[.*?\])/);
    const result = [];
    const leftContent = [];
    const rightContent = [];
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      
      // Check for special tags first
      if (part === '[br]') {
        result.push(<br key={`br-${i}`} />);
        continue;
      }
      if (part === '[clear]') {
        result.push(<div key={`clear-${i}`} style={{clear: 'both', width: '100%'}} />);
        continue;
      }

      const match = part.match(/^\[(.*?)(?::(left|right|center|hardleft|hardright)(?::(\d+))?)?\]$/);
      
      if (match) {
        const imgKey = match[1];
        const alignment = match[2] || 'center'; // Default to center if not specified
        const width = match[3]; // Optional width percentage

        if (images[imgKey]) {
          const isHard = alignment.startsWith('hard');
          const imgElement = (
            <img 
              key={`img-${i}`}
              src={images[imgKey]} 
              alt={imgKey} 
              onClick={() => setSelectedImage({src: images[imgKey], alt: imgKey})}
              style={{
                maxWidth: isHard ? '100%' : (width ? `${width}%` : (alignment === 'center' ? '100%' : '30%')), 
                maxHeight: (width || alignment === 'center' || isHard) ? 'auto' : '10vh',
                margin: isHard ? '0 0 10px 0' : (alignment === 'center' ? '10px auto' : (alignment === 'left' ? '0 15px 10px 0' : '0 0 10px 15px')),
                display: 'block',
                float: isHard ? 'none' : (alignment === 'center' ? 'none' : alignment),
                cursor: 'pointer' 
              }} 
            />
          );

          if (alignment === 'hardleft') {
             leftContent.push(
               <div key={`container-${i}`} style={{width: width ? `${width}px` : '200px'}}>
                 {imgElement}
               </div>
             );
          } else if (alignment === 'hardright') {
             rightContent.push(
               <div key={`container-${i}`} style={{width: width ? `${width}px` : '200px'}}>
                 {imgElement}
               </div>
             );
          } else if (alignment === 'left' || alignment === 'right') {
            // ... existing float logic ...
            const lastElement = result[result.length - 1];
            
            // If the last element is just a string, we can wrap it
            if (typeof lastElement === 'string' && lastElement.trim().length > 0) {
              // Remove the last text element
              result.pop();
              
              // Push image then text WITHOUT the container to allow wrapping across segments
              result.push(imgElement);
              result.push(<span key={`text-${i}`}>{lastElement}</span>);
            } else {
              // If no preceding text, just push the image
               result.push(imgElement);
            }
          } else {
            // Center alignment
            result.push(imgElement);
          }
        }
      } else {
        // Just text
        if (part.trim() !== '') {
           result.push(part);
        }
      }
    }
    
    return { mainContent: result, leftContent, rightContent };
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
        if (!item.isVisible) return null;
        
        const { mainContent, leftContent, rightContent } = renderParagraphWithImages(item.paragraph, item.images);
        
        return (
        <Window
          key={item.title}
          title={item.title}
          width="fit-content"
          setVisibility={setVisibility}> 
          <h1 style={{margin: "5px 0 0 0"}}>{item.title}</h1>
          {item.skills ? <div style={{margin: "7px 0", display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap"}}>Skills: {item.skills.map((skill) => {return(<p style={{margin: "0 5px"}}>{skill}</p>)})} </div> : ""}
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
            {leftContent.length > 0 && (
              <div style={{marginRight: '15px', display: 'flex', flexDirection: 'column'}}>
                {leftContent}
              </div>
            )}
            <p style={{flex: 1, margin: 0}}>{mainContent}</p>
            {rightContent.length > 0 && (
              <div style={{marginLeft: '15px', display: 'flex', flexDirection: 'column'}}>
                {rightContent}
              </div>
            )}
          </div>
        </Window>)  
      })}
    </div>

  )
}

export default ProjectWindow

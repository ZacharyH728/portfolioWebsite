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
  const {projectsOpen, toggleProjects, setViewerImage} = useActiveWindowStore();
  const [items, setItems] = useState([
    {
      isVisible: false,
      title: "Concrete Super-Capacitor",
      sections: [
        {
          title: "Overview",
          content: "Group final project for GE1502 (General Engineering) at Northeastern University. Our team researched and tested Concrete Super-Capacitors as a proof of concept for large-scale concrete energy storage. Over three months, we investigated different techniques, materials, and recipes, ultimately determining that carbon black (for electrical conductivity) combined with a potassium chloride solution (for ion supply) produced the best results."
        },
        {
          title: "My Contributions",
          content: "I designed and laser cut the custom acrylic enclosure in Fusion360 that housed the super-capacitor assembly. [img4:center] I also designed and 3D printed the concrete mold used to form the pucks. Additionally, I led the testing and measurement phase, personally measuring the capacitance of each assembled super-capacitor."
        },
        {
          title: "Team Approach",
          content: "The team decided to test four different carbon black ratios by volume — 1%, 3%, 5%, and 7% — to evaluate how concentration affected both electrical performance and structural integrity. The concrete pucks were assembled with a semi-permeable carbon membrane between them to allow ion transfer without direct conduction, and the entire assembly was soaked in potassium chloride solution. [img3:center] [img7:center]"
        },
        {
          title: "Results & Findings",
          content: "Testing measured a capacitance of only 1µF. Several manufacturing issues limited performance: the mold lid design constrained the pressure applied during curing, causing uneven puck thickness and reduced membrane contact area. The concrete aggregate was also too coarse for the puck size, affecting surface quality and structural integrity. [img5:center] At higher carbon black ratios (near 10%), the pucks became structurally compromised and could be broken by hand. [img8:right:20] These findings suggest that finer aggregate, a revised mold design, and tighter manufacturing tolerances would significantly improve capacitance in future iterations."
        }
      ],
      skills: ["Fusion360", "Laser Cutting", "3D Printing", "Teamwork", "Project Management", "Research", "EE Lab"],
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
      sections: [
        {
          title: "Overview",
          content: "A fully custom DMX lighting console designed and built from scratch. The console can control stage lighting directly via DMX-512 or act as a programmer wing for ETC consoles via OSC, making it flexible for a variety of live production environments."
        },
        {
          title: "My Contributions",
          content: "I designed and built the entire system independently — from the electronics to the enclosure. I programmed the Arduino microcontroller firmware to handle all sensor communication, developed the Raspberry Pi web server, and modeled and 3D printed the custom enclosure in Fusion360. I also performed all soldering for sensor integration."
        },
        {
          title: "Technical Details",
          content: "Sensor inputs include motorized and non-motorized linear potentiometers (faders), rotary encoders, and MX Cherry keyboard switches. The Raspberry Pi hosts a web server that communicates with lighting fixtures using the DMX-512 protocol. OSC support allows the console to interface with ETC consoles as a programmer wing."
        }
      ],
      skills: ["Fusion360", "Soldering", "Arduino", "Javascript"]
    },
    {
      isVisible: false,
      title: "16-Bit Calculator",
      sections: [
        {
          title: "Overview",
          content: "A 16-bit calculator built on a breadboard using only discrete transistor-based logic gates — no integrated logic ICs. The project demonstrates a deep understanding of digital logic design from first principles."
        },
        {
          title: "My Contributions",
          content: "I designed the full logic circuit using 2N2222 transistors to construct each logic gate from scratch, then assembled and wired the circuit on a breadboard. I also built a full simulation of the calculator in LTSpice to verify the design before and after physical construction."
        },
        {
          title: "Technical Details",
          content: "All logic gates (AND, OR, NOT, XOR, etc.) are implemented exclusively with 2N2222 NPN transistors. The calculator handles 16-bit arithmetic operations. The LTSpice simulation was used to validate switching behavior and signal integrity."
        }
      ],
      skills: ["LTSpice", "Circuit Design", "Soldering"]
    },
    {
      isVisible: false,
      title: "Digital Wrist Watch",
      sections: [
        {
          title: "Overview",
          content: "A custom wristwatch with an LED display that shows the current time and date in binary. Designed as a personal electronics project combining embedded firmware, circuit design, and mechanical enclosure design."
        },
        {
          title: "My Contributions",
          content: "I designed the custom enclosure in Fusion360, programmed the ATmega328P microcontroller in C to drive the LED display and communicate with the RTC module, and handled all soldering and assembly."
        },
        {
          title: "Technical Details",
          content: "The display encodes minute, hour, day, and month in binary across individual LEDs. Timekeeping is handled by a DS3231 real-time clock module for high accuracy. The ATmega328P serves as the main processing unit."
        }
      ],
      skills: ["Fusion360", "Microcontrollers", "C", "Soldering"]
    },
    {
      isVisible: false,
      title: "Personal Portfolio Website",
      sections: [
        {
          title: "Overview",
          content: "This portfolio website — designed and built entirely from scratch to present my background, skills, and projects in an engaging way. The interface is styled as a Windows XP desktop environment to give visitors a unique and memorable experience."
        },
        {
          title: "My Contributions",
          content: "I designed and developed the full site independently, including the Windows XP UI concept, draggable and resizable window components, taskbar, start menu, and all content. State management is handled with Zustand."
        },
        {
          title: "Technical Details",
          content: "Built with React and JavaScript. Features include draggable windows (react-draggable), a custom image rendering system for project descriptions, and a Zustand store for window state management."
        }
      ],
      skills: ["React", "JavaScript", "HTML", "CSS", "Zustand"]
    },
    {
      isVisible: false,
      title: "Classroom Kernel",
      sections: [
        {
          title: "Overview",
          content: "A web-based class management tool created for the AP Computer Science Principles course. Designed to help students organize and attend their online classes more efficiently during remote learning."
        },
        {
          title: "My Contributions",
          content: "I designed and built the full application independently, including the scheduling interface, notification system, and automated video-join functionality."
        },
        {
          title: "Features",
          content: "Supports adding classes with custom recurring schedules and phone notifications. Users can attach a video conference link to each class and the application will automatically join the meeting at the scheduled start time."
        }
      ],
      skills: ["JavaScript", "HTML"]
    },
    {
      isVisible: false,
      title: "FDTD Simulation of a Distributed Bragg Reflector",
      sections: [
        {
          title: "Overview",
          content: "Research project completed during my Co-op at DeLTA Labs, Northeastern University. The goal was to simulate a Distributed Bragg Reflector (DBR) with a micro-cavity using alternating layers of air and fused silica, targeting a resonance frequency of 2.5THz (~120µm). The simulation was intended to directly inform a physical device to be fabricated in the lab."
        },
        {
          title: "My Contributions",
          content: "I independently wrote a Python simulation framework that constructed, submitted, and analyzed DBR simulations using the Tidy3D FDTD package. [img0:left:40] Given a set of design parameters, the script would either build a DBR to match them or optimize the structure to achieve a desired resonance frequency. Simulations were submitted to Tidy3D's cloud servers and results were automatically downloaded and analyzed by my program. I also extended the program to model real-world manufacturing tolerances and defects to improve fabrication fidelity."
        },
        {
          title: "Results",
          content: "The program successfully calculated resonance frequencies and generated 2D structural models and transmission/reflectance plots useful for design validation. [img4:center:100][img1:hardright:300]"
        }
      ],
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
      sections: [
        {
          title: "Overview",
          content: "Research project at DeLTA Labs to simulate a grounded co-planar superconducting waveguide and cross-validate results between two electromagnetic simulation packages: Tidy3D (FDTD) and Sonnet (frequency-domain)."
        },
        {
          title: "My Contributions",
          content: "I wrote a custom Python program that, given waveguide parameters (width, height, superconducting layer thickness, etc.), automatically constructed and ran FDTD simulations in Tidy3D and output the transmission spectrum. I also wrote a separate script to generate equivalent waveguide geometries in Sonnet for direct comparison."
        },
        {
          title: "Results",
          content: "Compared transmission spectra between Tidy3D and Sonnet across multiple waveguide configurations, helping validate the accuracy and applicability of each tool for superconducting circuit design at the lab."
        }
      ],
      skills: ["Python", "Sonnet", "Tidy3D", "Research", "FDTD"]
    },
    {
      isVisible: false,
      title: "UV Laser Distribution System",
      sections: [
        {
          title: "Overview",
          content: "Research project at DeLTA Labs to generate a UV laser beam and route it between labs for use in Time-Resolved Transmission Electron Microscopy (TR-TEM) experiments."
        },
        {
          title: "My Contributions",
          content: "I designed and aligned a multi-stage fourth harmonic generation (4HG) optical setup to convert a 2.5W infrared laser into a 15mW UV laser beam. I then designed and fabricated a custom beam conduit system to safely route the laser between laboratory spaces."
        },
        {
          title: "Technical Details",
          content: "The 4HG process required careful alignment of nonlinear optical crystals across multiple conversion stages. Enclosures and mounts were modeled in SolidWorks and 3D printed. All work was conducted in compliance with laser safety protocols."
        }
      ],
      skills: ["SolidWorks", "3D Printing", "Non-linear Optics", "Optical Alignment & Beam Steering", "Laser Safety"]
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
              onClick={() => setViewerImage({src: images[imgKey], alt: imgKey})}
              style={{
                maxWidth: isHard ? '100%' : (width ? `${width}%` : (alignment === 'center' ? '100%' : '35%')),
                maxHeight: alignment === 'center' ? '35vh' : (isHard ? 'none' : '20vh'),
                objectFit: 'contain',
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

  const sideGapWidth = Math.round((1 - 0.55) / 2 * window.innerWidth);

  return (
    <div>
    {projectsOpen && (
    <Window
      title="File Explorer / Projects"
      width={sideGapWidth}
      height={window.innerHeight - 55}
      initialX={window.innerWidth - sideGapWidth}
      initialY={0}
      setVisibility={toggleProjects}
    >
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
{items.map((item) => {
        if (!item.isVisible) return null;

        const renderSection = (text, images, keyPrefix) => {
          const { mainContent, leftContent, rightContent } = renderParagraphWithImages(text, images);
          return (
            <div key={keyPrefix} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
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
          );
        };

        return (
        <Window
          key={item.title}
          title={item.title}
          width="fit-content"
          initialY={0}
          defaultFullscreen={true}
          setVisibility={setVisibility}>
          <h1 style={{margin: "5px 0 0 0"}}>{item.title}</h1>
          {item.skills ? <div style={{margin: "7px 0", display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap"}}>Skills: {item.skills.map((skill) => {return(<p style={{margin: "0 5px"}}>{skill}</p>)})} </div> : ""}
          {item.sections ? (
            item.sections.map((section, idx) => (
              <div key={idx} style={{marginBottom: '10px'}}>
                <h3 style={{margin: '8px 0 3px 0', fontSize: '0.95em', borderBottom: '1px solid #aaa', paddingBottom: '2px'}}>{section.title}</h3>
                {renderSection(section.content, item.images, `section-${idx}`)}
              </div>
            ))
          ) : (() => {
            const { mainContent, leftContent, rightContent } = renderParagraphWithImages(item.paragraph, item.images);
            return (
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
            );
          })()}
        </Window>)
      })}
    </div>

  )
}

export default ProjectWindow

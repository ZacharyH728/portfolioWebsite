import './App.css';
import Taskbar from './components/taskbar';
import ProjectWindow from './components/projectWindow';
import AboutMe from './components/aboutMe';
import Desktop from './components/desktop';
import { Component } from 'react';
import background from "./icons/background.jpg"
import ContactMe from './components/contactMe';
import Tutorial from './components/tutorial';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      overflow: 'hidden' }}>
        <Desktop/>
        <ProjectWindow/>
        <AboutMe/>
        <ContactMe/>
        <Tutorial/>
        <Taskbar/>
      </div>
    )
  }
}

export default App;

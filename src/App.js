import './App.css';
import Taskbar from './components/taskbar';
import ProjectWindow from './components/projectWindow';
import AboutMe from './components/aboutMe';
import Desktop from './components/desktop';
import { Component } from 'react';
import background from "./icons/background.jpg"
import ContactMe from './components/contactMe';

class App extends Component {
  render() {
    return (
      
      <div style={{ backgroundImage: `url(${background})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover' }}>
        <Desktop/>
        <ProjectWindow/>
        {/* <Window title="About Me">
          <div className='ProjectGrid'>
            <p>test</p>
            <p>test2</p>
          </div>
        </Window>
        <Window title="Contact Me">
          <div className='ProjectGrid'>
            <p>test</p>
            <p>test2</p>
          </div>
        </Window> */}
        <AboutMe/>
        <ContactMe/>
        <Taskbar/>
      </div>
    )
  }
}

export default App;
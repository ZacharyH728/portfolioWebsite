import './App.css';
import Taskbar from './components/taskbar';
import startMenu from './components/startMenu';
import ProjectIcon from './components/projectIcon';
import Window from './components/window';
import { Component } from 'react';
import background from "./icons/background.jpg"

class App extends Component {
  render() {
    return (
      
      <div style={{ backgroundImage: `url(${background})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover' }}>
      <Window title="File Explorer" width='fit-content'>
        <div className='projectGrid'>
          <ProjectIcon title="Test Project 1"/>
          <ProjectIcon title="Test Project 2"/>
          <ProjectIcon title="Test Project 3"/>
          <ProjectIcon title="Test Project 4"/>
        </div>
      </Window>
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
      <Taskbar/>
      
      </div>
    )
  }
}

export default App;
import './App.css';
import Taskbar from './components/taskbar';
import ProjectWindow from './components/projectWindow';
import { Component } from 'react';
import background from "./icons/background.jpg"

class App extends Component {
  render() {
    return (
      
      <div style={{ backgroundImage: `url(${background})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover' }}>
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
      <Taskbar/>
      
      </div>
    )
  }
}

export default App;
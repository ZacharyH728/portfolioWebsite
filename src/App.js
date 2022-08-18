import './App.css';
import Taskbar from './components/taskbar';
import startMenu from './components/startMenu';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      <Taskbar/>
      </div>
    )
  }
}

export default App;
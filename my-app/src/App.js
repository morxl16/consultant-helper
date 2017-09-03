import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="columns">
          <div className="column is-10">
            <Graph />
          </div>
          <div className='column is-pulled-right' style={{display: 'inline-block'}}>
            <SideMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

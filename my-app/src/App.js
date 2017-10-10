import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import Requests from './components/Requests';
import RequestsGraph from './components/RequestsGraph';
import Editing from './components/Editing';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/students' component={Upload} />
          <Route exact path='/requests' component={Requests} />
          <Route exact path='/graph' component={RequestsGraph} />
          <Route path='/editing' component={Editing} />
        </div>
      </Router>
    );
  }
}

export default App;

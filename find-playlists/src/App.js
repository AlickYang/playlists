import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColour = 'black'
let defaultStyle = {
  color: defaultTextColour
};

class Aggregate extends Component {
  render () {
    return (
      <div style={{width: "40%", display: 'inline-block'}} className="aggregate">
        <h2 style={{color: 'red'}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style = {{color: defaultTextColour}}>
          <img/> 
          <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style = {{...defaultStyle, display: 'inline-block', width: "25%"}}> 
          <img/>
          <h3> Playlist Name</h3>
          <ul><li>Song 1</li> <li>Song 2</li> <li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  
  render() {
    let name = 'Alick'
    return (
      <div className="App">
      <h1> Title </h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{color: defaultTextColour}}> Hello </h1>
        </header>

      </div>
    );
  }
}

export default App;

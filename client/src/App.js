import React from 'react';
import axios from 'axios';

import Players from './components/Players.js';
import Navbar from './components/NavBar.js';

import './App.css';

class App extends React.Component {
  //constructor function to set state
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
 
  //componentDidMount
  componentDidMount() {
    axios
      //grabbing players object from server data
      .get("http://localhost:5000/api/players")
      .then((res) => {
        console.log(res.data);
        //setting players to the data object
        this.setState({ players: res.data });
      })
      .catch((err) => console.log(err));
  }

  //display components and pass state 
  render() {
    return (
      <div className="App">
        <Navbar />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
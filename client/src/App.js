import React from 'react';
import axios from 'axios';

import Players from './components/Players.js';
import ToggleDarkMode from './components/ToggleDarkMode.js';

import './App.css';

class App extends React.Component {
  //constructor function to set state
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
 
  

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        console.log(res.data);
        this.setState({ players: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <ToggleDarkMode />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
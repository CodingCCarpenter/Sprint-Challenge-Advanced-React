import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
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
      .get('http://localhost:5000/api/players')
      .then((res) => {
        console.log(res.data);
        this.setState({ players: res.data });
      })
      .catch((err) => {
        console.log("OH NO! We have an error :(  Let's see what the error message is!", err))
      }
  
 render(){ 
  return(
    <div className = 'App'>
      <h1>Women's World Cup Line-up</h1>
      <h2>Basic information about all the best athletes!</h2>
      <Players players={this.state.players} />
      <ToggleDarkMode />
    </div>
  );
};
}

export default App;

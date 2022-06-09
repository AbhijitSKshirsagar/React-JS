import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state={
      title:'hello from bridgelabz'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo}
        alt="The BridgeLabz logo: a bridge to Employment through lab works"/>
      </div>
    )
  }
}

export default App;

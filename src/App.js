import React from 'react';
import logo from './assets/logo.png';
import './App.css';

class App extends React.Component {
  url = 'https://www.google.com'
  constructor(){
    super()
    this.state={
      title:'hello from bridgelabz'
    }
  }

  onClick = ($event) => {
    console.log("save button is click!", $event);
    window.open(this.url, "blank");
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo: a bridge to Employment through lab works"/>
      </div>
    )
  }
}

export default App;

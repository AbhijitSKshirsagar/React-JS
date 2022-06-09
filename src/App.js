import React from 'react';
import logo from './assets/logo.png';
import './App.css';

class App extends React.Component {
  url = 'https://www.google.com'
  constructor(){
    super()
    this.state={
      userName:''
    }
  }

  onClick = ($event) => {
    console.log("save button is click!", $event);
    window.open(this.url, "blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value)
    this.setState({userName: event.target.value})
  }
  render(){
    return(
      <>
      <div>
        <h1>{this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo: a bridge to Employment through lab works"/>
      </div>
      <div>
        <input onChange={this.onNameChange} />
      </div>
      </>
    )
  }
}

export default App;

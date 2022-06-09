import React from 'react';
import logo from './assets/logo.png';
import './App.css';

class App extends React.Component {
  url = 'https://www.google.com'
  constructor(){
    super()
    this.state={
      userName:'',
      nameError:''
    }
  }

  onClick = ($event) => {
    console.log("save button is click!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value)
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    this.setState({userName: event.target.value})
    if (nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    }else{
      this.setState({nameError:'Name is Incorect'})
    }
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
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </>
    )
  }
}

export default App;

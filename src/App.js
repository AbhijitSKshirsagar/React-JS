import React from 'react';
import logo from './assets/logo.png';
import './App.css';

class App extends React.Component {
  url = 'https://www.bridgelabz.com'
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
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo: a bridge to Employment through lab works"/>
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <p>At Bridgelabz we are a Community of</p>
        <ul>
          <li>Technologists</li>
          <li>Thinkers</li>
          <li>Builders</li>
        </ul>
        <p>
          Working together to keep the Tech Employability of Engineers alive and
          accessible, so Tech Companies worldwide can get contributors and
          creators for technology Solutions. We belive this act of human
          collaboration across an employability platfor is essential to
          individual growth and our collevtive future.
        </p>
        <p>
          To know more about us, visit{" "}
          <a href="https://www.BridgeLabz.com/">BridgeLabz</a> to learn even
          more about out mission
        </p>
        <p>
          i.e <strong> Employability to all</strong>
        </p>
      </>
    )
  }
}

export default App;

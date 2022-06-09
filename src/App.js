
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      title:'Hello From BridgeLabz'
    }
  }
  render(){
   return (
     <div><h1>{this.state.title}</h1></div>
    );
  }
}
export default App;

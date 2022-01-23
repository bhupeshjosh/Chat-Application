import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

//const users = [{ username: 'Amy' }, { username: 'John' }];

/*const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
  { username: 'Amy', text: 'Fine' },  
];
*/
class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
	
  constructor(props){
  	super(props);
    this.state = {
      messages : [],
    };
    this.handleSend = this.handleSend.bind(this);
  }
  
  handleSend(msgObj){
  	this.setState((prevState) =>(
      {messages:[...prevState.messages , msgObj]}
    ));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
			<ChatWindow messages={this.state.messages} 
				username={"Amy"} 
				handleSend = {this.handleSend}/>
			<ChatWindow messages={this.state.messages} 
				username={"John"} 
				handleSend = {this.handleSend}/>
        </div>
      </div>
    );
  }
}

export default App;

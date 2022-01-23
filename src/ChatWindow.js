import React from 'react';
import SendMessage from './SendMessage.js';
import PropTypes from 'prop-types';

 function ChatWindow(props){

   return(
     <div className="chat-window">
     	<h2>Super Awesome Chat</h2>
     	<div className="name sender">{props.username}</div>

        <ul className="message-list">
          {props.messages.map((message, index) => (
            <li  key={index}
          className={
            message.username === props.username ? 'message sender' : 'message recipient'
          }>
          <p>{`${message.username}: ${message.text}`}</p>
             </li>
            ))}
        </ul>
        <SendMessage handleSend = {props.handleSend} username={props.username}/>
      </div>
   );
}

ChatWindow.propTypes = {
	message:PropTypes.object.isRequired,
    username:PropTypes.string.isRequired,
    handleSend:PropTypes.func.isRequired,
}

export default ChatWindow;

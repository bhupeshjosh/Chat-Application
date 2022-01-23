import React from 'react';
import PropTypes from 'prop-types';

class SendMessage extends React.Component{
	constructor(props){
    	super(props);
      	this.state={
        	message:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  	isDisabled = ()=>{
    	return (this.state.message ==='' ? true: false);
    }
  
    handleChange(event){
		this.setState(
          {message:event.target.value,}
        );
    } 
  
  	handleSubmit(event){
    	event.preventDefault();
      	this.props.handleSend({username:this.props.username,text:this.state.message,});
      	this.setState({
        	message:'',
        });
    }
      render(){
      	return(
              <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input 
          			type="text" 
          			className="form-control" 
          			placeholder="Enter your message..."
          			onChange={this.handleChange}
  					value={this.state.message}/>
  
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>      
        );
      }
}

SendMessage.propTypes = {
	username : PropTypes.string.isRequired,
  	handleSend:PropTypes.func.isRequired,
}
export default SendMessage;
import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props)

    this.state ={
      userName: props.user,
      message: ''
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.onUserChange = this.onUserChange.bind(this)
  }

  onMessageChange(event){
    this.setState({message: event.target.value})
  }

  handleMessageChange(event){
    if(event.key === 'Enter'){
      // check to see if username has changed, if so, send event to update username in parent
      // send update user event
      this.props.newPost(this.state.message)
      //
      event.target.value = '';
    }
  }
  onUserChange(event){
    this.setState({userName: event.target.value})
  }
   handleUserNameChange(event){
    this.props.newUser(this.state.userName)

  }
  render(){
    return (
    <footer className="chatbar">
      <input className="chatbar-username" value={this.state.userName} onChange={this.onUserChange} placeholder="Your Name (Optional"  onBlur={this.handleUserNameChange}/>
      <input className="chatbar-message" value={this.state.message}  onChange={this.onMessageChange} placeholder="Type a message and hit ENTER" onKeyUp={this.handleMessageChange} />
    </footer>
    )
  }
}

export default ChatBar;
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
      this.props.newPost(this.state.message);
      event.target.value = '';
    }
  }
  onUserChange(event){
    this.setState({userName: event.target.value})
  }

  userChangebyEnter(event){
     if(event.key === 'Enter'){
      this.props.newUser(this.state.userName);
      onBlur = ""
    }
  }
  // while this function could be implemented by using enter, I decided to use onBlur instead,
  // giving the user the ability to tab or click off the user name and having the appropriate change triggered.
  // I did not find hitting the "enter" key when changing user name a natural process as you would still need to tab over or click over thereafter.
  // The way I have set it up essentialy completes two jobs in one action

   handleUserNameChange(event){
    this.props.newUser(this.state.userName)
  }
  render(){
    return (
    <footer className="chatbar">
      <input className="chatbar-username" onChange={this.onUserChange} placeholder="Your Name (Optional)" onBlur={this.handleUserNameChange}/>
      <input className="chatbar-message"  onChange={this.onMessageChange} placeholder="Type a message and hit ENTER" onKeyUp={this.handleMessageChange} />
    </footer>
    )
  }
}

export default ChatBar;
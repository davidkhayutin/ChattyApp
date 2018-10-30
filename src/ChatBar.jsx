import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props)

    this.state ={
      currentUser: this.props.user,
      message: ''
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
  }

  handleMessageChange(event){
    this.setState({message: event.target.value})
    if(event.key === 'Enter'){
      console.log(event)
      // check to see if username has changed, if so, send event to update username in parent
      // send update user event
      this.props.newPost(this.state.message, this.state.currentUser)
      //
      event.target.value = '';
    }
    console.log(event.key)
  }
   handleUserNameChange(event){
    this.setState({currentUser: event.target.value})
    ///
  }
  render(){
    return (
    <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional" defaultValue={this.state.currentUser} onKeyUp={(e) => this.handleUserNameChange(e)}/>
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={(e) => this.handleMessageChange(e)} />
    </footer>
    )
  }
}

export default ChatBar;
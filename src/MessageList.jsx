import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    const messages = this.props.messages.map((messages) =>
      <Message username={messages.username} type={messages.type} content={messages.content} key={messages.id} color={messages.color}/>
    )
  return(
   <main className="messages">
  {messages}
  </main>
  )
  }
}
export default MessageList;
import React, {Component} from 'react';

class Message extends Component {
  render() {
    let userColor = {color: this.props.color}
    console.log(userColor)
    return (

      <div className="message">
      {this.props.type === 'changedName' ?
      <div className="message system">{this.props.content}</div>
      :
      <div>
      <span className="message-username" style={userColor}>{this.props.username}</span>
      <span className="message-content">{this.props.content}</span>
      </div>
      }
      </div>
    );
  }
}
export default Message;
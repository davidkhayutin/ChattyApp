
import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const data =
{
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?"
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};


class App extends Component {
   constructor(props) {
    super(props);
     this.state = {
      currentUser: data.currentUser.name,
      messages: data.messages
    };
     this.newPost = this.newPost.bind(this);
  }
   newPost(content, username) {
    const newMessage = {
      id: this.state.messages.length + 1,
      username,
      content
    }
    let messageArray = [...this.state.messages, newMessage];
    this.setState({messages: messageArray})
    console.log(this.state.currentUser)
    console.log('username', username)
  }
   render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} newPost={this.newPost} />
      </div>
    );
  }
}
export default App;

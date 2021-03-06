
import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

let ws = new WebSocket("ws://0.0.0.0:3001");

const data =
{
  currentUser: {name: "David"}, // optional. if currentUser is not defined, it means the user is Anonymous
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
      currentUser: data.currentUser,
      messages: [],
      type: '',
      count: 0
    };
     this.newPost = this.newPost.bind(this);
     this.newUser = this.newUser.bind(this)
  }

  componentDidMount() {

     ws.onopen = (ws) => {
      console.log('connected to the server');

    };

    ws.onmessage = (broadcast) =>{

      let broadcastMessage = JSON.parse(broadcast.data);
      let usersOnline = broadcastMessage.count

      switch(broadcastMessage.type){
        case "connection" :
        let usersOnline = broadcastMessage.count
        let newcolor = broadcastMessage.color
        this.setState({count: usersOnline})
        break;
        case "changedMessage" :
        case "changedName" :
        let messages = [...this.state.messages, broadcastMessage];
        this.setState( {messages: messages} )
      }
    }

  }

  newPost(content) {
    const newMessage = {
      type: "changedMessage",
      count: this.state.count,
      username: this.state.currentUser.name,
      content
    }
    ws.send(JSON.stringify(newMessage));
  }


  newUser(name){
   if(name === this.state.currentUser){
    return;
   } else {
    let changedName = {
      type: "changedName",
      content: `${this.state.currentUser.name} changed their name to ${name}`,
    }
    ws.send(JSON.stringify(changedName))
   }
    this.setState({currentUser: {name}})
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
           <span className='navbar-users'>Number of users online: {this.state.count}</span>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser.name} newPost={this.newPost} newUser={this.newUser} />
      </div>
    );
  }
}
export default App;

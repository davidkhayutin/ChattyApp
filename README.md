Chatty App
=====================


Chatty App allows users to communicate in a mock chatroom environment using webSockets to provide real time updates. Users are able to change their names, and all active windows will be notified of the change. Each new window has its own color that the user-name will appear in. This web application is built with React, Express, WebSockets, Node.js, Babel, and Sass.

### Usage

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000

```
### Screenshot GIFS


!["The main page you see on loading including different color text for each user"](https://github.com/davidkhayutin/ChattyApp/blob/master/docs/Main.gif)
!["Adding a new window to the conversation by using web-sockets"](https://github.com/davidkhayutin/ChattyApp/blob/master/docs/AddingNewWindow.gif)
!["Closing conversation windows, and watching the client count adjust dynamically"](https://github.com/davidkhayutin/ChattyApp/blob/master/docs/UserCountChanges.gif)


### Dependencies

* react
* react-dom
* webpack
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* css-loader
* node-sass
* sass-loader
* sockjs-client
* style-loader
* express
* ws
* uuid
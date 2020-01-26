import React, { Component } from 'react';
import UserInput from './components/UserInput';
import ConnectedUsers from './components/Users';
// import {Connect} from 'react-redux'

class App extends Component {
	render() {
		return (
			<div className="App">
				<UserInput />
				<ConnectedUsers />
			</div>
		);
	}
}

// mapStateToStore=(state) => { }

export default App;

import React, { Component } from 'react';
import './css/app.css'

class App extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
			<div id="appContainer">
				<img
					class="gifFrame"
					src="https://media.giphy.com/media/6D5Vd6XuXsaNG/giphy.gif"
					alt="Arnold Gif"
				/>
				<div className="getToTheChoppaa">
					MEGA PIIYYMMPP DANIEL ARRNNOOLLD SCHWARTZENEGGGAA
				</div>
				<div className="getToTheChoppaa">
					GET TO THE CHOPPAAA!
				</div>
				<img
					class="gifFrame"
					src="https://media.giphy.com/media/hwn4F7gOauL5u/giphy.gif"
					alt="Arnold Gif"
				/>
			</div>
		)
	}
}

export default App;
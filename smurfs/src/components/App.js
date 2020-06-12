import React, { Component } from "react";
import "./App.css";
import { SmurfProvider } from "./context/SmurfContext";
import Form from "./Form";
import Cards from "./cards";
class App extends Component {
	render() {
		return (
			<SmurfProvider>
				<div className="App">
					<Form />
					<Cards />
				</div>
			</SmurfProvider>
		);
	}
}

export default App;

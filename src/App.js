import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./Routes";

import "./App.css";
import CheckAuthentication from "./CheckAuthentication";

function App() {
	return (
		<Provider store={store}>
			<CheckAuthentication>
				<Routes />
			</CheckAuthentication>
		</Provider>
	);
}

export default App;

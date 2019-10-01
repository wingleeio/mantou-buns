import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import LoginModal from "./views/Login/LoginModal";
import Login from "./views/Login";
import RegisterModal from "./views/Register/RegisterModal";
import Register from "./views/Register";
import SettingsModal from "./views/Settings/SettingsModal";
import Settings from "./views/Settings";
import PostModal from "./views/Post/PostModal";
import Post from "./views/Post";

function Routes() {
	return (
		<Router>
			<Route component={ModalSwitch} />
		</Router>
	);
}

class ModalSwitch extends React.Component {
	previousLocation = this.props.location;

	componentWillUpdate(nextProps) {
		const { location } = this.props;

		if (
			nextProps.history.action !== "POP" &&
			(!location.state || !location.state.modal)
		) {
			this.previousLocation = this.props.location;
		}
	}

	render() {
		const { location = {} } = this.props;
		const modal =
			location.state &&
			location.state.modal &&
			this.previousLocation !== location;

		return (
			<React.Fragment>
				<Switch location={modal ? this.previousLocation : location}>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/settings' component={Settings} />
					<Route path='/post/:id' component={Post} />
				</Switch>
				{modal && (
					<React.Fragment>
						<Route path='/login' component={LoginModal} />
						<Route path='/register' component={RegisterModal} />
						<Route path='/settings' component={SettingsModal} />
						<Route path='/post/:id' component={PostModal} />
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default Routes;

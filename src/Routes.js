import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import LoginModal from "./views/Login/LoginModal";
import Login from "./views/Login";

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
					<Route exact path='/' exact component={Home} />
					<Route path='/login' component={Login} />
				</Switch>
				{modal && <Route path='/login' component={LoginModal} />}
			</React.Fragment>
		);
	}
}

export default Routes;

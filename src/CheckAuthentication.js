import React from "react";
import { connect } from "react-redux";
import { checkAuthentication } from "./store/actions/auth.actions";

function CheckAuthentication(props) {
	const { checkAuthentication } = props;
	React.useEffect(() => {
		checkAuthentication();
	}, [checkAuthentication]);
	return props.children;
}

export default connect(
	() => ({}),
	{
		checkAuthentication
	}
)(CheckAuthentication);

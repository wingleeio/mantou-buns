import React from "react";
import { connect } from "react-redux";
import { Layout, Spin } from "antd";
import { checkAuthentication } from "./store/actions/auth.actions";
import styled from "styled-components";

const Content = styled(Layout.Content)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

function CheckAuthentication(props) {
	const { checkAuthentication, app_loading } = props;
	React.useEffect(() => {
		checkAuthentication();
	}, [checkAuthentication]);
	return app_loading ? (
		<Content>
			<Spin />
		</Content>
	) : (
		props.children
	);
}

export default connect(
	state => ({ app_loading: state.auth.app_loading }),
	{
		checkAuthentication
	}
)(CheckAuthentication);

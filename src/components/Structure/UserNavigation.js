import React from "react";
import { Icon, Button, Avatar, Badge } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const UserNavContainer = styled.div`
	display: flex;
	align-items: center;

	margin-left: 48px;
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 64px;
`;

function UserNavigation({ authenticated, history }) {
	const login = () => {
		history.push({
			pathname: "/login",
			state: { modal: true }
		});
	};

	const register = () => {
		history.push({
			pathname: "/register",
			state: { modal: true }
		});
	};
	return (
		<UserNavContainer>
			{authenticated ? (
				<React.Fragment>
					<IconContainer>
						<Badge count={3}>
							<Icon type='bell' style={{ fontSize: "18px" }} />
						</Badge>
					</IconContainer>
					<Avatar icon='user' />
				</React.Fragment>
			) : (
				<Button.Group>
					<Button type='primary' onClick={login}>
						Login
					</Button>
					<Button type='primary' onClick={register}>
						Register
					</Button>
				</Button.Group>
			)}
		</UserNavContainer>
	);
}

export default withRouter(
	connect(state => ({
		authenticated: state.auth.authenticated,
		user: state.auth.user
	}))(UserNavigation)
);

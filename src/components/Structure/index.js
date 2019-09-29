import React from "react";

import { Layout } from "antd";
import styled from "styled-components";
import Search from "./Search";
import UserNavigation from "./UserNavigation";
import Navigation from "./Navigation";

const Header = styled(Layout.Header)`
	display: flex;
	align-items: center;

	background: white !important;
`;

const Content = styled(Layout.Content)`
	padding: 12px 12px;
	min-height: calc(100vh - 64px) !important;
	display: ${props => {
		switch (props.type) {
			case "centered":
				return "flex";
			default:
				return "block";
		}
	}};
	justify-content: ${props => {
		switch (props.type) {
			case "centered":
			case "centered-h":
				return "center";
			default:
				return "flex-start";
		}
	}};
	align-items: ${props => {
		switch (props.type) {
			case "centered":
				return "center";
			default:
				return "flex-start";
		}
	}};
`;

const Logo = styled.h1`
	padding: 0px;
	margin: 0px;
`;

function Structure(props) {
	return (
		<Layout>
			<Header>
				<Logo>MANTOU</Logo>
				<Search />
				<Navigation />
				<UserNavigation />
			</Header>
			<Content type={props.type}>{props.children}</Content>
		</Layout>
	);
}

export default Structure;

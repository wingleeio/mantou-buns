import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import Search from "./Search";
import UserNavigation from "./UserNavigation";
import Navigation from "./Navigation";

const Header = styled(Layout.Header)`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #e8e8e8;
	height: 65px;
	background: white !important;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 1178px;
	height: 100%;
	margin: 0 auto;
`;

const Content = styled(Layout.Content)`
	margin-top: 64px;
	padding: 25px 0px;
	min-height: ${window.innerHeight}px !important;
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
	display: flex;
	justify-content: center;
	align-items: center;
	color: rgba(0, 0, 0, 0.65);
`;

function Structure(props) {
	return (
		<Layout>
			<Helmet title='Mantou Buns' />
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<Wrapper>
					<Logo>
						<Link to='/'>MANTOU</Link>
					</Logo>
					<Search />
					<Navigation />
					<UserNavigation />
				</Wrapper>
			</Header>
			<Wrapper>
				<Content type={props.type} height={() => window.innerHeight}>
					{props.children}
				</Content>
			</Wrapper>
		</Layout>
	);
}

export default Structure;

import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
	display: flex;
	justify-content: flex-end;

	flex-grow: 2;
`;

function Navigation() {
	return (
		<StyledMenu
			mode='horizontal'
			defaultSelectedKeys={["1"]}
			style={{ lineHeight: "63px" }}>
			<Menu.Item key='1'>Latest</Menu.Item>
			<Menu.Item key='2'>Trending</Menu.Item>
		</StyledMenu>
	);
}

export default Navigation;

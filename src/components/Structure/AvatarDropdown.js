import React from "react";
import { Avatar, Dropdown, Menu, Icon } from "antd";

function AvatarDropdown(props) {
	const { logout } = props;
	return (
		<Dropdown
			placement='bottomCenter'
			overlay={
				<Menu>
					<Menu.Item>
						<Icon type='setting' /> Settings
					</Menu.Item>
					<Menu.Item onClick={logout}>
						<Icon type='logout' /> Logout
					</Menu.Item>
				</Menu>
			}>
			<Avatar icon='user' />
		</Dropdown>
	);
}

export default AvatarDropdown;

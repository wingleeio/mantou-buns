import React from "react";
import { Avatar, Dropdown, Menu, Icon } from "antd";

function AvatarDropdown(props = {}) {
	const { logout, user = {} } = props;
	const { avatar = {} } = user;
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
			<Avatar icon='user' src={avatar ? avatar.url : ""} />
		</Dropdown>
	);
}

export default AvatarDropdown;

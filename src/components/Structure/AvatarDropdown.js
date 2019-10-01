import React from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Dropdown, Menu, Icon } from "antd";

function AvatarDropdown(props = {}) {
	const { logout, user = {}, history } = props;
	const { avatar = {} } = user;

	const openSettings = () => {
		history.push({
			pathname: "/settings",
			state: {
				modal: true
			}
		});
	};
	return (
		<Dropdown
			placement='bottomCenter'
			overlay={
				<Menu>
					<Menu.Item onClick={openSettings}>
						<Icon type='setting' /> Settings
					</Menu.Item>
					<Menu.Item onClick={logout}>
						<Icon type='logout' /> Logout
					</Menu.Item>
				</Menu>
			}>
			<Avatar icon='user' size='large' src={avatar ? avatar.url : ""} />
		</Dropdown>
	);
}

export default withRouter(AvatarDropdown);

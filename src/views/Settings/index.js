import React from "react";
import Structure from "../../components/Structure";
import SettingsForm from "./SettingsForm";
import styled from "styled-components";

import LoginPicture from "./login-bg.jpeg";

const Picture = styled.div`
	position: relative;
	width: 160px;
	background-size: cover;
	background-image: url(${LoginPicture});
`;

const Container = styled.div`
	display: flex;
	background-color: white;
	width: 520px;
	overflow: hidden;
	border-radius: 4px;
`;

function Settings() {
	return (
		<Structure type='centered'>
			<Container>
				<Picture />
				<SettingsForm />
			</Container>
		</Structure>
	);
}

export default Settings;

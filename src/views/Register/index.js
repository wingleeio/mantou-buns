import React from "react";
import Structure from "../../components/Structure";
import RegisterForm from "./RegisterForm";
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

function Register() {
	return (
		<Structure type='centered'>
			<Container>
				<Picture />
				<RegisterForm />
			</Container>
		</Structure>
	);
}

export default Register;

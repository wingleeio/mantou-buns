import React from "react";
import { Modal } from "antd";
import LoginForm from "./LoginForm";
import styled from "styled-components";

import LoginPicture from "./login-bg.jpeg";

const StyledModal = styled(Modal)`
	overflow: hidden;
	.ant-modal-body {
		padding: 0px !important;
	}
`;

const Picture = styled.div`
	width: 120px;
	background-size: cover;
	background-image: url(${LoginPicture});
	margin-right: 24px;
`;

const Container = styled.div`
	display: flex;
`;

function LoginModal({ history }) {
	const [visible, setVisible] = React.useState(true);

	const closeModal = () => {
		setVisible(false);
	};

	const afterClose = () => {
		history.goBack();
	};
	return (
		<StyledModal
			visible={visible}
			footer={null}
			afterClose={afterClose}
			onCancel={closeModal}>
			<Container>
				<Picture />
				<LoginForm />
			</Container>
		</StyledModal>
	);
}

export default LoginModal;

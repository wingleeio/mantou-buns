import React from "react";
import { Modal } from "antd";
import styled from "styled-components";

import LoginPicture from "./login-bg.jpeg";
import SettingsForm from "./SettingsForm";

const StyledModal = styled(Modal)`
	.ant-modal-body {
		padding: 0px !important;
	}
	.ant-modal-content {
		overflow: hidden;
	}
`;

const Picture = styled.div`
	position: relative;
	width: 160px;
	background-size: cover;
	background-image: url(${LoginPicture});
`;

const Container = styled.div`
	display: flex;
`;

function SettingsModal({ history }) {
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
				<SettingsForm />
			</Container>
		</StyledModal>
	);
}

export default SettingsModal;

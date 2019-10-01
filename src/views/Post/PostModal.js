import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PostBody from "./PostBody";

const StyledModal = styled(Modal)`
	/* .ant-modal-body {
		padding: 0px !important;
	} */
	.ant-modal-content {
		overflow: hidden;
	}
`;

function PostModal({ history }) {
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
			onCancel={closeModal}
			width={1178}>
			<PostBody />
		</StyledModal>
	);
}

export default withRouter(PostModal);

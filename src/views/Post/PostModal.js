import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PostBody from "./PostBody";

const StyledModal = styled(Modal)`
	top: 64px !important;
	.ant-modal-body {
		min-height: ${props => props.height - 64}px;
	}
	.ant-modal-content {
		border-radius: 0px;
		overflow: hidden;
	}
`;

function PostModal({ history }) {
	const [visible, setVisible] = React.useState(true);
	const [height, setHeight] = React.useState(window.innerHeight);

	const closeModal = () => {
		setVisible(false);
	};

	const afterClose = () => {
		history.goBack();
	};

	React.useEffect(() => {
		window.addEventListener("resize", () => setHeight(window.innerHeight));
		return () => {
			window.addEventListener("resize", () =>
				setHeight(window.innerHeight)
			);
		};
	}, []);
	return (
		<StyledModal
			visible={visible}
			footer={null}
			afterClose={afterClose}
			onCancel={closeModal}
			width={1178}
			height={height}>
			<PostBody />
		</StyledModal>
	);
}

export default withRouter(PostModal);

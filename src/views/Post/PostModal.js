import React from "react";
import { Modal, Icon } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PostBody from "./PostBody";

const NAV_HEIGHT = 64;
const MODAL_HEADER_HEIGHT = 44;

const StyledModal = styled(Modal)`
	top: 0px !important;
	margin-top: 64px !important;
	height: 0px !important;
	padding-bottom: 0px !important;
	max-width: 1178px;
	.ant-modal-body {
		position: relative;
		min-height: ${props => props.modalHeight}px;
		padding-top: ${MODAL_HEADER_HEIGHT + 1}px !important;
	}

	.ant-modal-content {
		border-radius: 0px;
		overflow: hidden;
	}
`;

const ModalHeader = styled.div`
	position: fixed;
	top: ${NAV_HEIGHT}px;
	height: ${MODAL_HEADER_HEIGHT}px;
	width: 100%;
	max-width: 1178px;
	background-color: black;
	color: rgba(255, 255, 255, 0.8);
	z-index: 2000;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	font-weight: bolder;
	font-size: 0.8em;
	padding: 8px 16px;
`;

const Actions = styled.div`
	flex-grow: 2;
`;
const CloseButton = styled.div`
	flex-shrink: 1;
	cursor: pointer;
`;

function PostModal({ history }) {
	const [visible, setVisible] = React.useState(true);
	const [height, setHeight] = React.useState(window.innerHeight - NAV_HEIGHT);

	const closeModal = () => {
		setVisible(false);
	};

	const afterClose = () => {
		history.goBack();
	};

	React.useEffect(() => {
		window.addEventListener("resize", () =>
			setHeight(window.innerHeight - NAV_HEIGHT)
		);
		return () => {
			window.addEventListener("resize", () =>
				setHeight(window.innerHeight - NAV_HEIGHT)
			);
		};
	}, []);
	return (
		<StyledModal
			visible={visible}
			footer={null}
			afterClose={afterClose}
			onCancel={closeModal}
			modalHeight={height}
			closable={false}
			width='100%'>
			<ModalHeader>
				<Actions />
				<CloseButton onClick={closeModal}>
					<Icon type='close' /> CLOSE
				</CloseButton>
			</ModalHeader>
			<PostBody />
		</StyledModal>
	);
}

export default withRouter(PostModal);

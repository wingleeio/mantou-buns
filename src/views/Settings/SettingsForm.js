import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Upload } from "antd";
import styled from "styled-components";
import { updateUser } from "../../store/actions/auth.actions";

const FormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 2;
	min-height: 380px;
`;

const StyledForm = styled(Form)`
	width: 300px;
	padding: 48px 0px 24px 0px !important;
`;

const LoginButton = styled(Button)`
	width: 100%;
`;

const StyledUpload = styled(Upload)`
	width: 100%;

	.ant-upload {
		width: 100% !important;
	}

	.upload-image {
		border-radius: 4px;
		height: 100%;
		width: 100%;
		max-height: 104px;
		object-fit: cover;
	}
`;

const dummyRequest = ({ file, onSuccess }) => {
	setTimeout(() => {
		onSuccess("ok");
	}, 0);
};

function SettingsForm(props) {
	const { form, updateUser, auth, history } = props;
	const { user_loading, authenticated, user = {} } = auth;
	const { getFieldDecorator, validateFields } = form;
	const { avatar = {}, cover = {} } = user;
	const [state, setState] = React.useState({
		avatar: null,
		cover: null,
		avatarURL: null,
		coverURL: null,
		loadingAvatar: false,
		loadingCoverphoto: false
	});

	const avatarChange = e => {
		if (e.file.status === "done") {
			setState(prevState => ({
				...prevState,
				avatar: e.file.originFileObj,
				avatarURL: URL.createObjectURL(e.file.originFileObj)
			}));
		}
	};

	const coverChange = e => {
		if (e.file.status === "done") {
			setState(prevState => ({
				...prevState,
				cover: e.file.originFileObj,
				coverURL: URL.createObjectURL(e.file.originFileObj)
			}));
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				const postData = new FormData();

				if (values.name !== user.name) {
					postData.append("name", values.name);
				}

				if (state.avatar) {
					postData.append("avatar", state.avatar);
				}

				if (state.cover) {
					postData.append("cover", state.cover);
				}

				updateUser(postData);
			}
		});
	};

	React.useEffect(() => {
		if (!authenticated) {
			history.push("/");
		}
	}, [history, authenticated]);

	return (
		<FormContainer>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Settings {user_loading && <Icon type='loading' />}</h2>
				<p>Customize your profile.</p>
				<Form.Item>
					{getFieldDecorator("name", {
						/*  prettier-ignore */
						rules: [{ required: true, message: "Please input your name!" }]
					})(
						<Input
							/*  prettier-ignore */
							prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
							placeholder='Name'
						/>
					)}
				</Form.Item>
				<Form.Item extra='Change your avatar.'>
					<StyledUpload
						name='avatar'
						listType='picture-card'
						showUploadList={false}
						customRequest={dummyRequest}
						onChange={avatarChange}>
						<div>
							{state.avatarURL || avatar ? (
								<img
									className='upload-image'
									src={
										state.avatarURL
											? state.avatarURL
											: avatar.url
									}
									alt='avatar'
								/>
							) : (
								<React.Fragment>
									<Icon
										type={
											state.loadingAvatar
												? "loading"
												: "plus"
										}
									/>
									<div>Avatar</div>
								</React.Fragment>
							)}
						</div>
					</StyledUpload>
				</Form.Item>
				<Form.Item extra='Change your cover photo.'>
					<StyledUpload
						name='cover'
						listType='picture-card'
						showUploadList={false}
						customRequest={dummyRequest}
						onChange={coverChange}>
						<div>
							{state.coverURL || cover ? (
								<img
									className='upload-image'
									src={
										state.coverURL
											? state.coverURL
											: cover.url
									}
									alt='cover'
								/>
							) : (
								<React.Fragment>
									<Icon
										type={
											state.loadingCover
												? "loading"
												: "plus"
										}
									/>
									<div>Cover Photo</div>
								</React.Fragment>
							)}
						</div>
					</StyledUpload>
				</Form.Item>
				<Form.Item>
					<LoginButton
						type='primary'
						htmlType='submit'
						loading={user_loading}>
						Save Profile
					</LoginButton>
				</Form.Item>
			</StyledForm>
		</FormContainer>
	);
}

export default withRouter(
	connect(
		state => ({
			auth: state.auth
		}),
		{ updateUser }
	)(
		Form.create({
			name: "settings",
			mapPropsToFields: props => ({
				name: Form.createFormField({ value: props.auth.user.name })
			})
		})(SettingsForm)
	)
);

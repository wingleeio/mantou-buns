import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { login } from "../../store/actions/auth.actions";
import styled from "styled-components";

const FormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 2;
	min-height: 380px;
`;

const StyledForm = styled(Form)`
	max-width: 300px;
	padding: 48px 0px 24px 0px !important;
`;

const ForgotLink = styled(Link)`
	float: right;
`;

const LoginButton = styled(Button)`
	width: 100%;
`;

function LoginForm(props) {
	const { form, login, auth, history } = props;
	const { auth_loading, authenticated } = auth;
	const { getFieldDecorator, validateFields } = form;

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => !err && login(values));
	};

	React.useEffect(() => {
		if (authenticated) {
			history.push("/");
		}
	}, [history, authenticated]);

	return (
		<FormContainer>
			<StyledForm onSubmit={handleSubmit}>
				<Form.Item>
					{getFieldDecorator("email", {
						/*  prettier-ignore */
						rules: [{ required: true, message: "Please input your email!" }]
					})(
						<Input
							/*  prettier-ignore */
							prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
							placeholder='Email'
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						/*  prettier-ignore */
						rules: [{ required: true, message: "Please input your Password!" }]
					})(
						<Input
							/*  prettier-ignore */
							prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} /> }
							type='password'
							placeholder='Password'
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true
					})(<Checkbox>Remember me</Checkbox>)}
					<ForgotLink to='/'>Forgot Password</ForgotLink>
					<LoginButton
						type='primary'
						htmlType='submit'
						className='login-form-button'
						loading={auth_loading}>
						Log in
					</LoginButton>
					Or <Link to=''>register now!</Link>
				</Form.Item>
			</StyledForm>
		</FormContainer>
	);
}

export default withRouter(
	Form.create({ name: "login" })(
		connect(
			state => ({
				auth: state.auth
			}),
			{ login }
		)(LoginForm)
	)
);

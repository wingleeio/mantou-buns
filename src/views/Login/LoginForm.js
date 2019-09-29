import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styled from "styled-components";

const FormContainer = styled.div`
	display: flex;
	align-items: center;

	min-height: 380px;
`;

const StyledForm = styled(Form)`
	max-width: 300px;
`;

const ForgotLink = styled(Link)`
	float: right;
`;

const LoginButton = styled(Button)`
	width: 100%;
`;

function LoginForm(props) {
	const { form } = props;
	const { getFieldDecorator } = form;
	return (
		<FormContainer>
			<StyledForm>
				<Form.Item>
					{getFieldDecorator("username", {
						/*  prettier-ignore */
						rules: [{ required: true, message: "Please input your username!" }]
					})(
						<Input
							/*  prettier-ignore */
							prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
							placeholder='Username'
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
						className='login-form-button'>
						Log in
					</LoginButton>
					Or <Link to=''>register now!</Link>
				</Form.Item>
			</StyledForm>
		</FormContainer>
	);
}

export default Form.create({ name: "login" })(
	connect(
		() => ({}),
		{}
	)(LoginForm)
);

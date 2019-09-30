import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { register } from "../../store/actions/auth.actions";
import styled from "styled-components";

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

function RegisterForm(props) {
	const { form, register, auth, history } = props;
	const { auth_loading, authenticated } = auth;
	const { getFieldDecorator, validateFields } = form;

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => !err && register(values));
	};

	React.useEffect(() => {
		if (authenticated) {
			history.push("/");
		}
	}, [history, authenticated]);

	return (
		<FormContainer>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Join Mantou Buns</h2>
				<p>
					Already a member?{" "}
					<Link
						to={{
							pathname: "/login",
							state: {
								modal: true
							}
						}}>
						Login now
					</Link>
				</p>
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
					{getFieldDecorator("password_confirmation", {
						/*  prettier-ignore */
						rules: [{ required: true, message: "Please confirm your Password!" }]
					})(
						<Input
							/*  prettier-ignore */
							prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} /> }
							type='password'
							placeholder='Confirm Password'
						/>
					)}
				</Form.Item>

				<Form.Item>
					<LoginButton
						type='primary'
						htmlType='submit'
						loading={auth_loading}>
						Register
					</LoginButton>
				</Form.Item>
				<small>
					By clicking Register, I confirm that I have read and agree
					to the Mantou Buns <Link to=''>Terms of Service</Link> and{" "}
					<Link to=''>Privacy Policy</Link>.
				</small>
			</StyledForm>
		</FormContainer>
	);
}

export default withRouter(
	Form.create({ name: "register" })(
		connect(
			state => ({
				auth: state.auth
			}),
			{ register }
		)(RegisterForm)
	)
);

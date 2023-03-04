import { useState } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import { Helmet } from "react-helmet-async";
import { IPostLoginPayload, postLogin } from "../../actions/auth.action";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useNavigate, Link } from "react-router-dom";
import ForgotPasswordModal from "./components/forgotPasswordModal";
import useIsRequiredFieldMissing from "../../hooks/useIsRequiredFieldMissing";
import ResetPasswordModal from "../../components/resetPasswordModal";

function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const checkRequiredField = useIsRequiredFieldMissing();

	const [form] = Form.useForm<IPostLoginPayload>();
	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const [isForgotPasswordModalVisible, setIsForgotPasswordModalVisible] = useState(false);

	const validateMessage = {
		required: "${label} is required!",
		types: {
			email: "${label} is not a valid email!",
			number: "${label} is not a valid number!",
		},
		number: {
			range: "${label} must 10 digits",
		},
	};

	const submitHandler = (values: IPostLoginPayload) => {
		dispatch(postLogin(values)).then((res) => {
			localStorage.setItem("access_token", res.access_token);
			localStorage.setItem("refresh_token", res.refresh_token);
			message.success("Login Successful");
			navigate("/");
		});
	};

	return (
		<main className="p-10 flex items-center justify-center">
			<section className="flex w-full justify-around items-center shadow-2xl p-10 rounded-lg max-w-screen-2xl min-h-[80vh]">
				<Helmet>
					<title>Login | Shri Property</title>
					<link rel="canonical" href="https://shriproperty.com/login" />
					<meta name="description" content="Login on Shri Property" />
				</Helmet>

				<ForgotPasswordModal
					isVisible={isForgotPasswordModalVisible}
					setIsVisible={setIsForgotPasswordModalVisible}
				/>

				<ResetPasswordModal />

				<div className="w-1/3 h-auto hidden md:block">
					<img
						src="/images/illustrations/login.svg"
						alt="illustration"
						className="h-full w-full"
					/>
				</div>

				<div className="w-full md:w-1/2">
					<Form
						validateMessages={validateMessage}
						layout="vertical"
						form={form}
						onFinish={submitHandler}
						onChange={() => checkRequiredField(form, setIsRequiredFieldMissing)}
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, type: "email" }]}
						>
							<Input placeholder="info@shriproperty.com" size="large" />
						</Form.Item>

						<Form.Item label="Password" name="password" rules={[{ required: true }]}>
							<Input.Password placeholder="mypasssword" size="large" />
						</Form.Item>

						<Typography.Paragraph className="!mb-0">
							Don&#39;t have an account?{" "}
							<Typography.Link className="text-primary font-semibold">
								<Link to="/signup">Signup</Link>
							</Typography.Link>
						</Typography.Paragraph>

						<Typography.Paragraph>
							<Typography.Link
								className="text-primary font-semibold"
								onClick={() => setIsForgotPasswordModalVisible(true)}
							>
								Forgot Password?
							</Typography.Link>
						</Typography.Paragraph>

						<Button
							type="primary"
							size="large"
							htmlType="submit"
							disabled={isRequiredFieldMissing}
						>
							Sign In
						</Button>
					</Form>
				</div>
			</section>
		</main>
	);
}

export default Login;

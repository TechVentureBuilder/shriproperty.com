import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Helmet } from "react-helmet-async";
import { IPostLoginPayload, postLogin } from "../../../actions/auth.action";
import { useAppDispatch } from "../../../hooks/useAddDispatch";
import { useNavigate } from "react-router-dom";

function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [form] = Form.useForm<IPostLoginPayload>();
	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);

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

	const checkFieldValidation = () => {
		const missingRequiredField = Object.values(form.getFieldsValue()).some(
			(field) => field === undefined || field === "",
		);

		if (!missingRequiredField) setIsRequiredFieldMissing(false);
		else setIsRequiredFieldMissing(true);
	};

	const submitHandler = (values: IPostLoginPayload) => {
		dispatch(postLogin(values)).then((res) => {
			localStorage.setItem("accessToken", res.access_token);
			localStorage.setItem("refreshToken", res.refresh_token);
			message.success("Login Successful");
			navigate("/");
		});
	};

	return (
		<main className="p-10 flex items-center justify-center">
			<section className="flex w-full justify-around items-center shadow-2xl p-10 rounded-lg max-w-screen-2xl">
				<Helmet>
					<title>Login | Shri Property</title>
					<link rel="canonical" href="https://shriproperty.com/login" />
					<meta name="description" content="Login on Shri Property" />
				</Helmet>

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
						onChange={checkFieldValidation}
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

						<Button
							type="primary"
							size="large"
							htmlType="submit"
							disabled={isRequiredFieldMissing}
						>
							Login
						</Button>
					</Form>
				</div>
			</section>
		</main>
	);
}

export default Login;

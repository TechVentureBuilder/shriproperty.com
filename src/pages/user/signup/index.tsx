import { useState } from "react";
import { Form, Input, InputNumber, Button, message } from "antd";
import { Helmet } from "react-helmet-async";
import VerifyAccountModal from "./verifyAccountModal";
import useIsRequiredFieldMissing from "../../../hooks/useIsRequiredFieldMissing";
import { useAppDispatch } from "../../../hooks/useAddDispatch";
import { IPostSignupPayload, postSignup } from "../../../actions/auth.action";

function Signup() {
	const dispatch = useAppDispatch();
	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const [isVerificationModalVisible, setIsVerificationModalVisible] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [signupLoading, setSignupLoading] = useState(false);
	const [form] = Form.useForm<IPostSignupPayload>();

	const validateFields = useIsRequiredFieldMissing();

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

	const submitHandler = async (values: IPostSignupPayload) => {
		try {
			setSignupLoading(true);
			await dispatch(postSignup(values));
			message.success("Account created successfully");

			setUserEmail(values.email);
			setIsVerificationModalVisible(true);
		} finally {
			setSignupLoading(false);
		}
	};

	return (
		<main className="p-10 flex items-center justify-center">
			<VerifyAccountModal
				isVisible={isVerificationModalVisible}
				setIsVisible={setIsVerificationModalVisible}
				email={userEmail}
			/>

			<section className="flex w-full justify-around items-center shadow-2xl p-10 rounded-lg max-w-screen-2xl min-h-[80vh]">
				<Helmet>
					<title>Signup | Shri Property</title>
					<link rel="canonical" href="https://shriproperty.com/signup" />
					<meta
						name="description"
						content="Signup on Shri Property to get exclusive feature of listing your own properties"
					/>
				</Helmet>

				<div className="w-1/3 h-auto hidden md:block">
					<img
						src="/images/illustrations/signup.svg"
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
						onChange={() => validateFields(form, setIsRequiredFieldMissing)}
					>
						<Form.Item label="Name" name="name" rules={[{ required: true }]}>
							<Input placeholder="Shri Property" size="large" />
						</Form.Item>

						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, type: "email" }]}
						>
							<Input placeholder="info@shriproperty.com" size="large" />
						</Form.Item>

						<Form.Item
							label="Phone"
							name="phone"
							rules={[
								{
									required: true,
									type: "number",
									min: 1000000000,
									max: 9999999999,
								},
							]}
						>
							<InputNumber className="w-full" placeholder="9465663009" size="large" />
						</Form.Item>

						<Form.Item label="Password" name="password" rules={[{ required: true }]}>
							<Input.Password placeholder="somestrongpassword" size="large" />
						</Form.Item>

						<Form.Item
							label="Confirm Password"
							name="cpassword"
							rules={[
								{ required: true },
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}
										return Promise.reject(
											new Error("Password and confirm password do not match"),
										);
									},
								}),
							]}
							dependencies={["password"]}
						>
							<Input.Password placeholder="somestrongpassword" size="large" />
						</Form.Item>

						<Button
							type="primary"
							size="large"
							htmlType="submit"
							disabled={isRequiredFieldMissing}
							loading={signupLoading}
						>
							Signup
						</Button>
					</Form>
				</div>
			</section>
		</main>
	);
}

export default Signup;

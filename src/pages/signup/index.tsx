import { useState } from "react";
import { Form, Input, InputNumber, Button, Typography } from "antd";
import { Helmet } from "react-helmet-async";
import useIsRequiredFieldMissing from "../../hooks/useIsRequiredFieldMissing";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IPostSignupPayload, postSignupHandler } from "../../actions/auth.action";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../store";
import { Link } from "react-router-dom";

function Signup() {
	const dispatch = useAppDispatch();
	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const [form] = Form.useForm<IPostSignupPayload>();

	const { signupLoading } = useAppSelector((state: TRootState) => state.auth);

	const validateFields = useIsRequiredFieldMissing();

	const submitHandler = async (values: IPostSignupPayload) => {
		await dispatch(postSignupHandler(values));
	};

	return (
		<main className="p-10 flex items-center justify-center">
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
						layout="vertical"
						form={form}
						onFinish={submitHandler}
						onChange={() => validateFields(form, setIsRequiredFieldMissing)}
					>
						<Form.Item
							label="Name"
							name="name"
							rules={[
								{ required: true, message: "Name is required" },
								{ whitespace: true, message: "Name can't be empty" },
								{ min: 3, message: "Name must be atleast 3 characters long" },
							]}
						>
							<Input placeholder="Shri Property" size="large" />
						</Form.Item>

						<Form.Item
							label="Email"
							name="email"
							rules={[
								{ required: true, message: "Email is required" },
								{ type: "email", message: "Please enter a valid email" },
								{ whitespace: true, message: "Email can't be empty" },
							]}
						>
							<Input placeholder="info@shriproperty.com" size="large" />
						</Form.Item>

						<Form.Item
							label="Phone"
							name="phone"
							rules={[
								{
									required: true,
									message: "Phone number is required",
								},
								{
									type: "number",
									message: "Please enter a valid phone number",
									min: 1000000000,
									max: 9999999999,
								},
							]}
						>
							<InputNumber className="w-full" placeholder="9465663009" size="large" />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{ required: true, message: "Password is required" },
								{ whitespace: true, message: "Password can't be empty" },
							]}
						>
							<Input.Password placeholder="somestrongpassword" size="large" />
						</Form.Item>

						<Form.Item
							label="Confirm Password"
							name="cpassword"
							rules={[
								{ required: true, message: "Confirm password is required" },
								{ whitespace: true, message: "Confirm password can't be empty" },
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

						<Typography.Paragraph>
							Already have an account?{" "}
							<Typography.Link className="text-primary font-semibold">
								<Link to="/login">Login</Link>
							</Typography.Link>
						</Typography.Paragraph>

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

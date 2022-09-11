import { Button, Form, Input, InputNumber, message } from "antd";
import { useState } from "react";
import { postContactAction } from "../../../actions/contacts.action";
import { useAppDispatch } from "../../../hooks/useAddDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { IContact } from "../../../types/interfaces";
import { TRootState } from "../../../types/types";

function Contact() {
	const dispatch = useAppDispatch();
	const { postLoading } = useAppSelector((state: TRootState) => state.contacts);

	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);

	const [form] = Form.useForm<IContact>();

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

	const submitHandler = async (values: IContact) => {
		const res = await dispatch(postContactAction(values));
		form.resetFields();
		message.success(res.message);
	};

	const checkFieldValidation = () => {
		const missingRequiredField = Object.values(form.getFieldsValue()).some(
			(field) => field === undefined || field === "",
		);

		if (!missingRequiredField) setIsRequiredFieldMissing(false);
		else setIsRequiredFieldMissing(true);
	};

	return (
		<main className="p-10">
			<section className="flex w-full justify-around shadow-lg p-10 rounded-lg">
				<div className="w-1/3 h-auto">
					<img
						src="/images/illustrations/mailbox.svg"
						alt="banner"
						className="h-full w-full"
					/>
				</div>

				<div className="w-1/2">
					<Form
						validateMessages={validateMessage}
						layout="vertical"
						form={form}
						onFinish={submitHandler}
						onChange={checkFieldValidation}
					>
						<Form.Item label="Name" name="name" rules={[{ required: true }]}>
							<Input placeholder="Shri Property" size="large" />
						</Form.Item>

						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									type: "email",
								},
							]}
						>
							<Input placeholder="info@shriproperty.com" size="large" />
						</Form.Item>

						<Form.Item
							label="Phone Number"
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

						<Form.Item
							label="Subject"
							name="subject"
							rules={[{ required: true, type: "string", min: 10, max: 100 }]}
						>
							<Input placeholder="3BHK house for sale in SBP" size="large" />
						</Form.Item>

						<Form.Item
							label="Message"
							name="message"
							rules={[{ required: true, type: "string", max: 300 }]}
						>
							<Input.TextArea
								showCount
								maxLength={300}
								rows={5}
								placeholder="Detailed message"
								size="large"
							/>
						</Form.Item>

						<Button
							type="primary"
							size="large"
							htmlType="submit"
							loading={postLoading}
							disabled={isRequiredFieldMissing}
						>
							Submit
						</Button>
					</Form>
				</div>
			</section>
		</main>
	);
}

export default Contact;

import { Button, Form, Input, InputNumber } from "antd";
import { postContactAction } from "../../../actions/contacts.action";
import { useAppDispatch } from "../../../hooks/useAddDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { IContact } from "../../../types/interfaces";
import { TRootState } from "../../../types/types";

function Contact() {
	const dispatch = useAppDispatch();
	const { postLoading } = useAppSelector((state: TRootState) => state.contacts);

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

	const submitHandler = (values: IContact) => {
		dispatch(postContactAction(values)).then(() => {
			form.resetFields();
		});
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
					>
						<Form.Item label="Name" name="name">
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

						<Button type="primary" size="large" htmlType="submit" loading={postLoading}>
							Submit
						</Button>
					</Form>
				</div>
			</section>
		</main>
	);
}

export default Contact;

import { Button, Form, Input } from "antd";

function Contact() {
	const validateMessage = {
		required: "${label} is required!",
		types: {
			email: "${label} is not a valid email!",
			number: "${label} is not a valid number!",
		},
		number: {
			range: "${label} must {max} digits",
		},
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
					<Form validateMessages={validateMessage} layout="vertical">
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
							rules={[{ required: true, type: "number", min: 10, max: 10 }]}
						>
							<Input placeholder="9465663009" size="large" />
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

						<Button type="primary" size="large">
							Submit
						</Button>
					</Form>
				</div>
			</section>
		</main>
	);
}

export default Contact;

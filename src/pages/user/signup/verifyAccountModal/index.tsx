import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import useIsRequiredFieldMissing from "../../../../hooks/useIsRequiredFieldMissing";

interface IVerifyAccountModalProps {
	/**
	 * Whether the modal is visible or not
	 */
	isVisible: boolean;

	/**
	 * Function to update `isVisible` state
	 */
	setIsVisible: any;
}

function VerifyAccountModal({ isVisible, setIsVisible }: IVerifyAccountModalProps) {
	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const [form] = Form.useForm<{ verificationCode: string }>();

	const validateFields = useIsRequiredFieldMissing();

	return (
		<Modal
			title="Verify Your Account!"
			open={isVisible}
			closable={false}
			destroyOnClose
			footer={
				<Button type="primary" disabled={isRequiredFieldMissing}>
					OK
				</Button>
			}
		>
			<Form form={form} onChange={() => validateFields(form, setIsRequiredFieldMissing)}>
				<Form.Item
					label="Verification Code"
					name="verificationCode"
					rules={[{ required: true, message: "Verification code is required" }]}
				>
					<Input placeholder="sent to email" />
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default VerifyAccountModal;

import { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import useIsRequiredFieldMissing from "../../../../hooks/useIsRequiredFieldMissing";
import { useAppDispatch } from "../../../../hooks/useAddDispatch";
import { getVerifyAccount } from "../../../../actions/auth.action";
import { useNavigate } from "react-router-dom";

interface IVerifyAccountModalProps {
	/**
	 * Whether the modal is visible or not
	 */
	isVisible: boolean;

	/**
	 * Function to update `isVisible` state
	 */
	setIsVisible: any;

	/**
	 * Email of the user on which the verification code is sent
	 */
	email: string;
}

interface IVerifyAccountForm {
	verificationCode: string;
}

function VerifyAccountModal({ isVisible, setIsVisible, email }: IVerifyAccountModalProps) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const [verifyAccountLoading, setVerifyAccountLoading] = useState(false);
	const [form] = Form.useForm<IVerifyAccountForm>();

	const validateFields = useIsRequiredFieldMissing();

	const submitHandler = async () => {
		try {
			const values = form.getFieldsValue();
			await dispatch(getVerifyAccount({ email, verificationCode: values.verificationCode }));
			message.success("Account verified successfully");
			setIsVisible(false);
			navigate("/login");
		} finally {
			setVerifyAccountLoading(false);
		}
	};

	return (
		<Modal
			title="Verify Your Account!"
			open={isVisible}
			closable={false}
			destroyOnClose
			footer={
				<Button
					type="primary"
					disabled={isRequiredFieldMissing}
					loading={verifyAccountLoading}
					onClick={submitHandler}
				>
					OK
				</Button>
			}
		>
			<Form
				form={form}
				onFinish={submitHandler}
				onChange={() => validateFields(form, setIsRequiredFieldMissing)}
			>
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

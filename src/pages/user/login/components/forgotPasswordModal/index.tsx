import { useState } from "react";
import { Modal, Form, Input } from "antd";
import useIsRequiredFieldMissing from "../../../../../hooks/useIsRequiredFieldMissing";
import { useAppDispatch } from "../../../../../hooks/useAddDispatch";
import { postForgotPassword } from "../../../../../actions/auth.action";

interface IForgotPasswordModalProps {
	/**
	 * weather the modal is open or not
	 */
	isVisible: boolean;

	/**
	 * This function will update the `isVisible` state
	 */
	setIsVisible: (isVisible: boolean) => void;
}

function ForgotPasswordModal({ isVisible, setIsVisible }: IForgotPasswordModalProps) {
	const dispatch = useAppDispatch();
	const checkRequiredFieldMissing = useIsRequiredFieldMissing();
	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const [postForgotPasswordLoading, setPostForgotPasswordLoading] = useState(false);

	const [form] = Form.useForm<{ email: string }>();

	const submitHandler = async () => {
		try {
			setPostForgotPasswordLoading(true);
			const { email } = form.getFieldsValue();

			await dispatch(postForgotPassword(email));

			setIsVisible(false);
		} finally {
			setPostForgotPasswordLoading(false);
		}
	};

	return (
		<Modal
			open={isVisible}
			title="Enter your email"
			onCancel={() => setIsVisible(false)}
			closable
			okButtonProps={{ disabled: isRequiredFieldMissing, loading: postForgotPasswordLoading }}
			onOk={submitHandler}
		>
			<Form
				form={form}
				onChange={() => checkRequiredFieldMissing(form, setIsRequiredFieldMissing)}
				size="large"
				onFinish={submitHandler}
			>
				<Form.Item
					label="Email"
					help="A verification code will be sent to this email"
					name="email"
					rules={[{ required: true }]}
				>
					<Input placeholder="info@shriproperty.com" size="large" />
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default ForgotPasswordModal;

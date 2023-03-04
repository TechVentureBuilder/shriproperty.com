import { Form, Input, message, Modal } from "antd";
import { useState } from "react";
import { patchResetPassword } from "../../actions/auth.action";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import useIsRequiredFieldMissing from "../../hooks/useIsRequiredFieldMissing";
import { authActions } from "../../slices/auth.slice";
import { TRootState } from "../../store";

function ResetPasswordModal() {
	const dispatch = useAppDispatch();
	const { email, isResetPasswordModalVisible } = useAppSelector(
		(state: TRootState) => state.auth,
	);

	const [form] = Form.useForm<{
		passwordResetCode: string;
		password: string;
		cpassword: string;
	}>();
	const checkRequiredField = useIsRequiredFieldMissing();
	const [isRequiredStateMissing, setIsRequiredStateMissing] = useState(true);
	const [isPatchResetPasswordLoading, setIsPatchResetPasswordLoading] = useState(false);

	const validateMessage = {
		required: "${label} is required!",
	};

	const hideModal = () => {
		dispatch(authActions.setIsResetPasswordModalVisible(false));
	};

	const submitHandler = async () => {
		try {
			setIsPatchResetPasswordLoading(true);
			const values = await form.validateFields();

			await dispatch(
				patchResetPassword(
					{ email, passwordResetCode: values.passwordResetCode },
					{ password: values.password, cpassword: values.cpassword },
				),
			);

			message.success("Password reset successfully");
			hideModal();
		} catch (err: any) {
			message.error(err.error);
		} finally {
			setIsPatchResetPasswordLoading(false);
		}
	};

	return (
		<Modal
			title="Reset Your Password"
			open={isResetPasswordModalVisible}
			onCancel={() => hideModal()}
			destroyOnClose
			closable
			onOk={submitHandler}
			okButtonProps={{
				disabled: isRequiredStateMissing,
				loading: isPatchResetPasswordLoading,
			}}
		>
			<Form
				size="large"
				layout="vertical"
				form={form}
				validateMessages={validateMessage}
				onChange={() => checkRequiredField(form, setIsRequiredStateMissing)}
				onFinish={submitHandler}
			>
				<Form.Item
					label="Verification code:"
					name="passwordResetCode"
					rules={[{ required: true }]}
				>
					<Input placeholder="Verification code" />
				</Form.Item>

				<Form.Item label="New password:" name="password" rules={[{ required: true }]}>
					<Input.Password placeholder="New password" />
				</Form.Item>

				<Form.Item
					label="Confirm password:"
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
				>
					<Input.Password placeholder="Confirm password" />
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default ResetPasswordModal;

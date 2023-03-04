import { Button, Form, InputNumber } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FullPageLoader from "../../components/fullPageLoader";
import useIsRequiredFieldMissing from "../../hooks/useIsRequiredFieldMissing";
import { IGetVerifyAccountPayload, getVerifyAccountHandler } from "../../actions/auth.action";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../store";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const VerifyAccount: FC = () => {
	const [queryString] = useSearchParams();
	const verificationCode = queryString.get("v");
	const token = queryString.get("t");

	const dispatch = useAppDispatch();
	const validateFields = useIsRequiredFieldMissing();
	const navigate = useNavigate();

	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
	const { verifyLoading } = useAppSelector((state: TRootState) => state.auth);

	const [form] = Form.useForm<IGetVerifyAccountPayload>();

	useEffect(() => {
		validateFields(form, setIsRequiredFieldMissing);
	}, [verificationCode]);

	const onSubmitHandler = async (values: IGetVerifyAccountPayload) => {
		try {
			if (token && verificationCode) {
				await dispatch(
					getVerifyAccountHandler({
						verificationCode: values.verificationCode || verificationCode,
						token,
					}),
				);

				navigate("/login");
			}
		} finally {
			return;
		}
	};

	return (
		<>
			{token && verificationCode ? (
				<main className="p-10">
					<Form
						form={form}
						onFinish={onSubmitHandler}
						onChange={() => validateFields(form, setIsRequiredFieldMissing)}
					>
						<Form.Item
							label="OTP"
							name="verificationCode"
							rules={[{ required: true, message: "OTP is required" }]}
							initialValue={verificationCode}
						>
							<InputNumber defaultValue={verificationCode || ""} />
						</Form.Item>

						<Button
							type="primary"
							size="large"
							htmlType="submit"
							loading={verifyLoading}
							disabled={isRequiredFieldMissing}
						>
							Verify
						</Button>
					</Form>
				</main>
			) : (
				<FullPageLoader />
			)}
		</>
	);
};

export default VerifyAccount;

import { FC } from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import "./button.scss";

type ButtonTypes = "submit" | "reset" | "button";

/* --------------------------------- ANCHOR Button Primary --------------------------------- */

interface BPrimaryProps {
	/**
	 * Text/Component to show on button
	 *
	 * @type {(string | JSX.Element)}
	 */
	title: string | JSX.Element;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * This prop defines that what type of styling should button have
	 *
	 * @type {ButtonTypes}
	 */
	type?: ButtonTypes;

	/**
	 * This prop defines if shows loading indicator or not
	 *
	 * @type {boolean}
	 */
	loading?: boolean;

	/**
	 * This prop defines inline style for button
	 *
	 * @type {ObjectWithAnyKeys}
	 */
	style?: ObjectWithAnyKeys;

	/**
	 * This function will be executed every time button is clicked
	 *
	 * @type {*}
	 */
	onClick?: any;

	/**
	 * This prop defines if button should be disabled or not
	 *
	 * @type {boolean}
	 */
	disabled?: boolean;
}

/**
 * This component renders a primary button with primary color background
 */
export const BPrimary: FC<BPrimaryProps> = ({
	title,
	className,
	style,
	type,
	disabled,
	loading,
	onClick,
}) => {
	return (
		<LoadingButton
			loading={loading}
			style={style}
			className={`${className} btn-primary ${!disabled && "btn-primary--enabled"}
				`}
			type={type ? type : "submit"}
			variant="contained"
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</LoadingButton>
	);
};

BPrimary.defaultProps = {
	className: "",
	loading: false,
	disabled: false,
	type: "submit",
	style: {},
	onClick: () => {},
};

/* --------------------------------- ANCHOR Button Upload --------------------------------- */

interface BUploadProps {
	/**
	 * Text/Component to show on button
	 *
	 * @type {string}
	 */
	title: string;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * What type of files should be uploaded
	 *
	 * @type {string}
	 */
	accept: string;

	/**
	 * This function will be executed every time
	 *  new file is uploaded to this button
	 *
	 * @type {*}
	 */
	onChange?: any;
}

/**
 * This component renders a upload button
 */
export const BUpload: FC<BUploadProps> = ({ title, className, onChange, accept }) => {
	return (
		<Button
			variant="contained"
			component="label"
			className={`${className} btn-primary btn-primary--enabled`}
			onChange={onChange}
		>
			{title}
			<input type="file" multiple hidden accept={accept} />
		</Button>
	);
};

BUpload.defaultProps = {
	className: "",
	onChange: () => {},
};

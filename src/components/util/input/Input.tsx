import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./input.scss";
import { FC } from "react";

interface CheckBoxProps {
	/**
	 * Text to show with checkbox
	 *
	 * @type {string}
	 */
	label: string;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * This function will be executed every time checkbox is checked or unchecked
	 *
	 * @param {*} event
	 */
	onChange(event: any): any;

	/**
	 * This prop defines if checkbox should be checked or not
	 *
	 * @type {boolean}
	 */
	checked?: boolean;
}

/**
 * Check Box with label
 */
export const CheckBox: FC<CheckBoxProps> = ({ checked, onChange, label, className }) => {
	return (
		<FormControlLabel
			checked={checked}
			control={<Checkbox onChange={onChange} />}
			label={label}
			className={`${className} checkbox`}
		/>
	);
};

CheckBox.defaultProps = {
	className: "",
	checked: false,
};

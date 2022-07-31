import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

import "./alert.scss";
import { FC } from "react";

/* --------------------------------- ANCHOR Alert success --------------------------------- */

interface ASuccessProps {
	/**
	 * Text to show on alert
	 *
	 * @type {string}
	 */
	title: string;

	/**
	 * This prop defines that if alert should be visible or not
	 *
	 * @type {boolean}
	 */
	open: boolean;

	/**
	 * This Prop updates the open state
	 *
	 * @type {(open: boolean) => void}
	 */
	setOpen(open: boolean): any;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;
}

/**
 * This component renders a success alert
 * @param {{}} props Props
 * @param {string} props.title title to show on alert
 * @param {boolean} props.open if true alert will open else close
 * @param {string} props.className additional class names
 * @param {string} props.setOpen this will update state of open
 */
export const ASuccess: FC<ASuccessProps> = ({ open, setOpen, title, className }) => {
	return (
		<Collapse in={open}>
			<Alert
				severity="success"
				className={`alert ${className}`}
				action={
					<IconButton
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				<p>{title}</p>
			</Alert>
		</Collapse>
	);
};

ASuccess.defaultProps = {
	className: "",
};

/* --------------------------------- ANCHOR Alert Error --------------------------------- */

interface AErrorProps {
	/**
	 * Text to show on alert
	 *
	 * @type {string}
	 */
	title: string;

	/**
	 * This prop defines that if alert should be visible or not
	 *
	 * @type {boolean}
	 */
	open: boolean;

	/**
	 * This Prop updates the open state
	 *
	 * @type {(open: boolean) => void}
	 */
	setOpen(open: boolean): any;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;
}

/**
 *This component renders a error alert
 * @param {{}} props Props
 * @param {string} props.title title to show on alert
 * @param {boolean} props.open if true alert will open else close
 * @param {string} props.className additional class names
 * @param {string} props.setOpen this will update state of open
 */
export const AError: FC<AErrorProps> = ({ open, setOpen, title, className }) => {
	return (
		<Collapse in={open}>
			<Alert
				severity="error"
				className={`alert ${className}`}
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				<p>{title}</p>
			</Alert>
		</Collapse>
	);
};

AError.defaultProps = {
	className: "",
};

/* --------------------------------- ANCHOR Alert Warning --------------------------------- */

interface AWarningProps {
	/**
	 * Text to show on alert
	 *
	 * @type {string}
	 */
	title: string;

	/**
	 * This prop defines that if alert should be visible or not
	 *
	 * @type {boolean}
	 */
	open: boolean;

	/**
	 * This Prop updates the open state
	 *
	 * @type {(open: boolean) => void}
	 */
	setOpen(open: boolean): any;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;
}

/**
 * This component renders a warning alert
 * @param {{}} props Props
 * @param {string} props.title title to show on alert
 * @param {boolean} props.open if true alert will open else close
 * @param {string} props.className additional class names
 * @param {string} props.setOpen this will update state of open
 */
export const AWarning: FC<AWarningProps> = ({ open, setOpen, className, title }) => {
	return (
		<Collapse in={open}>
			<Alert
				severity="warning"
				className={`alert ${className}`}
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				<p>{title}</p>
			</Alert>
		</Collapse>
	);
};

AWarning.defaultProps = {
	className: "",
};

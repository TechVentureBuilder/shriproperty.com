import { Typography } from "@mui/material";

import "./typography.scss";
import { FC } from "react";

/* --------------------------------- ANCHOR Heading Primary --------------------------------- */

interface HPrimaryProps {
	/**
	 * Text to display as primary heading
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
}

/**
 * This component renders  Primary Heading
 */
export const HPrimary: FC<HPrimaryProps> = ({ className, title }) => {
	return (
		<Typography variant="h1" className={`${className} heading-primary`}>
			{title}
		</Typography>
	);
};

HPrimary.defaultProps = {
	className: "",
};

/* --------------------------------- ANCHOR Secondary Heading --------------------------------- */

interface HSecondaryProps {
	/**
	 * Text to display as secondary heading
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
}

/**
 * This component renders  Secondary Heading
 */
export const HSecondary: FC<HSecondaryProps> = ({ title, className }) => {
	return (
		<Typography variant="h2" className={`${className} heading-secondary`}>
			{title}
		</Typography>
	);
};

HSecondary.defaultProps = {
	className: "",
};

/* --------------------------------- ANCHOR primary Sub title  --------------------------------- */

interface SPrimaryProps {
	/**
	 * Text to display as primary sub title
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
}

/**
 * This component renders  Primary Sub Title
 */
export const SPrimary: FC<SPrimaryProps> = ({ className, title }) => {
	return (
		<Typography variant="subtitle1" className={`${className} subtitle-primary`} component="p">
			{title}
		</Typography>
	);
};

SPrimary.defaultProps = {
	className: "",
};

/* --------------------------------- ANCHOR secondary Sub title --------------------------------- */
interface SSecondaryProps {
	/**
	 * Text to display as secondary sub title
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
}

/**
 * This component renders  Secondary Sub Title
 */
export const SSecondary: FC<SSecondaryProps> = ({ className, title }) => {
	return (
		<Typography variant="subtitle2" className={`${className} subtitle-secondary`} component="p">
			{title}
		</Typography>
	);
};

SSecondary.defaultProps = {
	className: "",
};

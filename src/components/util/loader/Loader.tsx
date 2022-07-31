import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./loader.scss";

interface LoaderProps {
	/**
	 * If true than loader will cover full screen
	 *
	 * @type {boolean}
	 */
	fullScreen?: boolean;

	/**
	 * If true loader will cover full width
	 *
	 * @type {boolean}
	 */
	fullWidth?: boolean;
}

/**
 * Loading indicator
 */
const Loader: FC<LoaderProps> = ({ fullWidth, fullScreen }) => {
	return (
		<div className={`loader ${fullScreen && "loader--full"} ${fullWidth && "loader--width"}`}>
			<CircularProgress />
		</div>
	);
};

Loader.defaultProps = {
	fullScreen: false,
	fullWidth: false,
};

export default Loader;

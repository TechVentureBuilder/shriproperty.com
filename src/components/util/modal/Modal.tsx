import ModalFromMui from "@mui/material/Modal/Modal";
import { FC } from "react";

import "./modal.scss";

interface ModalProps {
	/**
	 * Content to show inside modal
	 *
	 * @type {(string | JSX.Element)}
	 */
	children: string | JSX.Element;

	/**
	 * If modal should be open or not
	 *
	 * @type {boolean}
	 */
	open: boolean;

	/**
	 * This function will be executed every time modal is closed
	 * If this function is node defined than user can't close modal
	 */
	onClose?(): any;

	/**
	 * Additional class names for styling
	 *
	 * @type {string}
	 */
	className?: string;
}

/**
 * This component renders a modal
 */
const Modal: FC<ModalProps> = ({ open, onClose, className, children }) => {
	return (
		<ModalFromMui className="modal" open={open} onClose={onClose}>
			<div className={`modal__content ${className}`}>{children}</div>
		</ModalFromMui>
	);
};

Modal.defaultProps = {
	className: "",
	onClose: () => {},
};

export default Modal;

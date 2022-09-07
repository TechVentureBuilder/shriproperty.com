import { useState, FC } from "react";
import * as Icon from "react-bootstrap-icons";
import { Drawer, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const UserNav: FC = () => {
	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	return (
		<Layout>
			<Header
				className="p-0 flex justify-between items-center"
				style={{ position: "fixed", width: "100%", backgroundColor: "white" }}
			>
				<div>
					<img src="/images/logo/logo.png" alt="Logo" className="w-18 h-20 ml-10" />
				</div>
				<Menu mode="horizontal" defaultSelectedKeys={["2"]} className="px-5">
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>Properties</Menu.Item>
					<Menu.Item>Contact Us</Menu.Item>
					<Menu.Item>List Your&#39;s</Menu.Item>
				</Menu>
				<div className="flex items-center">
					<Link to="/" className="text-secondary hover:text-primary h-20">
						<Icon.PersonCircle size={20} className="mx-5 hover:cursor-pointer " />
					</Link>
					<Icon.List
						size={20}
						className="mr-10 hover:cursor-pointer hover:text-primary"
						onClick={showDrawer}
					/>
				</div>
			</Header>
			<Drawer title="Additional Options" placement="right" onClose={onClose} open={open}>
				<p>Maps</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</Layout>
	);
};

export default UserNav;

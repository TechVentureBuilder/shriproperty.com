import { useState, FC, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Drawer, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.less";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const { Header } = Layout;

const UserNav: FC = () => {
	const location = useLocation();

	const [open, setOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(location.pathname);

	useEffect(() => {
		setSelectedItem(location.pathname);
	}, [location.pathname]);

	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	const menuItems: ItemType[] = [
		{ label: <Link to="/">Home</Link>, key: "/" },
		{ label: <Link to="/properties">Properties</Link>, key: "/properties" },
		{ label: <Link to="/contact">Contact US</Link>, key: "/contact" },
		{ label: <Link to="/list">List Your&#39;s</Link>, key: "/list" },
	];

	return (
		<Layout>
			<Header
				className="flex flex-row items-center justify-between"
				style={{ backgroundColor: "white" }}
			>
				<div>
					<img src="/images/logo/logo.png" alt="Logo" className="w-18 h-20 ml-10" />
				</div>

				<Menu
					mode="horizontal"
					className={`px-5 items-center justify-center hidden md:flex ${styles.menu}`}
					items={menuItems}
					selectedKeys={[selectedItem]}
				/>

				<div className="flex items-center justify-center">
					<div>
						<Link to="/" className="text-secondary hover:text-primary h-20">
							<Icon.PersonCircle size={20} className="mx-5 hover:cursor-pointer " />
						</Link>
					</div>
					<div>
						<Icon.List
							size={20}
							className="mr-10 hover:cursor-pointer hover:text-primary"
							onClick={showDrawer}
						/>
					</div>
				</div>
			</Header>
			<Drawer title="Additional Options" placement="right" onClose={onClose} open={open}>
				{/* TODO: Convert this to menu */}

				<div className="md:hidden block">
					<p>Home</p>
					<p>Properties</p>
					<p>Contact US</p>
					<p>List Your&#39;s</p>
				</div>

				{/* NOTE: Sub menu will be here */}
				<p>Maps</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</Layout>
	);
};

export default UserNav;

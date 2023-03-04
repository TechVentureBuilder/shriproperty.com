import { useState, FC, useEffect } from "react";
import { Search, Person, List } from "react-bootstrap-icons";
import { Drawer, Form, Input, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.less";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import logo from "../../assets/images/logo/logo.png";

const { Header } = Layout;

function UserNav() {
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

	return (
		<header>
			<nav className="flex items-center justify-between px-36 w-full h-28">
				<div className="max-w-[5rem] h-20">
					<Link to="/">
						<img src={logo} alt="logo" className="h-full w-full" />
					</Link>
				</div>

				<ul className="flex list-none items-center justify-between relative mb-0 w-1/3">
					<li className="text-2xl my-12">
						<Link
							to="/"
							className="text-black relative transition-all after:content-[''] after:transition-all after:duration-300 after:absolute after:bottom-[-3px] after:w-0 after:left-0 after:h-[2px] after:bg-primary hover:text-primary hover:after:w-full"
						>
							Home
						</Link>
					</li>
					<li className="text-2xl my-12">
						<Link
							to="/properties"
							className="text-black relative transition-all after:content-[''] after:transition-all after:duration-300 after:absolute after:bottom-[-3px] after:w-0 after:left-0 after:h-[2px] after:bg-primary hover:text-primary hover:after:w-full"
						>
							Properties
						</Link>
					</li>
					<li className="text-2xl my-12">
						<Link
							to="/contact"
							className="text-black relative transition-all after:content-[''] after:transition-all after:duration-300 after:absolute after:bottom-[-3px] after:w-0 after:left-0 after:h-[2px] after:bg-primary hover:text-primary hover:after:w-full"
						>
							Contact US
						</Link>
					</li>
					<li className="text-2xl my-12">
						<Link
							to="/list"
							className="text-black relative transition-all after:content-[''] after:transition-all after:duration-300 after:absolute after:bottom-[-3px] after:w-0 after:left-0 after:h-[2px] after:bg-primary hover:text-primary hover:after:w-full"
						>
							List Your&#39;s
						</Link>
					</li>

					{/* <li className="text-2xl my-12 flex items-center group">
						<input
							type="text"
							placeholder="search"
							className="invisible w-0 p-4 absolute right-0 r-0 bg-primary border-none outline-none rounded text-2xl transition-all duration-500 text-white placeholder:text-white !placeholder:text-4xl group-hover:visible group-hover:opacity-100 group-hover:w-full"
						/>
						<Link to="/" className="z-20">
							<Search className="w-8 h-8 transition-all group-hover:text-white" />
						</Link>
					</li> */}
				</ul>

				<div className="flex items-center">
					<Person className="h-10 w-10 mr-5" />
					<List className="h-10 w-10" />

					<Drawer
						title="Additional Options"
						placement="right"
						onClose={onClose}
						open={open}
					>
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
				</div>
			</nav>
		</header>
	);
}

export default UserNav;

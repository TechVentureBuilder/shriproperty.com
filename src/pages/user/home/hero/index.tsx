import { FC } from "react";
import { Search } from "react-bootstrap-icons";
import "./hero.scss";
import { Typography } from "antd";

const Hero: FC = () => {
	const searchInputHandler = () => {
		alert("search");
	};
	return (
		<>
			<section className="flex justify-around items-center bg-hero bg-cover h-[100vh] w-full -z-1">
				<div>
					<Typography.Title level={1} style={{ color: "white" }} className="ml-10">
						Live in your <span>Dreams</span>
					</Typography.Title>

					<Typography.Paragraph
						style={{
							marginLeft: "2rem",
							color: "white",
							fontSize: "2rem",
							width: "55%",
						}}
					>
						We are recognized for exceeding client expectations and delivering great
						results through dedication, ease of process, and extraordinary services.
					</Typography.Paragraph>
				</div>
				<div
					className="w-24 h-24 rounded-full justify-center relative hover:cursor-pointer"
					style={{ backgroundColor: "#9e7160" }}
					onClick={searchInputHandler}
				>
					<Search
						style={{
							color: "white",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "2rem",
						}}
					/>
				</div>
			</section>
		</>
	);
};

export default Hero;

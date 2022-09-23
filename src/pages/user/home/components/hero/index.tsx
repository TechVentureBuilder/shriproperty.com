import { Button, Typography, Image } from "antd";
import styles from "./index.module.less";
import { Link } from "react-router-dom";
import buyHome from "../../../../../assets/images/categories/buyHome.webp";
import pgRentalImg from "../../../../../assets/images/categories/pgRental.webp";
import listPropertyImg from "../../../../../assets/images/categories/listProperty.webp";
import plotImg from "../../../../../assets/images/categories/plot.webp";
import commercialPropertyImg from "../../../../../assets/images/categories/commercialProperty.webp";

function Hero() {
	return (
		<>
			<section
				className={`p-36 flex justify-between items-center h-[100vh] w-full -z-1 ${styles.background}`}
			>
				<div>
					<Typography.Title
						level={1}
						className="!text-white !text-8xl !font-light tracking-wider"
					>
						Live in your <span>Dreams</span>
					</Typography.Title>

					<Typography.Paragraph className="!w-[60ch] !text-white !text-3xl !tracking-[0.10em] !leading-snug">
						We are recognized for exceeding client expectations and delivering great
						results through dedication, ease of process, and extraordinary services.
					</Typography.Paragraph>

					<Button type="primary" size="large">
						<Link to="/properties">Explore More</Link>
					</Button>
				</div>
			</section>
			<section className="flex justify-between px-36 -mt-32 mb-32">
				<div className="h-[15rem] w-[22rem] mr-12">
					<img
						src={buyHome}
						alt="buy your home"
						className="h-full w-full rounded-3xl object-contain"
					/>
					<Typography.Paragraph className="text-2xl mt-2">
						Buy your home
					</Typography.Paragraph>
				</div>
				<div className="h-[15rem] w-[22rem] mr-12">
					<img
						src={pgRentalImg}
						alt="pg/rental"
						className="h-full w-full rounded-3xl object-contain"
					/>
					<Typography.Paragraph className="text-2xl mt-2">
						PG/Rentals
					</Typography.Paragraph>
				</div>
				<div className="h-[15rem] w-[22rem] mr-12">
					<img
						src={listPropertyImg}
						alt="List your property"
						className="h-full w-full rounded-3xl object-contain"
					/>
					<Typography.Paragraph className="text-2xl mt-2">
						List your property
					</Typography.Paragraph>
				</div>
				<div className="h-[15rem] w-[22rem] mr-12">
					<img
						src={plotImg}
						alt="plot"
						className="h-full w-full rounded-3xl object-contain"
					/>
					<Typography.Paragraph className="text-2xl mt-2">
						Plot to build your own dream
					</Typography.Paragraph>
				</div>
				<div className="h-[15rem] w-[22rem] mr-12">
					<img
						src={commercialPropertyImg}
						alt="commercial property"
						className="h-full w-full rounded-3xl object-contain"
					/>
					<Typography.Paragraph className="text-2xl mt-2">
						Commercial property
					</Typography.Paragraph>
				</div>
			</section>
		</>
	);
}

export default Hero;

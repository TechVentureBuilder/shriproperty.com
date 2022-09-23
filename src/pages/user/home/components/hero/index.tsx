import { Button, Typography } from "antd";
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
				<div className="h-[18rem] w-[28rem] mr-5 after:rounded-3xl cursor-pointer relative after:bg-black after:bg-opacity-10 after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute hover:after:bg-opacity-20 after:transition">
					<img src={buyHome} alt="buy your home" className="h-full w-full rounded-3xl " />
					<Typography.Paragraph className="text-2xl mt-2">
						Buy your home
					</Typography.Paragraph>
				</div>
				<div className="h-[18rem] w-[28rem] mr-5 after:rounded-3xl cursor-pointer relative after:bg-black after:bg-opacity-10 after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute hover:after:bg-opacity-20 after:transition">
					<img src={pgRentalImg} alt="pg/rental" className="h-full w-full rounded-3xl" />
					<Typography.Paragraph className="text-2xl mt-2">
						PG/Rentals
					</Typography.Paragraph>
				</div>
				<div className="h-[18rem] w-[28rem] mr-5 after:rounded-3xl cursor-pointer relative after:bg-black after:bg-opacity-10 after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute hover:after:bg-opacity-20 after:transition">
					<img
						src={listPropertyImg}
						alt="List your property"
						className="h-full w-full rounded-3xl"
					/>
					<Typography.Paragraph className="text-2xl mt-2">
						List your property
					</Typography.Paragraph>
				</div>
				<div className="h-[18rem] w-[28rem] mr-5 after:rounded-3xl cursor-pointer relative after:bg-black after:bg-opacity-10 after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute hover:after:bg-opacity-20 after:transition">
					<img src={plotImg} alt="plot" className="h-full w-full rounded-3xl" />
					<Typography.Paragraph className="text-2xl mt-2">
						Plot to build your own dream
					</Typography.Paragraph>
				</div>
				<div className="h-[18rem] w-[28rem] mr-5 after:rounded-3xl cursor-pointer relative after:bg-black after:bg-opacity-10 after:content-[''] after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute hover:after:bg-opacity-20 after:transition">
					<img
						src={commercialPropertyImg}
						alt="commercial property"
						className="h-full w-full rounded-3xl"
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

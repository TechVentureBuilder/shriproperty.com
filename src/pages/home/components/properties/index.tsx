import { Link } from "react-router-dom";
import { Typography, Button } from "antd";

import Property from "../../../../components/property";

function Properties() {
	return (
		<section className="flex flex-col items-center justify-center px-36">
			<div className="mb-32">
				<Typography.Title level={1} className="!text-primary !mb-0">
					Featured Properties
				</Typography.Title>
			</div>

			<div className="grid justify-center gap-36 grid-cols-[repeat(auto-fill,_minmax(27rem,_auto))]">
				<Property />
				<Property />
				<Property />
				<Property />
				<Property />
				<Property />
			</div>

			<div className="mt-32">
				<Link to="/properties">
					<Button type="primary" size="large">
						Explore More
					</Button>
				</Link>
			</div>
		</section>
	);
}

export default Properties;

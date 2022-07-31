import { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";

import { BPrimary } from "../../../../components/util/button/Button";
import { HPrimary } from "../../../../components/util/typography/Typography";
import get from "../../../../api/get";

import "./properties.scss";
import Loader from "../../../../components/util/loader/Loader";
import Property from "../../../../components/property/Property";

const Properties: FC = () => {
	const [response, setResponse] = useState<Property[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		get("/properties/all?featured=true").then((data: any) => {
			setResponse(data.data);
			setLoading(false);
		});
	}, []);

	return (
		<section className="properties-section">
			<div className="properties-section__headings">
				<HPrimary title="Affordable Homes in Chandigarh" />
			</div>
			{/* Properties */}
			{loading ? (
				<Loader fullWidth />
			) : (
				<div className="properties-section__properties">
					{response.map((property) => (
						<Property property={property} key={property._id} />
					))}
				</div>
			)}
			{/* More Listing Button */}

			<div className="properties-section__btn">
				<Link to="/properties">
					<BPrimary title="More Listings" />
				</Link>
			</div>
		</section>
	);
};

export default Properties;

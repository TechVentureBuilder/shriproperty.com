import { FC } from "react";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import HotelIcon from "@mui/icons-material/Hotel";
import ShowerIcon from "@mui/icons-material/Shower";
import { HSecondary, SSecondary } from "../../components/util/typography/Typography";
import "./property.scss";

interface PropertyProps {
	property: Property;
}

const Property: FC<PropertyProps> = ({ property }) => {
	return (
		<Link to={`/properties/${property._id}`}>
			<div className="properties-section__property">
				{/* Image */}
				<div className="image-container">
					<div className="properties-section__property-image">
						<img src={property.images[0]?.url} alt="property" />
						<div className="properties-section__property-type">{property.type}</div>
					</div>
				</div>
				{/* Mains */}
				<HSecondary title={property.title} className="properties-section__property-title" />

				<h4 className="properties-section__property-price">
					₹ {property.price}
					<span className="price-text">Click here for best price</span>
				</h4>

				<SSecondary
					title={property.description}
					className="properties-section__property-description"
				/>

				{/* IconsBar */}
				<div className="properties-section__property-iconbar">
					<div className="properties-section__property-iconbar-icon">
						<HotelIcon />
						<h4>{property.bedroom || 0}</h4>
					</div>
					<div className="properties-section__property-iconbar-icon">
						<ShowerIcon />
						<h4>{property.bathroom || 0}</h4>
					</div>

					<div className="properties-section__property-iconbar-icon">
						<MapIcon />
						<h4>
							{property.size}
							{property.unit}
						</h4>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Property;

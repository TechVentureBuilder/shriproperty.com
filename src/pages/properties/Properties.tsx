import { useState, useEffect, FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import get from "../../api/get";
import Loader from "../../components/util/loader/Loader";
import NotFound from "../notFound/NotFound";
import Property from "../../components/property";

import "./properties.scss";

const Properties: FC = () => {
	const [searchParams] = useSearchParams();

	const searchQuery: string | null =
		// this will check if search query is present only than convert it to lower case
		searchParams.get("s") && (searchParams.get("s") as string).toLowerCase();

	const [response, setResponse] = useState<Property[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [notFound, setNotFound] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);

		const propertiesFromSession = sessionStorage.getItem("properties");
		const propertiesFromSessionInJSON: Property[] =
			propertiesFromSession && JSON.parse(propertiesFromSession);

		if (!searchQuery && propertiesFromSessionInJSON && propertiesFromSessionInJSON.length > 0) {
			setResponse(propertiesFromSessionInJSON);
			setLoading(false);
		} else {
			get("/properties/all").then((data: any) => {
				// search functionality
				if (searchQuery && data.data.length > 0) {
					const filteredData: Property[] = data.data.filter((property: Property) => {
						return (
							property?.title.toLowerCase().includes(searchQuery) ||
							property?.description.toLowerCase().includes(searchQuery) ||
							property?.address.toLowerCase().includes(searchQuery) ||
							property?.type.toLowerCase().includes(searchQuery) ||
							property?.category.toLowerCase().includes(searchQuery) ||
							property?.status.toLowerCase().includes(searchQuery) ||
							property?.price.includes(searchQuery) ||
							property?.size.includes(searchQuery)
						);
					});

					if (filteredData.length === 0) setNotFound(true);
					else setResponse(filteredData);
				} else {
					sessionStorage.setItem("properties", JSON.stringify(data.data));
					setResponse(data.data);
				}

				setLoading(false);
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery]);

	return (
		<>
			<Helmet>
				<title>Properties | Shri Property</title>
				<link rel="canonical" href="https://shriproperty.com/properties" />
				<meta
					name="description"
					content="Check out all type of properties/real-estate at reasonable rates"
				/>
			</Helmet>

			{loading ? (
				<Loader fullScreen />
			) : (
				<section className="properties-section">
					{notFound ? (
						<NotFound comingSoon />
					) : (
						<>
							<div className="properties-section__properties">
								{response.map((property: Property) => (
									<Property key={property._id} />
								))}
							</div>
						</>
					)}
				</section>
			)}
		</>
	);
};

export default Properties;

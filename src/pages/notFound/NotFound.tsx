import { HPrimary } from "../../components/util/typography/Typography";
import { Helmet } from "react-helmet-async";
import "./notFound.scss";
import { FC } from "react";

interface NotFoundProps {
	/**
	 * If true, Another image with coming soon text will be shown.
	 *
	 * @type {boolean}
	 */
	comingSoon?: boolean;
}

/**
 * Not Found component
 * if `comingSoon` prop is `true` than coming soon image will be
 * shown instead of 404
 */
const NotFound: FC<NotFoundProps> = ({ comingSoon }) => {
	return (
		<section className="notFound-section">
			{comingSoon ? (
				<>
					<img src="/images/illustrations/coming-soon.svg" alt="page not found" />

					<HPrimary title="Coming Soon" className="notFound-section__heading" />
				</>
			) : (
				<>
					<Helmet>
						<title>404 | Shri Property</title>
						<link rel="canonical" href="https://shriproperty.com/404" />
						<meta
							name="description"
							content="The Url you have visited is no longer valid"
						/>
					</Helmet>

					<img src="/images/illustrations/page-not-found.svg" alt="page not found" />

					<HPrimary title="Page Not Found" className="notFound-section__heading" />
				</>
			)}
		</section>
	);
};

NotFound.defaultProps = {
	comingSoon: false,
};

export default NotFound;

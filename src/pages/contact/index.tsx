import { Helmet } from "react-helmet-async";
import ContactUsForm from "../../components/contactUsForm";

function Contact() {
	return (
		<main className="p-10 flex items-center justify-center md:h-screen">
			<Helmet>
				<title>Contact US | Shriproperty</title>
				<link rel="canonical" href="https://shriproperty.com/contact" />
				<meta name="description" content="Contact us for any query or suggestion" />
			</Helmet>

			<ContactUsForm />
		</main>
	);
}

export default Contact;

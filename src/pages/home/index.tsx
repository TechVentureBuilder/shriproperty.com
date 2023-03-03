import Hero from "./components/hero";
import Properties from "./components/properties";
import Listing from "./components/listing";
import ContactUsForm from "../../components/contactUsForm";

function Home() {
	return (
		<main>
			<Hero />
			<Properties />
			<Listing />
			<ContactUsForm />
		</main>
	);
}

export default Home;

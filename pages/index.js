import axios from "axios";
import Layout from "../components/layouts/Layout";

export default function Home({ user }) {
	return (
		<Layout>
			<h1 className="text-center text-heading text-4xl font-bold">
				Home
			</h1>
		</Layout>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get("http://localhost:5000/api");

	return {
		props: {
			user: data.user
		}
	};
}

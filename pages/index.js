import axios from "axios";
import Main from "../components/layouts/Main";

export default function Home({ children, user }) {
	return (
		<Main>
			{children}
			<h1>Welcome {user}</h1>
		</Main>
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

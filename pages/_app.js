import Nav from "../components/layouts/Nav";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

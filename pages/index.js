import Link from "next/link";
import axios from "axios";
import Nav from "../components/nav";

export default function Home({ user }) {
	return (
		<>
			<Nav />
			<div className="md:flex bg-white rounded-lg p-24 justify-center">
				<img
					className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
					src="https://avatars0.githubusercontent.com/u/41994701?s=460&u=35dae1253908bbc1c7d1295faaff9a727b7c39de&v=4"
				/>
				<div className="text-center md:text-left">
					<h2 className="text-lg">{user}</h2>
					<div className="text-purple-500">
						<Link href="/about">
							<a>Epic Hawk</a>
						</Link>
					</div>
					<div className="text-gray-600">Twitter: @condinoaj</div>
					<div className="text-gray-600">www.ajpower.com</div>
				</div>
			</div>
		</>
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

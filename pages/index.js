import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="md:flex bg-white rounded-lg p-24 justify-center">
			<img
				className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
				src="https://avatars0.githubusercontent.com/u/41994701?s=460&u=35dae1253908bbc1c7d1295faaff9a727b7c39de&v=4"
			/>
			<div className="text-center md:text-left">
				<h2 className="text-lg">Al Joseph Condino</h2>
				<div className="text-purple-500">JavaScript developer</div>
				<div className="text-gray-600">Twitter: @condinoaj</div>
				<div className="text-gray-600">www.ajpower.com</div>
			</div>
		</div>
	);
}

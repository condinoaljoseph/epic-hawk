import Head from "next/head";

export default function Main({ children }) {
	return (
		<>
			<Head>
				<title>Epic Hawk</title>
				<link
					rel="shortcut icon"
					href="https://cdn2.whatoplay.com/developers/no_image.png"
				/>
			</Head>
			<main id="main-content">
				<div className="md:flex bg-white rounded-lg p-24 justify-center">
					{children}
				</div>
			</main>
		</>
	);
}

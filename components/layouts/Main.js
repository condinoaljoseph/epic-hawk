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
			<main id="main-content" className="w-screen h-screen bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 p-8">
					{children}
				</div>
			</main>
		</>
	);
}

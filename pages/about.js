import Link from "next/link";

export default function About({ user }) {
	return (
		<div className="md:flex bg-white rounded-lg p-24 justify-center">
			<h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
				Next.js + Tailwind CSS 2.0
			</h1>
			<div className="text-center md:text-left">
				<div className="text-gray-600">version 1.0.0</div>
				<div className="text-gray-600">
					<Link href="/">
						<a>www.epichawk.com</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

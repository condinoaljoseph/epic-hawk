export default function Main({ children }) {
	return (
		<main id="main-content" className="min-h-screen bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 p-8">{children}</div>
		</main>
	);
}

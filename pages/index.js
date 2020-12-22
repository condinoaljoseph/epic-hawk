import axios from '../utils/axios/base';
import Layout from '../components/layouts/Layout';

export default function Home({ message }) {
	return (
		<Layout>
			<div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
				<div className="sm:text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
						<span className="block xl:inline">{message}</span>
					</h1>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('/api');

	return {
		props: {
			message: data.message
		}
	};
}

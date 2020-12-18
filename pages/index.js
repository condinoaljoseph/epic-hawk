import axios from 'axios';
import Layout from '../components/layouts/Layout';

export default function Home({ message }) {
	return (
		<Layout>
			<div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
				<div className="sm:text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
						<span className="block xl:inline">{message}</span>
					</h1>
					<p className="mt-3 text-base text-secondary">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
						lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
						fugiat aliqua.
					</p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
						<div className="rounded-md shadow">
							<a
								href="#"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:py-4 md:text-lg md:px-10"
							>
								Get started
							</a>
						</div>
						<div className="mt-3 sm:mt-0 sm:ml-3">
							<a
								href="#"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-info md:py-4 md:text-lg md:px-10"
							>
								Live demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('http://localhost:5000/api');

	return {
		props: {
			message: data.message
		}
	};
}

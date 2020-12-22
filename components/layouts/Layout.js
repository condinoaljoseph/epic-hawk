import Head from 'next/head';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

import { useTheme } from '../../utils/themeContext';

export default function Layout({ children }) {
	const { theme } = useTheme();

	return (
		<>
			<Head>
				<title>Epic Hawk</title>
				<link
					rel="shortcut icon"
					href="https://cdn2.whatoplay.com/developers/no_image.png"
				/>
			</Head>
			<div className={`content-transition duration-200 ${theme}`}>
				<Nav />
				<Main children={children} />
				<Footer />
			</div>
		</>
	);
}

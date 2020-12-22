import { useEffect, useState } from 'react';
import axios from '../utils/axios/base';

import Layout from '../components/layouts/Layout';
import Blog from '../components/blogs/Blog';

export default function Blogs({ blogs }) {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setArticles(blogs);
	}, []);

	return (
		<Layout>
			{articles &&
				articles.map((article) => {
					return <Blog article={article} />;
				})}
		</Layout>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get('/api/blogs');

	return {
		props: {
			blogs: data.blogs
		}
	};
}

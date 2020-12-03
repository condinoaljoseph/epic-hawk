import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/layouts/Layout";
import Link from "next/link";

export default function Blogs({ blogs }) {
	const [myBlogs, setMyBlogs] = useState([]);

	useEffect(() => {
		setMyBlogs(blogs);
	}, []);

	return (
		<Layout>
			<h1 className="text-center text-heading text-4xl font-bold">
				Blogs
			</h1>
			<ul>
				{myBlogs &&
					myBlogs.map(({ title, id }) => {
						return (
							<li>
								<Link href={`/blogs/${id}`}>
									<a className="text-primary">{title}</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get("http://localhost:5000/api/blogs");

	return {
		props: {
			blogs: data.blogs
		}
	};
}

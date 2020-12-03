import axios from "axios";
import Layout from "../../components/layouts/Layout";

const getBlog = async (key, id) => {
	const { data } = await axios.get(`https://dev.to/api/articles/${id}`);

	return data;
};

export async function getServerSideProps(context) {
	const data = await getBlog(null, context.params.id);

	return {
		props: {
			data: data
		}
	};
}

export default ({ data }) => {
	return (
		<Layout>
			<h1>{data.title}</h1>
		</Layout>
	);
};

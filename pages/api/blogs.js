import axios from 'axios';

export default async (req, res) => {
	try {
		const { data } = await axios.get('https://dev.to/api/articles');
		res.status(200).json({ blogs: data });
	} catch (error) {
		res.status(404);
	}
};

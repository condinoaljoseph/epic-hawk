import axios from 'axios';

export default async (req, res) => {
	try {
		const { data } = await axios.get('http://localhost:9000');
		res.status(200).json(data);
	} catch (error) {
		res.status(400);
	}
};

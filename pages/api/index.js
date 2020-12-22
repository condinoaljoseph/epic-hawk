import axios from '../../utils/axios/api';

export default async (req, res) => {
	try {
		const { data } = await axios.get('/');
		res.status(200).json(data);
	} catch (error) {
		res.status(400);
	}
};

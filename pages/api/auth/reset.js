import axios from '../../../utils/axios/api';

export default async (req, res) => {
	try {
		if (req.method === 'POST') {
			const { data } = await axios.post('/auth/recover', {
				email: req.body.email
			});

			res.status(200).json(data);
		}
	} catch (e) {
		console.log(e.response.data);
		res.status(400).json(e.response.data);
	}
};

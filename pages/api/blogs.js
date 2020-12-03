import axios from "axios";

export default (req, res) => {
	axios
		.get("https://dev.to/api/articles")
		.then((response) => {
			res.status(200).json({ blogs: response.data });
		})
		.catch((error) => console.log(error));
};

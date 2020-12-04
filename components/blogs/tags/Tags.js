import React, { useEffect, useState } from "react";
import Tag from "./Tag";

const Tags = ({ tags, id }) => {
	const [devTags, setDevTags] = useState([]);

	useEffect(() => {
		setDevTags(tags);
	}, [id]);

	return <div>{devTags && devTags.map((tag) => <Tag tag={tag} />)}</div>;
};

export default Tags;

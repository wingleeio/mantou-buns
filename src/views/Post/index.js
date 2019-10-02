import React from "react";
import PostBody from "./PostBody";
import { Card } from "antd";
import Structure from "../../components/Structure";

function Post() {
	return (
		<Structure type='centered-h'>
			<PostBody />
		</Structure>
	);
}

export default Post;

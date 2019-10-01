import React from "react";
import PostBody from "./PostBody";
import { Card } from "antd";
import Structure from "../../components/Structure";

function Post() {
	return (
		<Structure type='centered-h'>
			<Card>
				<PostBody />
			</Card>
		</Structure>
	);
}

export default Post;

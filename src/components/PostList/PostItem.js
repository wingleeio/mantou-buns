import React from "react";
import { List } from "antd";
import styled from "styled-components";
import PostSingle from "../PostSingle";

const Item = styled(List.Item)`
	width: 100%;
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.02);
	}
`;

function PostItem({ item, authenticated, openPost }) {
	const postClick = () => openPost(item.id);
	return (
		<Item onClick={postClick}>
			<PostSingle
				withReplies={false}
				item={item}
				authenticated={authenticated}
			/>
		</Item>
	);
}

export default PostItem;

import React from "react";
import { Avatar, Comment, Icon, Empty } from "antd";
import { convertTimeSince } from "../../helpers";
import styled from "styled-components";

const PostAvatar = styled(Avatar)`
	img {
		width: 100% !important;
		height: 100% !important;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	max-height: 360px;
	background-color: rgba(0, 0, 0, 0.8);
	overflow: hidden;
	border-radius: 4px;
	img {
		width: 100%;
		object-fit: cover;
		object-position: 0 0;
	}
`;

function PostSingle({ withReplies, item, authenticated, postPage }) {
	return (
		<React.Fragment>
			<Comment
				author={item.author.name}
				style={{ width: "100%" }}
				avatar={
					<PostAvatar
						icon='user'
						shape='sqaure'
						size='large'
						src={item.author.avatar && item.author.avatar.url}
					/>
				}
				content={
					<React.Fragment>
						<p>{item.content}</p>
						{item.image && (
							<ImageContainer>
								<img
									src={item.image.url}
									alt='comment attachment'
								/>
							</ImageContainer>
						)}
					</React.Fragment>
				}
				datetime={convertTimeSince(item.created_at)}
				actions={
					authenticated && [
						<span>
							<Icon type='heart' /> {item.likes_count} Like
						</span>,
						<span>
							<Icon type='retweet' /> {item.reposts_count} Repost
						</span>,
						<span>
							<Icon type='message' /> {item.replies.length}{" "}
							Replies
						</span>
					]
				}>
				{withReplies &&
					item.replies.map(post => {
						return (
							<PostSingle
								key={post.id}
								item={post}
								withReplies={false}
								authenticated={authenticated}
							/>
						);
					})}
			</Comment>
			{postPage &&
				item.replies.map(post => {
					return (
						<PostSingle
							key={post.id}
							item={post}
							withReplies={true}
							authenticated={authenticated}
						/>
					);
				})}
			{postPage && item.replies.length === 0 && (
				<Empty description={<span>No replies.</span>} />
			)}
		</React.Fragment>
	);
}

export default PostSingle;

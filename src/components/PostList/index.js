import React from "react";
import { Comment, Avatar, Spin, Card, List, Icon } from "antd";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/posts.actions";
import styled from "styled-components";
import { convertTimeSince } from "../../helpers";

const LoadingCard = styled(Card)`
	display: flex;
	justify-content: center;
	align-items: center;
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

const PostAvatar = styled(Avatar)`
	img {
		width: 100% !important;
		height: 100% !important;
	}
`;

const Item = styled(List.Item)`
	width: 100%;
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.02);
	}
`;

function PostList(props) {
	const { auth, posts } = props;
	const { posts_loading, posts: data = [] } = posts;
	const { authenticated } = auth;

	React.useEffect(() => {
		props.getPosts();
	}, []);
	return posts_loading ? (
		<LoadingCard>
			<Spin size='large' />
		</LoadingCard>
	) : (
		<List
			bordered
			itemLayout='horizontal'
			itemLayout='horizontal'
			dataSource={data}
			style={{ backgroundColor: "white", width: "100%" }}
			renderItem={item => (
				<Item style={{ width: "100%" }}>
					<Comment
						author={item.author.name}
						style={{ width: "100%" }}
						avatar={
							<PostAvatar
								icon='user'
								shape='sqaure'
								size='large'
								src={
									item.author.avatar && item.author.avatar.url
								}
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
									<Icon type='heart' /> {item.likes_count}{" "}
									Like
								</span>,
								<span>
									<Icon type='retweet' /> {item.reposts_count}{" "}
									Repost
								</span>,
								<span>
									<Icon type='message' />{" "}
									{item.replies.length} Replies
								</span>
							]
						}
					/>
				</Item>
			)}
		/>
	);
}

export default connect(
	state => ({ auth: state.auth, posts: state.posts }),
	{ getPosts }
)(PostList);

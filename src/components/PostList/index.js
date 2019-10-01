import React from "react";
import { Comment, Spin, Card, List, Icon } from "antd";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/posts.actions";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import PostItem from "./PostItem";

const LoadingCard = styled(Card)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function PostList(props) {
	const { auth, posts, history } = props;
	const { posts_loading, posts: data = [] } = posts;
	const { authenticated } = auth;

	const openPost = id =>
		history.push({
			pathname: `/post/${id}`,
			state: {
				modal: true
			}
		});

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
				<PostItem
					item={item}
					authenticated={authenticated}
					openPost={openPost}
				/>
			)}
		/>
	);
}

export default withRouter(
	connect(
		state => ({ auth: state.auth, posts: state.posts }),
		{ getPosts }
	)(PostList)
);

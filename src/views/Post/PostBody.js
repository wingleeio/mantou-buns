import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spin, Card } from "antd";
import { getPost } from "../../store/actions/posts.actions";
import PostSingle from "../../components/PostSingle";
import styled from "styled-components";

const LoadingCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PostContainer = styled.div`
	display: flex;
	padding: 24px 0px;
`;

const PostCard = styled(Card)`
	flex-grow: 1;
	margin-right: 24px !important;
	@media (max-width: 768px) {
		margin-right: 0px !important;
	}
`;

const SideCard = styled(Card)`
	min-width: 272px;

	@media (max-width: 768px) {
		display: none;
	}
`;

function PostBody({ match, post, getPost, authenticated, post_loading }) {
	React.useEffect(() => {
		getPost(match.params.id);
	}, [match]);

	return post_loading ? (
		<LoadingCard>
			<Spin size='large' />
		</LoadingCard>
	) : (
		<PostContainer>
			<PostCard>
				<PostSingle
					authenticated={authenticated}
					item={post}
					postPage={true}
				/>
			</PostCard>
			<div>
				<SideCard width={368}>test</SideCard>
			</div>
		</PostContainer>
	);
}

export default withRouter(
	connect(
		state => ({
			post: state.posts.current_post,
			post_loading: state.posts.post_loading,
			authenticated: state.auth.authenticated
		}),
		{ getPost }
	)(PostBody)
);

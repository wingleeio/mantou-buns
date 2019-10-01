import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";
import { getPost } from "../../store/actions/posts.actions";
import PostSingle from "../../components/PostSingle";
import styled from "styled-components";

const LoadingCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
		<PostSingle authenticated={authenticated} item={post} postPage={true} />
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

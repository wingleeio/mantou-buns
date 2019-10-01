const initialState = {
	current_post: {},
	posts: [],
	posts_loading: false,
	post_loading: true
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case "POSTS_GET_SUCCESS":
			return {
				...state,
				posts_loading: false,
				posts: payload.data
			};
		case "POST_GET_SUCCESS":
			return {
				...state,
				post_loading: false,
				current_post: payload
			};
		case "POST_LOADING":
			return {
				...state,
				post_loading: true
			};
		case "POSTS_LOADING":
			return {
				...state,
				posts_loading: true
			};
		default:
			return state;
	}
}

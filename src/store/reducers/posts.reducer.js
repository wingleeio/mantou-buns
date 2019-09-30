const initialState = {
	current_post: {},
	posts: [],
	posts_loading: false
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case "POSTS_GET_SUCCESS":
			return {
				...state,
				posts_loading: false,
				posts: payload.data
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

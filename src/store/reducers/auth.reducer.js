const initialState = {
	authenticated: false,
	user: {}
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		default:
			return state;
	}
}

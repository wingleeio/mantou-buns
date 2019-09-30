import axios from "axios";

const initialState = {
	token: localStorage.token,
	authenticated: false,
	user_loading: false,
	auth_loading: false,
	app_loading: true,
	user: {}
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case "AUTH_SUCCESS":
			const { token = localStorage.token, user } = payload;
			localStorage.token = token;
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			return {
				...state,
				token,
				user: user ? user : payload,
				authenticated: true,
				auth_loading: false,
				app_loading: false
			};
		case "AUTH_LOGOUT":
			axios.defaults.headers.common["Authorization"] = null;
			return {
				...state,
				token: null,
				user: {},
				authenticated: false
			};
		case "AUTH_LOADING":
			return {
				...state,
				auth_loading: true
			};
		case "AUTH_FAILED":
			return {
				...state,
				authenticated: false,
				auth_loading: false,
				app_loading: false
			};
		case "USER_UPDATE_SUCCESS":
			return {
				...state,
				user_loading: false,
				user: payload
			};
		case "USER_UPDATE_LOADING":
			return {
				...state,
				user_loading: true
			};
		case "USER_UPDATE_FAILED":
			return {
				...state,
				user_loading: false
			};
		default:
			return state;
	}
}

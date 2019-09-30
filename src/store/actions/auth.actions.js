import { requestWithHandling } from "../../api";
import {
	LOGIN_ROUTE,
	USER_ROUTE,
	LOGOUT_ROUTE,
	REGISTER_ROUTE
} from "../../api/endpoints";

export const logout = () => dispatch => {
	requestWithHandling({
		url: LOGOUT_ROUTE,
		method: "get",
		callback: data =>
			dispatch({
				type: "AUTH_LOGOUT"
			})
	});
};

export const checkAuthentication = () => dispatch => {
	dispatch({ type: "AUTH_LOADING" });

	requestWithHandling({
		url: USER_ROUTE,
		method: "get",
		callback: data =>
			dispatch({
				type: "AUTH_SUCCESS",
				payload: data
			}),
		onError: () =>
			dispatch({
				type: "AUTH_FAILED"
			})
	});
};

export const login = postData => dispatch => {
	dispatch({ type: "AUTH_LOADING" });

	requestWithHandling({
		url: LOGIN_ROUTE,
		method: "post",
		postData,
		callback: data =>
			dispatch({
				type: "AUTH_SUCCESS",
				payload: data
			}),
		onError: () =>
			dispatch({
				type: "AUTH_FAILED"
			})
	});
};

export const register = postData => dispatch => {
	dispatch({ type: "AUTH_LOADING" });

	requestWithHandling({
		url: REGISTER_ROUTE,
		method: "post",
		postData,
		callback: data =>
			dispatch({
				type: "AUTH_SUCCESS",
				payload: data
			}),
		onError: () =>
			dispatch({
				type: "AUTH_FAILED"
			})
	});
};

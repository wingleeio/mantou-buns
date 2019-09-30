import React from "react";
import { requestWithHandling } from "../../api";
import { notification, Icon } from "antd";
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

export const updateUser = postData => dispatch => {
	dispatch({ type: "USER_UPDATE_LOADING" });

	requestWithHandling({
		url: USER_ROUTE,
		method: "post",
		postData,
		callback: data => {
			dispatch({
				type: "USER_UPDATE_SUCCESS",
				payload: data
			});

			notification.success({
				message: "Updated Profile",
				description: `You're looking good ${data.name}!`,
				icon: <Icon type='smile' style={{ color: "#108ee9" }} />
			});
		},
		onError: () =>
			dispatch({
				type: "USER_UPDATE_FAILED"
			})
	});
};

import { requestWithHandling } from "../../api";
import { POSTS_ROUTE } from "../../api/endpoints";

export const getPosts = query => dispatch => {
	dispatch({ type: "POSTS_LOADING" });
	requestWithHandling({
		url: POSTS_ROUTE,
		method: "get",
		callback: data =>
			dispatch({
				type: "POSTS_GET_SUCCESS",
				payload: data
			})
	});
};

export const getPost = ID => dispatch => {
	dispatch({ type: "POST_LOADING" });
	requestWithHandling({
		url: `${POSTS_ROUTE}/${ID}`,
		method: "get",
		callback: data => {
			dispatch({
				type: "POST_GET_SUCCESS",
				payload: data
			});
		}
	});
};

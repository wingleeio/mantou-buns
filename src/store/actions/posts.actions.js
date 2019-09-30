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

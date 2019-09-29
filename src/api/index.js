import axios from "axios";

// Init axios defaults
(function() {
	const token = localStorage.token;
	if (token) {
		/* prettier-ignore */
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		axios.defaults.headers.common["Authorization"] = null;
	}
})();

// Functions to handle API calls

export function requestWithHandling(args) {
	const {
		url,
		method,
		postData,
		callback = response => console.log(response),
		onError = response => console.log(response)
	} = args;

	axios[method](url, postData)
		.then(response => callback(response.data))
		.catch(error => {
			onError(error.response);
		});
}

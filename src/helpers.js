import moment from "moment";

export const convertTimeSince = date => {
	const utc = moment.utc(date).toDate();
	return moment(utc)
		.local()
		.fromNow();
};

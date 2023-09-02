import axios from 'axios';

async function controller(action, method = 'GET', body) {
	const params = {
		method: method,
    url: action,
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
		},
	};

	if (body) params.data = body;

	try {
		const response = await axios(params);

		return response.data;
	} catch (err) {
		console.error(err);
	}
}



export default controller;
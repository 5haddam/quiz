import axios from 'axios';

async function controller(action, method = 'GET', body = {}) {
  const params = {
    method,
    url: action,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  };

  if (body.length) params.data = body;

  try {
    const response = await axios(params);

    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export default controller;

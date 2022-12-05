import axios from 'axios';

export const API = axios.create({
	baseURL: 'http://localhost:8000/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const callAPI = async (url: string, params: any) => {
	try {
		const response = await API.post(url, params);
		return response;
	} catch (e: any) {
		throw new Error(e);
	}
};

import axios from 'axios';
import { getAccessToken } from '@lib/AuthLocalStorage';

const APIURL = process.env.REACT_APP_API_URL;
const PROXY = window.location.hostname === 'localhost' ? APIURL : '/proxy';

export const API = axios.create({
	baseURL: PROXY,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

API.interceptors.request.use((config) => {
	const token = getAccessToken();

	if (token && config.headers) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
});

export const callPostAPI = async (url: string, params: any) => {
	try {
		const response = await API.post(url, params);
		return response;
	} catch (e: any) {
		throw new Error(e);
	}
};

export const callGetAPI = async (url: string) => {
	try {
		const response = await API.get(url);
		return response;
	} catch (e: any) {
		throw new Error(e);
	}
};

export const callPutAPI = async (url: string, params: any) => {
	try {
		const response = await API.put(url, params);
		return response;
	} catch (e: any) {
		throw new Error(e);
	}
};

export const callDeleteAPI = async (url: string) => {
	try {
		const response = await API.delete(url);
		return response;
	} catch (e: any) {
		throw new Error(e);
	}
};

import axios from 'axios';
import { getAccessToken } from '@lib/AuthLocalStorage';

export const API = axios.create({
	baseURL: 'https://pre-onboarding-selection-task.shop',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${getAccessToken()}`,
	},
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

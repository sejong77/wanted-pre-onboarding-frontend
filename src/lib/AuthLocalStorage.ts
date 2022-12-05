import jwt_decode from 'jwt-decode';

export const setAccessToken = (token: string) => {
	const decodeToken = jwt_decode(token);

	localStorage.setItem('AccessToken', token);
	localStorage.setItem('DecodeAccessToken', JSON.stringify(decodeToken));
};

export const getAccessToken = () => {
	return localStorage.getItem('AccessToken');
};

export const getDecodeAccessToken = () => {
	const decodeAccess = localStorage.getItem('DecodeAccessToken');
	return JSON.parse(decodeAccess);
};

export const removeToken = () => {
	localStorage.removeItem('AccessToken');
	localStorage.removeItem('DecodeAccessToken');
};

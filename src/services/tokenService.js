const subscribers = [];

const lsKey = 'token';

const sendMessage = (...args) => {
	subscribers.forEach(async (cb) => cb(...args));
};

const getToken = () => {
	return localStorage.getItem(lsKey) || '';
};

const subscribe = (cb) => {
	subscribers.push(cb);
	cb(getToken());
};

const setToken = async (tokenValue) => {
	console.log('set token');
	localStorage.setItem(lsKey, tokenValue);
	sendMessage(tokenValue);
};

const clear = () => {
	localStorage.removeItem(lsKey);
	sendMessage('');
};

export default {
	getToken,
	subscribe,
	setToken,
	clear,
};

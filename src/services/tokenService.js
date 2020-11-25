const subscribers = [];

const lsKey = 'token';

const sendMessage = (...args) => {
    subscribers.forEach(async (cb) => cb(...args));
};

const getToken = () => {
    return (
        (localStorage.getItem(lsKey) &&
            JSON.parse(localStorage.getItem(lsKey))) ||
        ''
    );
};

const subscribe = (cb) => {
    subscribers.push(cb);
    cb(getToken());
};

const setToken = async (tokenValue) => {
    localStorage.setItem(lsKey, JSON.stringify(tokenValue));
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

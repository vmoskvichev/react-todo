import { fetchData } from './utils';

const login = async (email, password) => {
    const data = await fetchData('/auth', { email, password }, 'POST');
    return data;
};

const register = async (email, password) => {
    const data = await fetchData('/registration', { email, password }, 'POST');
    return data;
};

export default { login, register };

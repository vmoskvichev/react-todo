import { fetchData } from './utils';

const login = async (email, password) => {
    const { token } = await fetchData('/auth', { email, password }, 'POST');
    return token;
};

export default { login };

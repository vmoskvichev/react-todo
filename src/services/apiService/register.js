import { fetchData } from './utils';

const register = async (email, password) => {
    const { token } = await fetchData(
        '/registration',
        { email, password },
        'POST'
    );
    return token;
};

export default { register };

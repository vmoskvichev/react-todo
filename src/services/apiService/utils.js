export const fetchData = async (url, body, method, headers = {}) => {
    const res = await fetch(`http://localhost:4000${url}`, {
        method,
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json', ...headers },
    });

    if (!res.ok) {
        throw new Error(await res.json());
    } else {
        return await res.json();
    }
};

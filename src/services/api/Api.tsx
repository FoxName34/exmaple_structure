const BASE_URL = 'https://api.example.com';

async function fetchData(endpoint: string ) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
}

export { fetchData };
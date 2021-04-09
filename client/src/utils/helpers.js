function fetcher (endpoint, method, body){
    const baseUrl = "http://localhost:5000/api";
    const url = baseUrl+endpoint;

    return fetch(url, {
            credentials: "include",
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
}

export {
    fetcher
}
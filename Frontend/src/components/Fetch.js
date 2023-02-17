export const getRates = async () => {
    const fetchData = await fetch('https://us-central1-tether-2d7d6.cloudfunctions.net/app/Rates')
    const Data = await fetchData.json();
    return Data;
};

export const placeOrder = async (data) => {
    var fetchData = await fetch('https://us-central1-tether-2d7d6.cloudfunctions.net/app/client', {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'origin': window.location.origin
        }
    });
    return fetchData;
}
export const loginReq = async (data) => {
    const fetchData = await fetch('https://us-central1-tether-2d7d6.cloudfunctions.net/app/login', {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'origin': window.location.origin
        }
    });
    return fetchData;
};
export const setRates = async (data) => {
    const fetchData = await fetch('https://us-central1-tether-2d7d6.cloudfunctions.net/app/rates', {
        method: 'PATCH',
        body: JSON.stringify({
            Rates: data
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'origin': window.location.origin
        }
    });
    return fetchData
}
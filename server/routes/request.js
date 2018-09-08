const moment = require('moment');
const fetch = require('node-fetch').default;

async function callApi(
    key,
    crypto = 'BTC', 
    currency = 'CAD', 
    time = moment().utc().format(), 
    ) {
    try {
        let query = `https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?time=${time}&apikey=${key}`;
        console.log(query);
        console.log('time:', time);
        let data = await fetch(query);
        let json = await data.json();
        console.log('data.json in callApi', json);

        return json;

    } catch(e) {
        console.log('callApi error:', e);
    }
}

module.exports = callApi;



const moment = require('moment');
const fetch = require('node-fetch');

async function callApi(
    key,
    crypto = 'BTC', 
    currency = 'CAD', 
    time = moment().format(), 
    ) {
    try {
        let query = `https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?time=${time}&apikey=${key}`;
        let data = await fetch(query);

        return await data.json();

    } catch(e) {
        console.log('callApi error:', e);
    }
}

module.exports =  callApi;


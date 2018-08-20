const moment = require('moment');
const fetch = require('node-fetch').default;

async function callApi(
    key,
    crypto = 'BTC', 
    currency = 'CAD', 
    time = moment().format(), 
    ) {
    try {
        let query = `https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?time=${time}&apikey=${key}`;
        console.log(query);
        console.log('time:', time);
        let data = await fetch(query);
        // return {
        //     time: '2018-08-20T09:03:23.7913197Z',
        //     asset_id_base: 'BTC',
        //     asset_id_quote: 'CAD',
        //     rate: 8796
        // }
        let json = await data.json();
        console.log('data.json in callApi', json);

        return json;

    } catch(e) {
        console.log('callApi error:', e);
    }
}

module.exports = callApi;


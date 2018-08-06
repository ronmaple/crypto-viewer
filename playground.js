const moment = require('moment');
const fetch = require('node-fetch');

const apiKey = 'B9DADB87-F4E3-45DE-85F0-4D0CD76675C3';


async function GET() {
    try {
        let currentDate = moment().format();
        let query = `https://rest.coinapi.io/v1/exchangerate/BTC/CAD?time=${currentDate}&apikey=${apiKey}`;
        
        let res = await fetch(query);
        let data = await res.json();
        console.log(data);
        
    } catch(e) {

    }
}

GET();
// export default GET();


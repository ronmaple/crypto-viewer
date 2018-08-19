const mongoose = require('mongoose');

const request = require('./request');
// const Crypto = mongoose.model('Crypto');

// console.log(key)

module.exports = (app) => {
    console.log('in controller');

    const keys = require('../config/keys').coinApi;
    const Crypto = mongoose.model('Crypto');

    // request(keys) returns a promise json data. data is destructured in the arguments
    app.get('/api', (req, res) => {
        request(keys)
            .then(({ time, asset_id_base : crypto, asset_id_quote : currency, rate }) => { 

                Crypto.find({}, (err, data) => {
                    if (err) throw err;
                    let updatedPrice = {
                        id: data.length,
                        time,
                        prices: [
                            {
                                crypto,
                                currency,
                                rate
                            }
                        ]
                    }
    
                    let updatedPriceCollection = new Crypto( updatedPrice );
                    updatedPriceCollection.save();
    
                    res.json({
                        crypto,
                        currency,
                        rate,
                        time
                    } || "API not sending");

                })


            })
    })
}

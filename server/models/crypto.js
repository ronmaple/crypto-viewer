const Mongoose = require('mongoose');
const { Schema } = Mongoose;
Mongoose.Promise = global.Promise 

module.exports = function database() {
    console.log('initializing database');
    // Mongoose.connect(require('../config/keys').mongoURI, { useNewUrlParser: true, useMongoClient: true });
    Mongoose.connect(require('../config/keys').mongoURI, { useMongoClient: true });

    const CryptoSchema = new Schema({
        id: Number,
        time: String,
        prices: [ 
            {
                crypto: String,
                currency: String,
                rate: Number
            }
        ]
    })
    
    Mongoose.model('Crypto', CryptoSchema);   
}
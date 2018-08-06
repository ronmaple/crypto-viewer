const Mongoose = require('mongoose');
const { Schema } = Mongoose;

module.exports = function database() {
    console.log('initializing database');
    Mongoose.connect(require('../config/keys').mongoURI, { useNewUrlParser: true });

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
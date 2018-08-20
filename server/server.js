const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
// cors middle ware for api
app.use(cors());
app.use(express.static(publicPath));


// serve public folder for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(publicPath))
    // app.use(express.static('public'));
}

// start database
require('./models/crypto')();

// enable routing
require('./routes/controller')(app);

// fallback for react routing -- not necessarily necessary for this project
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

// console.log('process.env', process.env)
app.listen(process.env.PORT || 8082, () => {
    console.log('app is running');
});
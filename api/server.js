const express = require('express');
const cors = require('cors');
const app = express();

// cors middle ware for api
app.use(cors());

// start database
require('./models/crypto')();
// serve public folder for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'))
}

// enable routing
require('./routes/controller')(app);

const port = process.env || 3000;

app.listen(port, () => {
    console.log(`api server running on port ${port}`);
})
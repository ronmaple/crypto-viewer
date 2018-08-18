const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
// cors middle ware for api
app.use(cors());
app.use(express.static(publicPath));

// start database
require('./models/crypto')();

// serve public folder for production
// if (process.env.NODE_ENV === 'production') {
//     // app.use(express.static(publicPath))
//     app.use(express.static('public'));
// }

// enable routing
require('./routes/controller')(app);

// fallback for react routing -- not necessarily necessary for this project
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

// const port = process.env || 3000;
const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`api server running on port ${port}`);
})
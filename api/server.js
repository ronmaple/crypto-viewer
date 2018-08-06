const express = require('express');
const cors = require('cors');
const app = express();

// cors middle ware for api
app.use(cors());

// start database
require('./models/crypto')();
// enable routing
require('./routes/controller')(app);

const port = 3000;

app.listen(port, () => {
    console.log(`api server running on port ${port}`);
})
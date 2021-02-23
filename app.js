const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use('/images', express.static('images'));
app.use(bodyParser.json());
routes(app);

app.listen(3057, () => {
    console.log('Server running on http://localhost:3057');
});


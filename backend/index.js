const winston = require('winston');
const express = require('express');
const app = express();

require('dotenv').config();
require('./startup/config')();
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();


const port = process.env.PORT || 5000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const swagger = require('express-swagger-generator');
const v1Router = require('../routes/v1');
const swaggerOptions = require('./swagger');
const { APP_DIR } = require('.');
const errorHandler = require('../middlewares/errorHandler.middleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(APP_DIR, 'public')));
app.use('/api/v1', v1Router);

const expressSwagger = swagger(app);
expressSwagger(swaggerOptions);

app.use(errorHandler);

module.exports = app;

const { SWAGGER_PORT, APP_DIR } = require('.');

const options = {
  swaggerDefinition: {
    info: {
      title: 'School CI server',
      version: '1.0.0',
      description: 'School CI server',
    },
    host: `localhost:${SWAGGER_PORT}`,
    basePath: '/api/v1',
    produces: ['application/json'],
    schemes: ['http', 'https'],
  },
  basedir: APP_DIR,
  files: ['src/modules/**/*.routes.js'],
};

module.exports = options;

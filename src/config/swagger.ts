import { APP_DIR } from '.';

const options = {
  swaggerDefinition: {
    info: {
      title: 'School CI server',
      version: '1.0.0',
      description: 'School CI server',
    },
    host: `localhost:${APP_DIR}`,
    basePath: '/api/v1',
    produces: ['application/json'],
    schemes: ['http', 'https'],
  },
  basedir: APP_DIR,
  files: ['src/modules/**/*.routes.js'],
};

export default options;

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import swagger from 'express-swagger-generator';
import v1Router from '../routes/v1';
import swaggerOptions from './swagger';
import { APP_DIR, CLIENT_URL } from '.';
import errorHandler from '../middlewares/errorHandler.middleware';

const app = express();

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', `${CLIENT_URL}`);

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Pragma'
  );

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(APP_DIR, 'public')));
app.use('/api/v1', v1Router);

const expressSwagger = swagger(app);
expressSwagger(swaggerOptions);

app.use(errorHandler);

export default app;

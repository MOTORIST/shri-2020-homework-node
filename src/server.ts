import dotenv from 'dotenv';
dotenv.config();
import app from './config/express';
import { PORT, ENV } from './config';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT} - env (${ENV})`);
});

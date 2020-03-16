require('dotenv').config();
const app = require('./config/express');
const { PORT, ENV } = require('./config');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT} - env (${ENV})`);
});

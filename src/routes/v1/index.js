const express = require('express');

const router = express.Router();

router.get('/status', (_, res) => res.send('Im fine and you'));

module.exports = router;

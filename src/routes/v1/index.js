const express = require('express');
const settingsRouter = require('../../modules/settings/settings.routes');

const router = express.Router();

router.get('/status', (_, res) => res.send('Im fine and you'));
router.use('/settings', settingsRouter);

module.exports = router;

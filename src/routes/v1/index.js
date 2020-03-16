const express = require('express');
const settingsRoutes = require('../../modules/settings/settings.routes');
const buildRoutes = require('../../modules/build/build.routes');

const router = express.Router();

router.get('/status', (_, res) => res.send('Im fine and you'));
router.use('/settings', settingsRoutes);
router.use('/builds', buildRoutes);

module.exports = router;

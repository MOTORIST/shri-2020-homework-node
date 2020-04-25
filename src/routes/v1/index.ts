import express from 'express';
import settingsRoutes from '../../modules/settings/settings.routes';
import buildRoutes from '../../modules/build/build.routes';

const router = express.Router();

router.get('/status', (_, res) => res.send('Im fine and you'));
router.use('/settings', settingsRoutes);
router.use('/builds', buildRoutes);

export default router;

import express from 'express';
import settingsRoutes from '../../modules/settings/settings.routes';
import buildRoutes from '../../modules/build/build.routes';
import pushRoutes from '../../modules/push/push.routes';

const router = express.Router();

router.get('/status', (_, res) => res.send('Im fine and you'));
router.use('/settings', settingsRoutes);
router.use('/builds', buildRoutes);
router.use('/push', pushRoutes);

export default router;

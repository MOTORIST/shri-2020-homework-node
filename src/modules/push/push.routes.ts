import { Router } from 'express';
import { subscribe, unsubscribe, send } from './push.controller';
import validationRules from './push.validation';
import { validate } from 'express-validation';

const router = Router();

router.route('/subscribe').post(validate(validationRules.subscription), subscribe);
router.route('/unsubscribe').get(unsubscribe);
router.route('/send').post(validate(validationRules.send), send);

export default router;

import express from 'express';
import { validate } from 'express-validation';
import controller from './settings.controller';
import validationRules from './settings.validation';

const router = express.Router();

/**
 * Settings model
 *
 * @typedef Settings
 * @property {string} repoName.required
 * @property {string} buildCommand.required - Build command - eg: npm run build
 * @property {string} mainBranch.required - Main branch
 * @property {integer} period - Sync time (minutes) - eg: 10
 */

router
  .route('/')
  /**
   * Return repository settings
   * @route GET /settings
   * @group Settings - Repository settings
   * @returns {Settings.model} 200 - Success
   */
  .get(controller.get)
  /**
   * Create repository settings
   * @route POST /settings
   * @group Settings
   * @param {Settings.model} data.body.required - settings data
   * @returns {Settings.model} 200 - Success
   */
  .post(validate(validationRules.addSettings), controller.add)
  /**
   * @route DELETE /settings
   * @group Settings - Repository settings
   * @returns 204 - Success
   */
  .delete(controller.remove);

export default router;

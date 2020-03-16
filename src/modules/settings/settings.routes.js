const express = require('express');
const controller = require('./settings.controller');

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
  .get(controller.get);

module.exports = router;

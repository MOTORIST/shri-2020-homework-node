const express = require('express');
const controller = require('./build.controller');

const router = express.Router();

module.exports = router;

/**
 * Build model
 *
 * @typedef Build
 * @property {integer} buildNumber.required - Build number - eg: 1
 * @property {string} commitMessage.required - Commit message
 * @property {string} commitHash.required - Commit hash
 * @property {string} authorName.required - Author name
 * @property {date-time} start - Start build date time
 * @property {integer} duration Build duration
 */

router
  .route('/')
  /**
   *  Return list builds
   *  @route GET /builds
   *  @group Build - Build list
   *  @returns {Array.<Build>} 200
   */
  .get(controller.list);

const express = require('express');
const { validate } = require('express-validation');
const controller = require('./build.controller');
const validationRules = require('./build.validation');

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

router
  .route('/:buildId')
  /**
   *  Return build data
   *  @route GET /builds/{buildId}
   *  @group Build
   *  @param {string} buildId.path.required - build id
   *  @returns {Build.model} 200
   */
  .get(validate(validationRules.getBuild), controller.get);

router
  .route('/:commitHash')
  /**
   *  Return build data
   *  @route POST /builds/{commitHash}
   *  @group Build
   *  @param {string} commitHash.path.required - commit hash
   *  @returns {Build.model} 200
   */
  .post(validate(validationRules.addBuild), controller.add);

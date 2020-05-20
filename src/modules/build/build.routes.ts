import { Router } from 'express';
import { validate } from 'express-validation';
import { list, get, add, getBuildLogs } from './build.controller';
import { getBuild, addBuild, getBuildLogs as _getBuildLogs } from './build.validation';

const router = Router();

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
  .get(list);

router
  .route('/:buildId')
  /**
   *  Return build data
   *  @route GET /builds/{buildId}
   *  @group Build
   *  @param {string} buildId.path.required - build id
   *  @returns {Build.model} 200
   */
  .get(validate(getBuild), get);

router
  .route('/:commitHash')
  /**
   *  Return build data
   *  @route POST /builds/{commitHash}
   *  @group Build
   *  @param {string} commitHash.path.required - commit hash
   *  @returns {Build.model} 200
   */
  .post(validate(addBuild), add);

router
  .route('/:buildId/logs')
  /**
   *  Return build data
   *  @route GET /builds/{buildId}/logs
   *  @group Build
   *  @param {string} buildId.path.required - build id
   *  @returns {string} 200
   */
  .get(validate(_getBuildLogs), getBuildLogs);

export default router;

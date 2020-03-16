const { Joi } = require('express-validation');

module.exports = {
  getBuild: {
    params: Joi.object({
      buildId: Joi.string()
        .guid()
        .required(),
    }),
  },
  addBuild: {
    params: Joi.object({
      commitHash: Joi.string()
        .token()
        .required(),
    }),
  },
  getBuildLogs: {
    params: Joi.object({
      buildId: Joi.string()
        .guid()
        .required(),
    }),
  },
};

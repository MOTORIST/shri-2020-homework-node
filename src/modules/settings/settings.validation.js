const { Joi } = require('express-validation');

module.exports = {
  addSettings: {
    body: Joi.object({
      repoName: Joi.string()
        .max(256)
        .required(),
      buildCommand: Joi.string()
        .max(256)
        .required(),
      mainBranch: Joi.string()
        .max(256)
        .required(),
      period: Joi.number()
        .min(1)
        .required(),
    }),
  },
};

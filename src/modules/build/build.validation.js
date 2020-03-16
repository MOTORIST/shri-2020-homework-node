const { Joi } = require('express-validation');

module.exports = {
  getBuild: {
    params: Joi.object({
      buildId: Joi.string().required(),
    }),
  },
};

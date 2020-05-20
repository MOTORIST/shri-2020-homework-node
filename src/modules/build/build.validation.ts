import { Joi } from 'express-validation';

export const getBuild = {
  params: Joi.object({
    buildId: Joi.string().guid().required(),
  }),
};

export const addBuild = {
  params: Joi.object({
    commitHash: Joi.string().token().required(),
  }),
};

export const getBuildLogs = {
  params: Joi.object({
    buildId: Joi.string().guid().required(),
  }),
};

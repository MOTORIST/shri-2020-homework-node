import { Joi } from 'express-validation';

export const send = {
  body: Joi.object({
    title: Joi.string().max(256).required(),
    message: Joi.string().max(256).required(),
  }),
};

export const subscription = {
  body: Joi.object({
    endpoint: Joi.string().max(256).required(),
    keys: Joi.object({
      p256dh: Joi.string().max(256).required(),
      auth: Joi.string().max(256).required(),
    }),
    expirationTime: Joi.number().optional().allow(null),
  }),
};

export default {
  send,
  subscription,
};

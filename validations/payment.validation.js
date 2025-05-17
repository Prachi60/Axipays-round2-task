import Joi from 'joi';

export const paymentSchema = Joi.object({
  amount: Joi.number().positive().required(),
  currency: Joi.string().required(),
  description: Joi.string().allow(''),
  card_no: Joi.string().required(),
  card_expiry: Joi.string().required(),
  card_cvc: Joi.string().required()
});

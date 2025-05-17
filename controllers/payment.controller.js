import * as paymentService from '../services/payment.service.js';
import { paymentSchema } from '../validations/payment.validation.js';
import luhnCheck from '../utils/luhn.js';
import { maskCardNumber, maskCVC } from '../utils/maskCard.js';

export const addPayment = async (req, res, next) => { 
  try {
    const { error } = paymentSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    if (!luhnCheck(req.body.card_no)) {
      return res.status(400).json({ error: 'Invalid card number' });
    }

    const masked = {
      ...req.body,
      card_no: maskCardNumber(req.body.card_no),
      card_cvc: maskCVC(req.body.card_cvc)
    };

    const payment = await paymentService.addPayment(req.params.user_id, masked);
    res.status(201).json({ message: 'Payment added', data: payment });
  } catch (err) {
    next(err);
  }
};

export const getPayments = async (req, res, next) => {
  try {
    const payments = await paymentService.getPayments(req.params.user_id);
    res.status(200).json({ data: payments });
  } catch (err) {
    next(err);
  }
};

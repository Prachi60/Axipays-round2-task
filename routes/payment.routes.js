import express from 'express';
import * as paymentController from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/:user_id/payments', paymentController.addPayment);
router.get('/:user_id/payments', paymentController.getPayments);

export default router;

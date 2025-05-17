import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/users', paymentRoutes);
app.use(errorHandler);

export default app;

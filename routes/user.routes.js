import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

export default router;

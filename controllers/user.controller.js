import * as userService from '../services/user.service.js';
import {createUserSchema } from '../validations/user.validation.js';

export const createUser = async (req, res, next) => {
  
  try {
    const { error } = createUserSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'User created', data: user });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ data: users });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { error } = createUserSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const updated = await userService.updateUser(req.params.user_id, req.body);
    if (!updated) return res.status(404).json({ error: 'User not found' });

    res.status(200).json({ message: 'User updated' });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await userService.deleteUser(req.params.user_id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });

    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};

import express from 'express';
import { deleteUser, getUserById, getUsers, registerUser, updateUser, userLogin } from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', registerUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', userLogin);

export default router;
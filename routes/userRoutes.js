import { Router } from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
const router = Router();



// Get all users
router.get('/', getAllUsers);

// Get a single user by id
router.get('/:id', getUserById);

// Create a new user
router.post('/', createUser);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

export default router;

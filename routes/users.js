import express, { Router } from 'express';
import path from 'path';
import rootpath from '../util/rootpath.js';
import * as usersController from '../controllers/usersController.js';

const router = express();

router.get('/api/users', usersController.getAllUsers);
router.get('/api/users/:id', usersController.getUserById);
router.post('/api/users', usersController.addUser);

export {router as apiUsersRouter};
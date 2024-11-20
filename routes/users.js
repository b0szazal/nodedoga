import express, { Router } from 'express';
import path from 'path';
import rootpath from '../util/rootpath.js';
import * as usersController from '../controllers/usersController.js';

const router = express();

router.get('/api/users', usersController.getAllUsers());

router.get('/api/users/:id', (req, res) => {
    const user = usersController.getUserById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

export {router as apiUsersRouter};
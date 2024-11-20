import express, { Router } from 'express';

const router = express();

router.get('/greeting', (req, res) => {
    res.send('Hello,  Szász Zalán  ');
});

export {router as greetingRouter};
import express, { Router } from 'express';

const router = express();

router.get('/nodejs', (req, res) => {
    res.send('A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.');
});

export {router as nodejsRouter};
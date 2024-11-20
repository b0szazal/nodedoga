import express, { Router } from 'express';

const router = express();

router.get('/express', (req, res) => {
    res.send('Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.');
});

export {router as expressRouter};
import express, { Router } from 'express';
import path from 'path';
import rootpath from '../util/rootpath.js';

const router = express();

router.get('/', (req, res) => {
    res.sendFile(path.join(rootpath, 'public/index.html'));
});

export {router as rootRouter};
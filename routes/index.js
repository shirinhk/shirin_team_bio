import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    //res.send('Hello! I am using Express! and it is so cool')
    res.sendFile(path.join(__dirname,'../views/index.html'));
})

router.get('/shirin', (req, res) => {
    res.send(`This is Shirin's page`);
    //res.sendFile(path.join(__dirname,'../views/index.html'));    
})

router.get('/friend', (req, res) => {
    res.send(`This is Friend's page`);
    //res.sendFile(path.join(__dirname,'../views/index.html'));
})

router.use((req, res) => {
    console.log('Page Does Not Found!')
    res.sendFile(path.join(__dirname,'../views/404.html'));
})

export default router;
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello! I am using Express! and it is so cool')
})

app.get('/shirin', (req, res) => {
    res.send(`This is Shirin's page`);
})

app.get('/friend', (req, res) => {
    res.send(`This is Friend's page`);
})

app.listen(port, () => {
  console.log(`App is running at ${port}/`);
});
require('dotenv').config();
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.status(404).send(
        `<h1 style="text-align:center;margin-top:17vh;">404<br>Page Not Found</h1>`);
});

app.listen(process.env.PORT);
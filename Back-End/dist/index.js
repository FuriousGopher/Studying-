"use strict";
const express = require('express');
const app = express();
const port = 3000;
// @ts-ignore
app.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('OK!');
    }
    else {
        res.send('Hellllllo World!');
    }
});
// @ts-ignore
app.get('/users', (req, res) => {
    res.send(' Samurais!');
});
// @ts-ignore
app.post('/users', (req, res) => {
    res.send('We careate Samurais!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

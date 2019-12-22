require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes');

Object.entries(routes).forEach(([route, router]) => {
    app.use(route, router);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});

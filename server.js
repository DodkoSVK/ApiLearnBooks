const express = require('express');
const bodyParser = require("body-parser");
const Pool = require('pg').Pool;
require('dotenv').config();
const booksRouter = require('./src/routes/booksRouter');



const app = express();
const port = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(201).send({message: "Get / je funkcne."});
});

app.use('/books', booksRouter);

app.get('*', (req, res) => {
    res.status(404).send({message: `Stranka ${req.originalUrl} neexistuje`});
})
app.listen(port, () => {
    console.log(`My Book management application listen on port: ${port}`);
});
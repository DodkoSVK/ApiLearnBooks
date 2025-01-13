const express = require("express");
const bodyParser = require("body-parser");
const Pool = require('pg').Pool;
require('dotenv').config();

const app = express();
const port = process.env.PORT
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(201).send({message: "Get / je funkcne."});
});

app.get('/books', (req, res) => {    
    pool.query('SELECT * FROM public.books', (e, r) => {
        if(e){
            console.log(`We got a problem: ${e}`);
            return res.status(500).send({message: "Neocakavana chyba na strane databazy."});
        }
        if(r){
            if(r.rows.length < 1) 
                return res.status(201).send({message: "V databaze sa nenachadzaju ziadne knihy."});
            
            console.log(`Results: ${r.rows}`);
            res.status(202).json(r.rows);
        }
    });   
});

app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    console.log(`Book ID is ${bookId}`);
    pool.query(`SELECT * FROM public.books WHERE id = ${bookId}`, (e, r) =>{
        if(e){
            console.log(`We got a problem: ${e}`);
            return res.status(500).send({message: "Neocakavana chyba na strane databazy."});
        }
        if(r){
            if(r.rows.length < 1)
                return res.status(201).send({message: `V databaze sa nenachadza kniha s ID: ${bookId}.`});

            console.log(`Results: ${r.rows}`);
            res.status(202).json(r.rows);
        }
    });
    //res.status(201).send({message: "Post / je funkcne."});
});

app.post('/books', (req, res) => {
    const { bookName, bookGenre, bookRating } = req.body;
    console.log(`Nazov knihy: ${bookName}, Zaner: ${bookGenre}, hodnotenie: ${bookRating}`);
    res.status(201).send({message: "Kniha vytvorena"});
});
app.patch('/', (req, res) => {
    res.status(201).send({message: "Patch / je funkcne."});
});
app.delete('/', (req, res) => {
    res.status(201).send({message: "Delete / je funkcne."});
})

app.get('*', (req, res) => {
    res.status(404).send({message: `Stranka ${req.originalUrl} neexistuje`});
})
app.listen(port, () => {
    console.log(`My Book management application listen on port: ${port}`);
});
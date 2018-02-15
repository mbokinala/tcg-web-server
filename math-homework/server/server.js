const express = require('express');
const bodyParser = require('body-parser');

var {
    mongoose
} = require('./db/mongoose.js');
var {
    Book
} = require('./models/book.js');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to library api');
});

app.post('/books', (req, res) => {
    var book = new Book({
        title: req.body.title,
        author: {
            first: req.body.author.first,
            last: req.body.author.last
        },
        callNumber: req.body.callNumber,
        barcode: req.body.barcode
    });

    book.save().then((doc) => {
        res.status(201).send(doc);
    }, (err) => {
        res.status(400).send(err)
    });
});

app.get('/books/:barcode', (req, res) => {
    var barcode = req.params.barcode;
    Book.findOne({barcode}, (err, book) => {
        if (err) {
            return res.status(400).send(err);
        }
        if(!book){
            return res.status(400).send(err);
        }
        res.status(200).send(book);
    });
});

app.get('/books', (req, res) => {
    Book.find({}, (err, docs) => {
        res.send(docs);
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});
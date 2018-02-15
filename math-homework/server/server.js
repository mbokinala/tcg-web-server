const express = require('express');
const bodyParser = require('body-parser');

var {
    mongoose
} = require('./db/mongoose.js');
var {
    model1
} = require('./models/model1.js');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('welcome to the tcg server you should not be here ');
});

app.post('/newuser', (req, res) => {
	res.send('this feature is not available right now sorry about that');
});

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});
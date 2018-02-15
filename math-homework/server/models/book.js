const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	author: {
		first: {
            type: String,
            required: true,
            trim: true
        },
        last: {
            type: String,
            required: true,
            trim: true
        }
	},
	callNumber: {
		type: String,
        required: true,
        trim: true,
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = {Book};
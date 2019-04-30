//Category schema
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//category schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

///make this available to our admin in our Node applications 
module.exports = mongoose.model('Category', categorySchema);
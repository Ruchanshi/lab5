//Name: Ruchanshi Desai
//File name:contact.ejs
//ID: 100729822
//date: 17 April 2020

let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);
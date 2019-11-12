const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    imgData: String,
    name: String,
    text: String,    
});

module.exports = mongoose.model('news', NewsSchema);
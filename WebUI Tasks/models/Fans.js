const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const date = new Date();

const FansAppealSchema = new Schema({
    username: String,
    text: String,    
    date: String,
});

module.exports = mongoose.model('fans', FansAppealSchema);
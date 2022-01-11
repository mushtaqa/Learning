const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id : String,
    name : String,
    gender : String
});

module.exports = mongoose.model('Posts',PostSchema);
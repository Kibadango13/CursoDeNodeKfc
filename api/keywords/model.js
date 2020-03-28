const mongoose =require('mongoose');
const schema = new mongoose.Schema({
    name : {type: String ,required : true},
    desc : String,
    url : String
});

const Keyword = new mongoose.model('Keyword',schema);
module.exports = Keyword;


const mongoose =require('mongoose');
const schema = new mongoose.Schema({
    name        :String,
    descripcion : String,
    done        : String
});

const todo = new mongoose.model('todo',schema);
module.exports = todo;


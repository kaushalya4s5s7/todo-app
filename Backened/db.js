const mongoose = require("mongoose");
//url
//"mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos"
// mongodb+srv://chaudharikaushal02:RaUnbVlaMWpn2KvQ@cluster0.fi3gjxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title : String,
    description:String,
    completed :Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}
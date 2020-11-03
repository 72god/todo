const mongoose = require('mongoose')
const DBConfig = require('../config/db');



const TodoModel = mongoose.model('todo', {
   todos:String
});


async function getTodos(){
    mongoose.connect(DBConfig.DSN);
    let data = await TodoModel.find()
    return data
}
//TODO数据存入数据库
async function saveTodos(todos) {
    mongoose.connect(DBConfig.DSN);
    // const todosData = new TodoModel({
    //     todos
    // });
    // let data = await todosData.save();
    let id = "5f9f7764f8ecb11cb421f473"
    console.log(todos);
    let data = await TodoModel.findByIdAndUpdate (id,{todos})
    console.log(data);
    return data
    
}


module.exports = {
    getTodos,
    saveTodos
}
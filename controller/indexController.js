const dataModel = require('../model/dataModel')

function saveData(req,res){
    let todos=JSON.stringify(req.body)
    dataModel.saveTodos(todos).then((todos)=>{
        res.json('issavekkkk!')
    }).catch((error)=>{
console.log(error);
    })
}

function getData(req,res){
    dataModel.getTodos().then((data)=>{
        res.json(data)
    }).catch((error)=>{
    console.log(error);

    })
}
module.exports = {
    saveData,
    getData
}

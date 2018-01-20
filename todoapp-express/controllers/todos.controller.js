var TodoService = require('../services/todos.service')

_this = this


exports.getTodos = function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)
    
    return TodoService.getTodos({}, page, limit).then(function(todos){
            return res.status(200).json({status: 200, data: todos, message: "Succesfully Todos Recieved"});
        })
        .catch(function(err){
            return res.status(400).json({status: 400, message: e.message});
    });
}

exports.createTodo = function(req, res, next){
    var todo = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    return TodoService.createTodo(todo).then(function(createdTodo){
            return res.status(201).json({status: 201, data: createdTodo, message: "Succesfully Created ToDo"})       
        })
        .catch(function(err){
            return res.status(400).json({status: 400, data: err, message: "Todo Creation was Unsuccesfull"})
    });
}

exports.updateTodo = function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }
    
    return TodoService.updateTodo(todo).then(function(updatedTodo){
            return res.status(200).json({status: 200, data: updatedTodo, message: "Succesfully Updated Tod"})
        })
        .catch(function(err){
            return res.status(400).json({status: 400., message: e.message})
    });
}

exports.removeTodo = function(req, res, next){

    var id = req.params.id;
    
    return TodoService.deleteTodo(id).then(function(deleted){
            return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
        })
        .catch(function(err){
            return res.status(400).json({status: 400, message: e.message})
    });

}
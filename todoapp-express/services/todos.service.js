var ToDo = require('../models/todo.model')

_this = this


exports.getTodos = function(query, page, limit){
    var options = {
        page,
        limit
    }
    
    return ToDo.paginate(query, options).then(function(todos){
        return todos;
    })
    .catch(function(err){
        return {data: "Error while Paginating Todos"};
    });
}

exports.createTodo = function(todo){

    var newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    })

    return newTodo.save().then(function(savedTodo){
        return savedTodo;
    })
    .catch(function(err){
        return {data: "Error while Creating Todo"};
    });
}

exports.updateTodo = function(todo){
    var id = todo.id

    return ToDo.findById(id).then(function(oldTodo){
        if(!oldTodo){
            return false;
        }

        console.log(oldTodo)

        oldTodo.title = todo.title
        oldTodo.description = todo.description
        oldTodo.status = todo.status


        console.log(oldTodo)

        return oldTodo.save().then(function(savedTodo){
            return savedTodo;
        })
        .catch(function(err){
               return {data: "And Error occured while updating the Todo"};
        });
    })
    .catch(function(err){
        return {data: "Error occured while Finding the Todo"};
    });
}

exports.deleteTodo = function(id){
    
    return ToDo.remove({_id: id}).then(function(deleted){
        if(deleted.result.n === 0){
            return {data: "Todo Could not be deleted"}
        }
        return deleted
    })
    .catch(function(err){
        return {data: "Error Occured while Deleting the Todo"};
    });
}
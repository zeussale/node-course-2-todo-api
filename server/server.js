const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    var todo = new Todo({
        text: request.body.text
    });

    todo.save().then(doc => {
        response.send(doc);
    }, error => {
        response.status(400).send(error);
    });
});

app.get('/todos', (request, response) => {
    Todo.find().then(todos => {
        response.send({todos});
    }, error => {
        response.status(400).send(error);
    });
});

app.get('/todos/:id', (request, response) => {
    var id = request.params.id;
    // response.send(request.params);

    // valid id using isValid
        // 404 - send back empty send
    if (!ObjectID.isValid(id))
        return response.status(404).send();

    // findById
    Todo.findById(id).then(todo => {
        if(!todo)
            return response.status(404).send();

        response.send({todo});
    }).catch(error => {
        response.status(404).send();
    });
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        //error
            // 404 - and send empty body back
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {app};

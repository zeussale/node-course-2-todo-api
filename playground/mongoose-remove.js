const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '59ccb3ac7bea722a37382caf'}).then(todo => {
//
// });

Todo.findByIdAndRemove('59ccb3ac7bea722a37382caf').then(todo => {
    console.log(todo);
});

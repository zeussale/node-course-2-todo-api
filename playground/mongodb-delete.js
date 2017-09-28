const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then(result => {
    //     console.log(result);
    // });
    db.collection('Users').deleteMany({name: 'Zeus'});

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then(result => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("59cb59ce8089fa18c37a2384")
    }).then(result => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});

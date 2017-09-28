const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59cb5c19986df0c329db2e02')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, error => {
    //     console.log('Unable to fetch todos', error);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, error => {
    //     console.log('Unable to fetch todos', error);
    // });

    db.collection('Users').find({name: 'Zeus'}).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, error => {
        console.log('Unable to fetch todos', error);
    });

    // db.close();
});
